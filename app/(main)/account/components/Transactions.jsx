import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Checkbox } from '@radix-ui/react-checkbox'

const TransactionsTable = ({transactions}) => {
  return (
    <div className='space-y-4'>
        {/* filters */}
        {/* transactions */}
        <div className='rounded-md border'>
        <Table>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[50px]">
        <Checkbox/>
      </TableHead>
       <TableHead className="cursor-pointer">
        Date
      </TableHead>
      
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>
</div>
    </div>
  )
}

export default TransactionsTable