# Stage 1: Install dependencies
FROM node:18-alpine AS deps
WORKDIR /app

# Copy package.json and lock files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Stage 2: Build the application
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the Next.js application for production
RUN npm run build

# Stage 3: Production image
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy the built application from the builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000

# Start the Node.js server
CMD ["node", "server.js"]
```

---
### **Step 2: Create the `.dockerignore` File**

This file works just like `.gitignore`. It tells Docker which files and folders to ignore when building the image, making the process faster and more secure.

1.  In the **root directory** of your project, create a new file named `.dockerignore`.
2.  Open the file and add the following lines:

```:Docker Ignore Configuration:.dockerignore
Dockerfile
.dockerignore
node_modules
.next
.git
npm-debug.log
README.md
```

---
### **Step 3: Test Your Docker Image (Optional but Recommended)**

Before you commit, it's a good idea to test if the `Dockerfile` works. Make sure you have Docker Desktop installed and running on your computer.

1.  **Build the image:** Open your terminal and run this command from the root of your project. The `.` at the end is important.
    ```bash
    docker build -t eyego-dashboard .
    ```
2.  **Run the container:** Once the build is finished, run this command to start your application inside the container.
    ```bash
    docker run -p 3002:3000 eyego-dashboard
    
