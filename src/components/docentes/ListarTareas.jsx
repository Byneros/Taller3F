import React from 'react';

const { Option } = Select;

const ListarTareas = () => {

    return (
        <div>
            <h2>Listar Tarea</h2>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    );
}
// Exportamos el componente `App` como exportación por defecto de este módulo.
// Esto significa que otros módulos que importen este archivo obtendrán el componente `App` por defecto.
export default ListarTareas;