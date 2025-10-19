import DataTable from '../components/DataTable';
import SalesChart from '../components/SalesChart'; 
import { user_data } from '../data/user';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
      <SalesChart data={user_data} />
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">User Management</h2>
        <DataTable data={user_data} />
      </div>
    </div>
  );
}