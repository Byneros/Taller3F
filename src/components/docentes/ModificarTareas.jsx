import React, { useState } from 'react';
import { Form, Input, Button, Select, DatePicker } from 'antd';
import HttpClient from '../../services/HttpTaskClient';

const { Option } = Select;

const ModificarTareas = () => {
    const queryClient = new HttpClient();
    const [form] = Form.useForm();
    const [taskData, setTaskData] = useState({
        nombre: '',
        description: '',
        estado: '',
        fechaLimite: null,
    });

    const onFinish = (values) => {
        console.log('Success:', values);
        queryClient
            .getTask(values.id) // Realiza la búsqueda de la tarea por ID
            .then((data) => {
                console.log(data);
                if (data) {
                    setTaskData({
                        nombre: data.nombre,
                        description: data.description,
                        estado: data.estado,
                        fechaLimite: data.fechaLimite,
                    });
                    form.setFieldsValue(data); // Establece los valores de los campos del formulario con los datos de la tarea
                } else {
                    // Si no se encuentra la tarea, se limpian los campos del formulario
                    setTaskData({
                        nombre: '',
                        description: '',
                        estado: '',
                        fechaLimite: null,
                    });
                    form.resetFields(); // Limpia los campos del formulario
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const onDelete = () => {
        // Lógica para eliminar la tarea
        // Utiliza los valores actuales en el estado taskData
        // Puedes hacer la llamada a la función correspondiente en HttpClient
    };

    const onUpdate = () => {
        // Lógica para guardar los cambios en la tarea
        // Utiliza los valores actuales en el estado taskData
        // Puedes hacer la llamada a la función correspondiente en HttpClient
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            form={form}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={taskData}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <h2>Modificar tarea</h2>
            <Form.Item
                label="ID de Tarea"
                name="id"
                rules={[{ required: true, message: 'Please input the ID!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Consultar
                </Button>
            </Form.Item>

            <Form.Item
                label="Nombre"
                name="nombre"
                rules={[{ required: true, message: 'Please input the name!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Descripción"
                name="description"
                rules={[{ required: true, message: 'Please input the description!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Estado"
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
                label="Fecha límite"
                name="fechaLimite"
                rules={[{ required: true, message: 'Please select the due date!' }]}
            >
                <DatePicker />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" onClick={onDelete}>
                    Eliminar
                </Button>
                <Button type="primary" onClick={onUpdate}>
                    Guardar
                </Button>
            </Form.Item>
        </Form>
    );
};

export default ModificarTareas;
