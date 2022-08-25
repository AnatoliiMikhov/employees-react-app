import EmployeesListItem from '../EmployeesListItem/EmployeesListItem'

import './EmployeesList.scss'

const EmployeesList = ( { data, onDelete, onToggleProp, onChangeSalary } ) => {

    const elements = data.map( ( item ) => {
        const { id, ...itemProps } = item
        return (
            <EmployeesListItem
                { ...itemProps }
                key={ id }
                onDelete={ () => onDelete( id ) }
                onToggleProp={ ( e ) => onToggleProp( id, e.currentTarget.getAttribute( 'data-toggle' ) ) }
                onChangeSalary={ ( e ) => onChangeSalary( id, e.currentTarget.value ) }
            />
        )
    } )

    const notFoundMessage = ( <li>
        <h2 className='list-group-item my-0 text-center'>
            According to these criteria, no employees were found
        </h2>
    </li> )

    return (
        <ul className='app-list list-group'>
            { data.length > 0 ? elements : notFoundMessage }
        </ul>
    )
}

export default EmployeesList
