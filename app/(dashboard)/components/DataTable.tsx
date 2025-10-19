'use client';

import {
  useReactTable, getCoreRowModel, flexRender, getPaginationRowModel,
  getSortedRowModel, getFilteredRowModel, SortingState, ColumnFiltersState,
} from '@tanstack/react-table';
import { useState } from 'react';
import type { User } from '../data/user';
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';
import { FileDown, Sheet, Search, ArrowUpDown } from 'lucide-react';

const columns = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'email', header: 'Email' },
  { accessorKey: 'role', header: 'Role' },
  { accessorKey: 'status', header: 'Status' },
];

export default function DataTable({ data }: { data: User[] }) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data, columns, getCoreRowModel: getCoreRowModel(), getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(), getFilteredRowModel: getFilteredRowModel(),
    state: { sorting, columnFilters }, onSortingChange: setSorting, onColumnFiltersChange: setColumnFilters,
  });

  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.text("User Data", 14, 15);
    const body = data.map(user => {
      return `ID: ${user.id}, Name: ${user.name}, Email: ${user.email}, Role: ${user.role}`;
    });
    doc.text(body, 14, 25);
    doc.save('user-data.pdf');
  };

  const handleExportXLSX = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Users');
    XLSX.writeFile(workbook, 'user-data.xlsx');
  };

  return (
    <div>
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
          <input
            type="text"
            placeholder="Search by name..."
            value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
            onChange={(e) => table.getColumn('name')?.setFilterValue(e.target.value)}
            className="w-full rounded-md border-neutral-300 pl-10 shadow-sm focus:border-primary-500 focus:ring-primary-500 md:w-64"
          />
        </div>
        
        <select
          value={(table.getColumn('role')?.getFilterValue() as string) ?? ''}
          onChange={(e) => table.getColumn('role')?.setFilterValue(e.target.value)}
          className="w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 md:w-auto"
        >
          <option value="">All Roles</option>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="Viewer">Viewer</option>
        </select>

        <select
          value={(table.getColumn('status')?.getFilterValue() as string) ?? ''}
          onChange={(e) => table.getColumn('status')?.setFilterValue(e.target.value)}
          className="w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 md:w-auto"
        >
          <option value="">All Statuses</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <div className="flex space-x-2 md:ml-auto">
          <button onClick={handleExportPDF} className="inline-flex items-center space-x-2 rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm transition-colors hover:bg-neutral-50">
            <FileDown className="h-4 w-4" /> <span>PDF</span>
          </button>
          <button onClick={handleExportXLSX} className="inline-flex items-center space-x-2 rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm transition-colors hover:bg-neutral-50">
            <Sheet className="h-4 w-4" /> <span>Excel</span>
          </button>
        </div>
      </div>

      <div className="mt-4 overflow-hidden rounded-md border border-neutral-200">
        <table className="min-w-full divide-y divide-neutral-200">
          <thead className="bg-neutral-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    <div
                      className={header.column.getCanSort() ? 'flex cursor-pointer select-none items-center space-x-2' : ''}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      <span>{flexRender(header.column.columnDef.header, header.getContext())}</span>
                      {header.column.getCanSort() && <ArrowUpDown className="h-3 w-3" />}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-neutral-200 bg-white">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="transition-colors hover:bg-neutral-50">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="whitespace-nowrap px-6 py-4 text-sm text-neutral-800">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 flex items-center justify-between">
        <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}
          className="rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm transition-colors hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed">
          Previous
        </button>
        <span className="text-sm font-medium text-neutral-600">
          Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </span>
        <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}
          className="rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm transition-colors hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed">
          Next
        </button>
      </div>
    </div>
  );
}

