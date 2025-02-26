"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { categoryColors } from "@/data/categories";
import { format } from "date-fns";
import { Clock, MoreHorizontal, RefreshCw } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";

const RECURRING_INTERVALS = {
  DAILY: "Daily",
  WEEKLY: "Weekly",
  MONTHLY: "Monthly",
  YEARLY: "Yearly",
};

const TransactionTable = ({ transactions }) => {
  const router = useRouter();

  const filteredAndSortedTransactions = transactions;

  const handleSort = () => {};

  return (
    <div className='space-y-4'>
      {/* Filters for transactions */}

      {/* Transactions */}
      <div className='rounded-md border'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[50px]'>
                <Checkbox />
              </TableHead>
              <TableHead
                className='cursor-pointer'
                onClick={() => handleSort("date")}
              >
                <div className='flex items-center'>Date</div>
              </TableHead>
              <TableHead>Description</TableHead>
              <TableHead
                className='cursor-pointer'
                onClick={() => handleSort("category")}
              >
                <div className='flex items-center'>Category</div>
              </TableHead>
              <TableHead
                className='cursor-pointer'
                onClick={() => handleSort("amount")}
              >
                <div className='flex items-center justify-end'>Amount</div>
              </TableHead>
              <TableHead>Recurring</TableHead>
              <TableHead className='w-[50px]' />
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAndSortedTransactions.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className='text-center text-muted-foreground'
                >
                  No Transactions Found
                </TableCell>
              </TableRow>
            ) : (
              filteredAndSortedTransactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell className='font-medium'>
                    {format(new Date(transaction.date), "PP")}
                  </TableCell>
                  <TableCell className='font-semibold'>
                    {transaction.description}
                  </TableCell>
                  <TableCell className='capitalize'>
                    <span
                      style={{
                        background: categoryColors[transaction.category],
                      }}
                      className='px-2 py-1 rounded text-white text-sm '
                    >
                      {transaction.category}
                    </span>
                  </TableCell>
                  <TableCell
                    className='text-right font-semibold'
                    style={{
                      color: transaction.type === "EXPENSE" ? "red" : "#22c55e",
                    }}
                  >
                    {transaction.type === "EXPENSE" ? "-" : "+"}$
                    {transaction.amount.toFixed(2)}
                  </TableCell>
                  <TableCell>
                    {transaction.isRecurring ? (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Badge
                              variant='outline'
                              className='gap-1 bg-purple-100 text-purple-700 hover:bg-purple-200 font-semibold'
                            >
                              <RefreshCw className='h-3 w-3' />
                              {
                                RECURRING_INTERVALS[
                                  transaction.recurringInterval
                                ]
                              }
                            </Badge>
                          </TooltipTrigger>
                          <TooltipContent>
                            <div className='text-sm'>
                              <div className='font-medium'>Next Date:</div>
                              <div>
                                {format(
                                  new Date(transaction.nextRecurringDate),
                                  "PP"
                                )}
                              </div>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ) : (
                      <Badge variant='outline' className='gap-1'>
                        <Clock className='h-3 w-3' />
                        One-time
                      </Badge>
                    )}
                  </TableCell>

                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant='ghost' className='h-8 w-8 p-0'>
                          <MoreHorizontal className='h-4 w-4' />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel
                          onClick={() =>
                            router.push(
                              `/transaction/create?edit=${transaction.id}`
                            )
                          }
                        >
                          Edit
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuLabel
                          className='text-destructive'
                          //   onClick={() => deleteFn([transaction.id])}
                        >
                          Delete
                        </DropdownMenuLabel>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TransactionTable;
