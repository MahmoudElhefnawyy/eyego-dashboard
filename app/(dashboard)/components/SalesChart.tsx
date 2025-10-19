'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { User } from '../data/user';

export default function SalesChart({ data }: { data: User[] }) {
  
  const processedData = data.reduce((acc, user) => {
    const role = user.role;
    const existingRole = acc.find((item) => item.name === role);
    if (existingRole) {
      existingRole.users += 1;
    } else {
      acc.push({ name: role, users: 1 });
    }
    return acc;
  }, [] as { name: string; users: number }[]);

  return (
    <div className="rounded-lg bg-white p-4 shadow-md" style={{ height: '300px' }}>
      <h3 className="mb-4 text-lg font-semibold">Users by Role</h3>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={processedData}>
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="users" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}