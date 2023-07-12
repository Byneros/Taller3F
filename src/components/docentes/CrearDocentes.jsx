import React from 'react';
import { Form, Input, Button, Select, DatePicker } from 'antd';
const { Option } = Select;

const CrearDocentes = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Title"
                name="title"
                rules={[{ required: true, message: 'Please input the title!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Description"
                name="description"
                rules={[{ required: true, message: 'Please input the description!' }]}
            >
                <Input.TextArea />
            </Form.Item>

            <Form.Item
                label="Status"
                name="status"
                rules={[{ required: true, message: 'Please select the status!' }]}
            >
                <Select placeholder="Select a status">
                    <Option value="pending">Pending</Option>
                    <Option value="in_progress">In Progress</Option>
                    <Option value="completed">Completed</Option>
                </Select>
            </Form.Item>

            <Form.Item
                label="Due Date"
                name="dueDate"
                rules={[{ required: true, message: 'Please select the due date!' }]}
            >
                <DatePicker />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}

export default CrearDocentes;
