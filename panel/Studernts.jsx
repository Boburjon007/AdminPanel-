import { Button } from 'antd'
import React from 'react'
import AdminLayout from './AdminLayout'

const Students = () => {
  const comumns = [
    {
      title: "Id",
      dataIndex: "Id",
    },
    {
      title: "kourse",
      dataIndex: "kourse",
    },
    {
      title: "Group",
      dataIndex: "group",
    },
    {
      title: "Active",
      dataIndex: "active",
    },
      // {
      // title: "Actions",
      // render: ( row ) => <div>
      //   <Button type='primary' onClick={() => editStudents( row )}>E</Button>
      //   <Button type='danger' onClick={() => deleteStudents( row )}>D</Button>
      // </div>
      // }

  ]
  return (
    <AdminLayout>
      
    </AdminLayout>
  )
}

export default Students
