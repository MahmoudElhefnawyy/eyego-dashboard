export type User = {
  id: number;
  name: string;
  email: string;
  role: 'Admin' | 'Editor' | 'Viewer';
  status: 'Active' | 'Inactive';
  lastLogin: string;
};

export const user_data: User[] = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin', status: 'Active', lastLogin: '2025-10-18' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Editor', status: 'Active', lastLogin: '2025-10-17' },
  { id: 3, name: 'Sam Wilson', email: 'sam.wilson@example.com', role: 'Viewer', status: 'Inactive', lastLogin: '2025-09-22' },
  { id: 4, name: 'Alice Johnson', email: 'alice.j@example.com', role: 'Editor', status: 'Active', lastLogin: '2025-10-18' },
  { id: 5, name: 'Bob Brown', email: 'bob.brown@example.com', role: 'Viewer', status: 'Active', lastLogin: '2025-10-15' },
  { id: 6, name: 'Charlie Davis', email: 'charlie.d@example.com', role: 'Admin', status: 'Inactive', lastLogin: '2025-08-30' },
  { id: 7, name: 'Diana Miller', email: 'diana.m@example.com', role: 'Editor', status: 'Active', lastLogin: '2025-10-18' },
  { id: 8, name: 'Ethan Garcia', email: 'ethan.g@example.com', role: 'Viewer', status: 'Active', lastLogin: '2025-10-16' },
  { id: 9, name: 'Fiona White', email: 'fiona.w@example.com', role: 'Admin', status: 'Active', lastLogin: '2025-10-17' },
  { id: 10, name: 'George Harris', email: 'george.h@example.com', role: 'Viewer', status: 'Inactive', lastLogin: '2025-07-11' },
];