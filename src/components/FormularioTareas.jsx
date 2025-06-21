// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button'
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useForm } from "react-hook-form";
import { useState } from "react";

const FormularioTareas = () => {
    
    // VALIDACIONES con react-hook-form. traigo libreria de validaciones useForm()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    
    // uso un State cuando el dato cambia y quiero que se renderice en el momento
    // el State es 'tareas' es el array, ´setTareas' en la funcion para modifica el valor del state
    const [tareas,setTareas] = useState([])

    // dato: se guarda lo que el usuario cargo el input
    const agregarTarea = (dato) => {
        console.log(dato.tarea)
        //... hace una copia de 'tareas' y agrega al final la nueva tarea ingresada
        setTareas([...tareas,dato.tarea])
        // invoca a reset de la libreria de validaciones
        reset()
    }

    // funcion para borrar tarea, que enviará al hijo como props
    const borrarTarea = (nombreTarea) => {
        // fitrar el state tareas sin la tarea a eliminar
        const TareasFiltradas = tareas.filter((itemTarea) => itemTarea !== nombreTarea)
        // actualizar el state
        setTareas(TareasFiltradas)
    }

    return (
        <>
        {/* handleSubmit hace las validaciones, si todo esta ok, llama a agregarTarea */}
            <Form onSubmit={handleSubmit(agregarTarea)}>
                <Form.Group
                    className="mb-1 d-flex"
                    controlId="exampleForm.ControlInput1"
                >
                    {/* register: es para validar cada input(Form.Control), se indica todo lo que se quiera validar */}
                    <Form.Control
                        type="text"
                        placeholder="Ingresa una tarea"
                        {...register("tarea", {
                            required: "La tarea es un dato obligatorio",
                            minLength: {
                                value: 3,
                                message: "La tarea debe contener como minimo 3 caracteres",
                            },
                            maxLength: {
                                value: 50,
                                message:
                                    "La tarea debe contener hasta 50 caracteres como maximo",
                            },
                        })}
                    />
                    <Button variant="info" type="submit">
                        <i className="bi bi-plus text-dark"></i>
                    </Button>
                </Form.Group>

                {/* muestra mensaje de error, cuando existe (?). Es una propiedad que puede o no existir, por eso va el ? */}
                <Form.Text className="text-danger">{errors.tarea?.message}</Form.Text>
            </Form>

            {/* con props manda los datos para armar lista de tareas */}
            {/* props = {state}, funciones, etc */}
            <ListaTareas tareas={tareas} borrarTarea={borrarTarea}></ListaTareas>
        </>
    );
};

export default FormularioTareas;
