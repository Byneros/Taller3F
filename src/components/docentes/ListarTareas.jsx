/**import React, { useEffect, useState } from 'react';
// utilizar un libreria ant y httpclient para 
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import mongoose from 'mongoose';

// Definir el esquema del modelo
const dataSchema = new mongoose.Schema({
    nombre: String,
    descripcion: String,
    estado: String,
    fechalimite: Date
});

// Crear el modelo usando el esquema
const DataModel = mongoose.model('Data', dataSchema);

function DataTable() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Conectar a Mongoose
        mongoose.connect( 'mongodb+srv://Byneros:0621@cluster0.zrp0lem.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
            .then(() => console.log('Conexión exitosa a MongoDB'))
            .catch((error) => console.error('Error de conexión a MongoDB:', error));

        // Obtener los datos de la base de datos
        DataModel.find({})
            .then((result) => {
                setData(result);
            })
            .catch((error) => console.error('Error al obtener los datos:', error));
    }, []);
    const columns: GridColDef[] = [
        { field: 'nombre', headerName: 'Nombre', width: 130 },
        { field: 'descripcion', headerName: 'Descripcion', width: 130 },
        { field: 'estado', headerName: 'Estado', width: 90 },
        { field: 'fechaLimite', headerName: 'Fecha Limite', type: 'dateTime', width: 90,}
    ];

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={5}
                checkboxSelection
            />
        </div>
    );
};

const ListarTareas = () => {
    return (
        <DataTable />
    );
};
// Exportamos el componente `App` como exportación por defecto de este módulo.
// Esto significa que otros módulos que importen este archivo obtendrán el componente `App` por defecto.
export default ListarTareas;


*/