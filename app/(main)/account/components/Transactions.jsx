"use client";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Checkbox } from '@/components/ui/checkbox'
import { format } from 'date-fns';
import { date } from 'zod';

const TransactionsTable = ({ transactions }) => {
  const filteredAndSortedTransactions = transactions;

  const handleSort = () => { };




  return (
    <div className='space-y-4'>
      {/* filters */}
      {/* transactions */}
      <div className='rounded-md border'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox />
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("date")}
              >
                <div className='flex items-center'>Date</div>
              </TableHead>
              <TableHead>Description</TableHead>


              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("category")}
              >
                <div className='flex items-center'>Category</div>
              </TableHead>
              <TableHead>Description</TableHead>


              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("amount")}
              >
                <div className='flex items-center justify-normal'>Amount</div>
              </TableHead>
              <TableHead>Recuring</TableHead>
              <TableHead className="w-[50px]" />

            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAndSortedTransactions.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center text-muted-foreground">
                  No Transaction Found
                </TableCell>
              </TableRow>
            ) : (
              filteredAndSortedTransactions.map((Transaction)=>(
                <TableRow key={Transaction.id}>
                <TableCell> <Checkbox /> </TableCell>
                <TableCell>{format(new Date(Transaction.date), 'PP')}</TableCell>
                <TableCell> {Transaction.description} </TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
              ))
              
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default TransactionsTable