
import DataTable from '../components/DataTable';
import { user_data } from '../data/user';

export default function DashboardPage() {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold text-gray-900">User Management</h1>
      <DataTable data={user_data} />
    </div>
  );
}