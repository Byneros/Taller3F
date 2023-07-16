import React from 'react';
import { Form, Input, Button, Select, DatePicker } from 'antd';
import HttpClient from '../../services/HttpTaskClient';
import { useTask } from '../../services/useCreateTask';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useSubmit } from 'react-router-dom';

const { Option } = Select;
const ModificarTareas = () => {
    const queryClient = new HttpClient();
    const [form] = Form.useForm(); // Utiliza el hook useForm para obtener la instancia del formulario

    const onFinish = (values) => {
        console.log('Success:', values);
        queryClient.createTask(values).then((data) => {
                console.log(data);
                form.resetFields(); // Limpia los campos del formulario después de enviar los datos
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const submit = () => {
        const id = form.getFieldValue('id');
        queryClient
            .getTask(id) // Realiza la búsqueda de la tarea por ID
            .then((data) => {
                console.log(data);
                if (data) {
                    form.setFieldsValue({
                        nombre: data.nombre,
                        description: data.description,
                        estado: data.estado,
                        fechaLimite: data.fechaLimite,
                    });
                } else {
                    form.resetFields(); // Limpia los campos del formulario
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const onDelete = () => {
        // Lógica para eliminar la tarea
    };

    const onUpdate = () => {
        // Lógica para guardar los cambios en la tarea
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            form={form} // Asigna la instancia del formulario al componente Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <h2>Modificar Tareas</h2>

            <Form.Item
                label="Id de Tareas"
                name="id"
                rules={[{ required: true, message: 'Please input the id!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" onClick={submit}>
                    Submit
                </Button>
            </Form.Item>

            <Form.Item
                label="Title"
                name="nombre"
                rules={[{ required: true, message: 'Please input the title!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Descripcion"
                name="description"
                rules={[{ required: true, message: 'Please input the description!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Status"
                name="estado"
                rules={[{ required: true, message: 'Please select the status!' }]}
            >
                <Select placeholder="Select a status">
                    <Option value="creada">Pending</Option>
                    <Option value="progreso">In Progress</Option>
                    <Option value="finalizada">Completed</Option>
                </Select>
            </Form.Item>

            <Form.Item
                label="Due Date"
                name="fechaLimite"
                rules={[{ required: true, message: 'Please select the due date!' }]}
            >
                <DatePicker />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" onClick={onDelete}>
                    Delete
                </Button>

                <Button type="primary" onClick={onUpdate}>
                    Update
                </Button>
            </Form.Item>
        </Form>
    );
};

export default ModificarTareas;
