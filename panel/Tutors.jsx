import { Button, Table, Form, Input, message } from 'antd'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { URL } from '../constants'
import { Modal } from 'antd';
import AdminLayout from './AdminLayout'
import Checkbox from 'antd/lib/checkbox/Checkbox'

const formlayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};
const Tutors = () => {
  const [ data, setData ] = useState( [] );
  const [selected, setSelected] = useState("")
  const [ loading, setloading ] = useState( true );
  const [ isModalVisible, setIsModalVisible ] = useState( false );
  const [ form ] = Form.useForm()
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "FullName",
      dataIndex: "fullname",
    },
    {
      title: "userName",
      dataIndex: "username",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Actions",
      render: (row) => <div>
        <Button  type='primary' onClick={() => editTutor(row)}>E</Button>
        <Button type='danger' onClick={() => deleteTutor(row)}>D</Button>
      </div>
    }
  ];
  useEffect( () => {
    getTutors()
  }, [] );
  const Showmodal = () => {
    setSelected("");
    setIsModalVisible( true );

  }
  const getTutors = () => {
axios.get( URL + 'admin/tutors' ).then( ( res ) => {
      setData( res.data );
      setloading( false )
    } );
  };

  const Addtutor = () => {
    form.validateFields().then( values => {
      selected ?
      axios.put( URL + "admin/tutor/edit/" + selected.id, values ).then( ( res ) => {
        getTutors();
    setIsModalVisible( false );
    form.resetFields();
      })
      :  axios.post( URL + "admin/tutor/save", values ).then( ( res ) => {
          getTutors();
          setIsModalVisible( false );
          form.resetFields();
    });
  });
  };
  
  const editTutor = (tutor) => {
    setSelected(tutor)
    setIsModalVisible( true );
    form.setFieldsValue(tutor);
    axios.put()
   }
  const deleteTutor = (tutor) => {
    axios.delete(URL + "admin/tutor/delete/" + tutor.id ).then((res) =>{
      getTutors();  
      message.info(`Tutor with ${tutor.id} deleted`)
    })
   }

  const handleCancel = () => {
    setIsModalVisible( false );
  };

  return (
    <AdminLayout>
      <Table
        title={() =>
          <div className='d-flex justify-content-between align-items-center'>
            <h3>
              Tutors
            </h3>
            <Button type='primary' onClick={Showmodal}>Add Tutor</Button>
          </div>}
        columns={columns}
        dataSource={data}
        loading={loading}
      />
      <Modal title="Basic Modal"
        visible={isModalVisible}
        onOk={Addtutor}
        onCancel={handleCancel}
        okText={selected ? "Saqlash" :"Qo'shish"}
        cancelText='yopish'
      >
        <Form {...formlayout} form={form}>
          <Form.Item
            label="FullName"
            name="fullname"
            rules={[ { required: true, message: "to'ldirilmagan" } ]}>
            <Input placeholder="FullName" />
          </Form.Item>

          <Form.Item
            label="UserName"
            name="username"
            rules={[ { required: true, message: "to'ldirilmagan" } ]}>
            <Input placeholder="UserName" />
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[ { required: true, message: "to'ldirilmagan" } ]}>
            <Input placeholder="GroupId" />
          </Form.Item>

          <Form.Item name="groupId"
            label="GroupId"
            rules={[ { required: true, message: "to'ldirilmagan" } ]}>
            <Input placeholder="0" type='number' />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form>

      </Modal>
    </AdminLayout>
  )
}


export default Tutors
