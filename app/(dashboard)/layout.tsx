import AuthGuard from './components/AuthGuard'; 

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard> 
      <div className="flex h-screen bg-gray-100">
      
        <aside className="hidden w-64 flex-col bg-white p-4 shadow-md md:flex">
            
          <div className="mb-8 text-2xl font-bold text-gray-800">
            Eyego Dashboard
          </div>
          <nav>
           <a href="#" className="block rounded bg-blue-500 px-4 py-2 text-white">
             Dashboard
           </a>
           <a href="#" className="mt-2 block rounded px-4 py-2 text-gray-600 hover:bg-gray-200">
             Analytics
          </a>
          <a href="#" className="mt-2 block rounded px-4 py-2 text-gray-600 hover:bg-gray-200">
             Settings
         </a>
          </nav>
        </aside>
    
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          {children}
        </main>
      </div>
    </AuthGuard>
  );
}



