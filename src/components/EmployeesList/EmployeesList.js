import EmployeesListItem from '../EmployeesListItem/EmployeesListItem'

import './EmployeesList.css'

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

    return <ul className='app-list list-group'>{ elements }</ul>
}

export default EmployeesList
