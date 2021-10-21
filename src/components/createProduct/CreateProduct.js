import React, { useState } from 'react'
import { useHistory } from 'react-router'
import './products.css'

const CreateProduct = () => {

    const history = useHistory();
    const [formValues, setFormValues] = useState({})

    const changeField = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault();
        console.log('formValues', formValues);

        fetch('http://localhost:5000/', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(formValues), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => console.log('Success:', response));

    }


    return (
        <div className="productForm">
            <form>
                <div class="mb-3">
                    <input onChange={changeField} value={formValues.name} name="name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name" />
                </div>
                <div class="mb-3">
                    <input onChange={changeField} value={formValues.valor} name="valor" type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="valor" />
                </div>
                <div class="mb-3">
                    <input onChange={changeField} value={formValues.peso} name="peso" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="peso" />
                </div>
                <div class="mb-3">
                    <input onChange={changeField} value={formValues.stock} name="stock" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="stock" />
                </div>
                <div class="mb-3">
                    <input onChange={changeField} value={formValues.category} name="category" type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="categoria" />
                </div>
                <div class="mb-3">
                    <textarea onChange={changeField} value={formValues.descripcion} name="descripcion" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="descripcion" />
                </div>
                <button type="submit" onClick={submit} class="btn btn-primary">Crear producto</button>
            </form>
        </div>
    )
}

export default CreateProduct
