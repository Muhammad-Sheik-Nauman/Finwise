import { getAccountWithTransactions } from '@/actions/accounts'
import { notFound } from 'next/navigation';
import React, { Suspense } from 'react'
import TransactionsTable from '../components/Transactions';
import { BarLoader } from 'react-spinners';

const accountsPAge = async({params}) => {
    const accountData = await getAccountWithTransactions(params.id);
    if(!accountData){
        notFound();
    }
const{transactions,...account} = accountData;

  return (
    
    <div className='px-5'>
        <div className=' flex items-end justify-between mx-10'>
        <div>
            <h1 className="text-5xl sm:text-6xl font-bold  gradient-title capitalize">
            {account.name}
          </h1>
            <p className="text-muted-foreground">
            {account.type.charAt(0) + account.type.slice(1).toLowerCase()}{" "}
            Account
          </p>
        </div>
        </div>
        <div className='text-right pb-2'>
            <div className='text-xl sm:text-2xl font-bold'>
                ${parseFloat(account.balance).toFixed(2)}
                <p className='text-sm text-muted-foreground'>{account._count.transactions} Transactions</p>
            
        </div>
        {/* chart section */}
        {/* transaction table */}
        <Suspense fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}>
            <TransactionsTable transactions={transactions}/>
        </Suspense>



</div>

    </div>
  )
}

export default accountsPAge