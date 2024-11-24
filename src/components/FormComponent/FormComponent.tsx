import { ChangeEvent, useState } from "react"
import { useForm } from "../hooks/useForm"

export const FormComponent = () => {
    const {values, handleChange, resetForm} = useForm({
        email: '',
        nombre: '',
        edad: 0
    })

    const{email,nombre,edad} = values

    const handleSubmitForm = ()=>{
        console.log(values)
    }

    const handleResetForm = () =>{
        resetForm()
    }

    return (
    <div>
      <div>
        <h2>Formulario</h2>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', gap: '2vh'}}>
        <input value={email} onChange={handleChange} type="email" name="email" placeholder="example@example.com"/>
        <input value={nombre} onChange={handleChange} type="text" name="nombre" placeholder="nombre"/>
        <input value={edad} onChange={handleChange} type="number" name="edad" placeholder="Edad" />
      </div>
      <div>
        <button onClick={handleSubmitForm}>Enviar</button>
        <button onClick={handleResetForm}>Resetear</button>
      </div>
    </div>
  )
}