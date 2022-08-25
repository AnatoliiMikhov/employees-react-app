import { useState } from 'react'
import './EmployeesAddForm.scss'

const EmployeesAddForm = ( { onAddItem } ) => {
    const [ name, setName ] = useState( '' )
    const [ salary, setSalary ] = useState( '' )

    const onNameValueChange = ( e ) => setName( e.target.value )
    const onSalaryValueChange = ( e ) => setSalary( e.target.value )

    const onSubmit = ( e ) => {
        e.preventDefault()
        onAddItem( name, salary )
        setName( '' )
        setSalary( '' )
    }

    return (
        <div className='app-add-form'>
            <h3>Додати нового співробітника</h3>
            <form className='add-form d-flex' onSubmit={ onSubmit }>
                <input
                    type='text'
                    className='form-control new-post-label'
                    placeholder='Як його звати?'
                    name='name'
                    value={ name }
                    onChange={ onNameValueChange }
                />
                <input
                    type='number'
                    className='form-control new-post-label'
                    placeholder='З/П в $?'
                    name='salary'
                    value={ salary }
                    onChange={ onSalaryValueChange }
                />

                <button type='submit' className='btn btn-outline-light'>
                    Додати
                </button>
            </form>
        </div>
    )
}

export default EmployeesAddForm
