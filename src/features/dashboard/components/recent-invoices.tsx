/* eslint-disable react-refresh/only-export-components */

import {
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
  type VisibilityState,
} from "@tanstack/react-table";
import {
  CircleAlert,
  CircleCheck,
  CircleDashed,
  DownloadCloud,
  MoreHorizontal,
  Plus,
} from "lucide-react";
import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "@tanstack/react-router";

type Invoice = {
  invoice: string;
  client: string;
  paymentStatus: string;
  totalAmount: string;
  paymentMethod: string;
  sendAt?: string;
};

const data: Invoice[] = [
  {
    invoice: "INV-1001",
    client: "Acme Corp",
    paymentStatus: "Paid",
    totalAmount: "₹12,500",
    paymentMethod: "Bank Transfer",
    sendAt: "2025-07-15T10:30:00Z",
  },
  {
    invoice: "INV-1002",
    client: "Pixel Studio",
    paymentStatus: "Pending",
    totalAmount: "₹8,000",
    paymentMethod: "UPI",
    sendAt: "2025-07-18T14:20:00Z",
  },
  {
    invoice: "INV-1003",
    client: "Brightway Solutions",
    paymentStatus: "Overdue",
    totalAmount: "₹15,000",
    paymentMethod: "Credit Card",
    sendAt: "2025-07-10T09:15:00Z",
  },
  {
    invoice: "INV-1004",
    client: "Nova Interiors",
    paymentStatus: "Paid",
    totalAmount: "₹22,000",
    paymentMethod: "Cash",
    sendAt: "2025-07-12T16:00:00Z",
  },
  {
    invoice: "INV-1005",
    client: "Skyline Tech",
    paymentStatus: "Pending",
    totalAmount: "₹9,500",
    paymentMethod: "UPI",
    sendAt: "2025-07-22T11:45:00Z",
  },
  {
    invoice: "INV-1006",
    client: "Evergreen Traders",
    paymentStatus: "Overdue",
    totalAmount: "₹6,800",
    paymentMethod: "Bank Transfer",
    sendAt: "2025-07-08T08:10:00Z",
  },
  {
    invoice: "INV-1007",
    client: "Blue Horizon",
    paymentStatus: "Paid",
    totalAmount: "₹18,200",
    paymentMethod: "Credit Card",
    sendAt: "2025-07-14T15:30:00Z",
  },
  {
    invoice: "INV-1008",
    client: "Golden Leaf Pvt Ltd",
    paymentStatus: "Pending",
    totalAmount: "₹11,000",
    paymentMethod: "Bank Transfer",
    sendAt: "2025-07-19T10:00:00Z",
  },
  {
    invoice: "INV-1009",
    client: "Sunrise Media",
    paymentStatus: "Paid",
    totalAmount: "₹7,600",
    paymentMethod: "UPI",
    sendAt: "2025-07-13T13:20:00Z",
  },
  {
    invoice: "INV-1010",
    client: "NextGen Logistics",
    paymentStatus: "Overdue",
    totalAmount: "₹20,000",
    paymentMethod: "Bank Transfer",
    sendAt: "2025-07-05T09:00:00Z",
  },
];

export const columns: ColumnDef<Invoice>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "invoice",
    header: "Invoice",
  },
  {
    accessorKey: "client",
    header: "Client",
  },
  {
    accessorKey: "paymentMethod",
    header: "Method",
  },
  {
    accessorKey: "paymentStatus",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant="outline" className="text-muted-foreground px-1.5">
        {row.original.paymentStatus === "Paid" ? (
          <CircleCheck className="text-green-500 dark:text-green-400" />
        ) : row.original.paymentStatus === "Overdue" ? (
          <CircleAlert className="text-yellow-500 dark:text-yellow-400" />
        ) : (
          <CircleDashed />
        )}
        {row.original.paymentStatus}
      </Badge>
    ),
  },
  {
    accessorKey: "sendAt",
    header: "Date Sent",
    cell: ({ row }) => {
      const date = new Date(row.getValue("sendAt"));
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
    },
  },
  {
    accessorKey: "totalAmount",
    header: "Amount",
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.invoice)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function RecentInvoices() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row justify-between items-center py-4 gap-2">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Recent Invoices</TabsTrigger>
            <TabsTrigger value="password">Recent Clients</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex items-center gap-2 justify-end">
          <Button variant="outline">
            <DownloadCloud className="size-4" /> Export
          </Button>
          <Button variant="outline">
            <Plus className="size-4" /> Client
          </Button>
          <Link to="/invoices/create" className={buttonVariants()}>
            <Plus className="size-4" /> Invoice
          </Link>
        </div>
      </div>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader className="bg-muted">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
