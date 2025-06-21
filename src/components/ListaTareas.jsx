import ListGroup from 'react-bootstrap/ListGroup';
import ItemTarea from './ItemTarea';

const ListaTareas = ({ tareas, borrarTarea }) => {
    return (
        <ListGroup className="mt-3">
            {/* key={indice} siempre va por pedido de react para identificar un componente unico */}
            {/* solo cuando uso bucle que llame varias veces al componente */}
            {tareas.map((tarea, indice) => (
                <ItemTarea key={indice} nombreTarea={tarea} borrarTarea={borrarTarea}></ItemTarea>
            ))}
        </ListGroup>
    );
};

export default ListaTareas;