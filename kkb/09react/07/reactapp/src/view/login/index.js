import React from 'react'
import { Row, Col, Form, Input, Button, Checkbox, Card } from 'antd'

function Login() {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
      <Row type="flex" justify="center" align="middle" style={{ minHeight: '100vh' }}>
        <Col className={"login-form"}>
          <Card title="登录" style={{ width: 400, marginBottom: 200 }}>
            <Form
              {...layout}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="用户名"
                name="username"
                rules={[{ required: true, message: '请输入用户名!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="密码"
                name="password"
                rules={[{ required: true, message: '请输入密码!' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>记住我</Checkbox>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  登录
                </Button>
              </Form.Item>
            </Form>
          </Card>

        </Col>
      </Row>
    </div>
  )
}
export default Login