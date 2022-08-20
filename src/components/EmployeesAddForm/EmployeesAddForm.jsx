import { useState } from 'react'
import './EmployeesAddForm.css'

const EmployeesAddForm = () => {

    const [ name, setName ] = useState( '' )
    const [ salary, setSalary ] = useState( 0 )

    const onNameValueChange = ( e ) => setName( e.target.value )
    const onSalaryValueChange = ( e ) => setSalary( e.target.value )

    return (
        <div className="app-add-form">
            <h3>Додати нового співробітника</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Як його звати?"
                    name='name'
                    value={ name }
                    onChange={ onNameValueChange }
                />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?"
                    name='salary'
                    value={ salary }
                    onChange={ onSalaryValueChange }
                />

                <button type="submit"
                    className="btn btn-outline-light">Додати</button>
            </form>
        </div>
    )
}

export default EmployeesAddForm
