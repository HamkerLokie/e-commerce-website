import { ReactElement, useState } from 'react'
import TableHOC from '../components/admin/TableHOC'
import { Column } from 'react-table'
import { Link } from 'react-router-dom'
type DataType = {
  _id: string
  amount: number
  quantity: number
  discount: number
  status: ReactElement
  action: ReactElement
}
const Orders = () => {
  const [rows,setRows] = useState<DataType[]>([
    {
      _id: 'asds',
      amount: 50,
      quantity: 40,
      discount: 50,
      status: <span className='red'>Processing</span>,
      action: <Link to={`/orders/${`asds`}`}>View</Link>
    }
  ])

  const column: Column<DataType>[] = [
    {
      Header: 'ID',
      accessor: '_id'
    },
    {
      Header: 'Quantity',
      accessor: 'quantity'
    },
    {
      Header: 'Discount',
      accessor: 'discount'
    },
    {
      Header: 'Amount',
      accessor: 'amount'
    },
    {
      Header: 'Status',
      accessor: 'status'
    },
    {
      Header: 'Action',
      accessor: 'action'
    }
  ]

  const Table = TableHOC<DataType>(
    column,
    rows,
    'dashboard-product-box',
    'Orders',
    true
  )()

  return (
    <div className='container'>
      <h1>MyOrders</h1>
      {Table}
    </div>
  )
}

export default Orders
