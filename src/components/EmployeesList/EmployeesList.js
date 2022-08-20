import EmployeesListItem from '../EmployeesListItem/EmployeesListItem'

import './EmployeesList.css'

const EmployeesList = ( { data, onDelete } ) => {
    const elements = data.map( ( item ) => {
        const { id, ...itemProps } = item

        return (
            <EmployeesListItem
                { ...itemProps }
                key={ id }
                onDelete={ () => onDelete( id ) }
            />
        )
    } )

    return <ul className='app-list list-group'>{ elements }</ul>
}

export default EmployeesList
