import { Button, Result } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
   
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary">
          <Link to="/login">Back Home</Link></Button>}
      />,
      mountNode,
      
    </div>
  )
}

export default Notfound
