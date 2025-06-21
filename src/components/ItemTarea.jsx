import { ListGroup, Button } from 'react-bootstrap';

const ItemTarea = ({ nombreTarea, borrarTarea }) => {
    return (
        // en onClick,cuando la funcion lleva parametros, debe estar dentro de una funcion anonima
        // sino lleva parametros, se escribe onClick={funcion}
        <ListGroup.Item className="d-flex justify-content-between">
            {nombreTarea} <Button variant="danger" onClick={() => borrarTarea(nombreTarea)}>✖</Button>
        </ListGroup.Item>
    );
};
export default ItemTarea;