export type User = {
  id: number;
  name: string;
  email: string;
  role: 'Admin' | 'Editor' | 'Viewer';
  status: 'Active' | 'Inactive';
  lastLogin: string;
};

// We now have 25 users, which will create 3 pages in our table.
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
  { id: 11, name: 'Hannah Clark', email: 'hannah.c@example.com', role: 'Editor', status: 'Active', lastLogin: '2025-10-19' },
  { id: 12, name: 'Ian Martinez', email: 'ian.m@example.com', role: 'Viewer', status: 'Active', lastLogin: '2025-10-19' },
  { id: 13, name: 'Julia Rodriguez', email: 'julia.r@example.com', role: 'Admin', status: 'Active', lastLogin: '2025-10-18' },
  { id: 14, name: 'Kevin Lee', email: 'kevin.l@example.com', role: 'Editor', status: 'Inactive', lastLogin: '2025-09-01' },
  { id: 15, name: 'Laura Walker', email: 'laura.w@example.com', role: 'Viewer', status: 'Active', lastLogin: '2025-10-17' },
  { id: 16, name: 'Mason Hall', email: 'mason.h@example.com', role: 'Admin', status: 'Active', lastLogin: '2025-10-16' },
  { id: 17, name: 'Nora Allen', email: 'nora.a@example.com', role: 'Editor', status: 'Active', lastLogin: '2025-10-19' },
  { id: 18, name: 'Oscar Young', email: 'oscar.y@example.com', role: 'Viewer', status: 'Active', lastLogin: '2025-10-15' },
  { id: 19, name: 'Penelope King', email: 'penelope.k@example.com', role: 'Admin', status: 'Inactive', lastLogin: '2025-06-15' },
  { id: 20, name: 'Quinn Wright', email: 'quinn.w@example.com', role: 'Editor', status: 'Active', lastLogin: '2025-10-18' },
  { id: 21, name: 'Rachel Scott', email: 'rachel.s@example.com', role: 'Viewer', status: 'Active', lastLogin: '2025-10-19' },
  { id: 22, name: 'Steven Green', email: 'steven.g@example.com', role: 'Admin', status: 'Active', lastLogin: '2025-10-17' },
  { id: 23, name: 'Tina Adams', email: 'tina.a@example.com', role: 'Editor', status: 'Active', lastLogin: '2025-10-16' },
  { id: 24, name: 'Ulysses Baker', email: 'ulysses.b@example.com', role: 'Viewer', status: 'Inactive', lastLogin: '2025-05-20' },
  { id: 25, name: 'Victoria Carter', email: 'victoria.c@example.com', role: 'Admin', status: 'Active', lastLogin: '2025-10-19' },
];
