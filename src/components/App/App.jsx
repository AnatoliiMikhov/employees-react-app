import { useState } from 'react'

/* ------------------------- uuid Generator for key ------------------------- */
/* -- https://www.npmjs.com/package/uuid#uuidv5name-namespace-buffer-offset - */
import { v4 as uuidv4 } from 'uuid'

/* ---------------------------------- Data ---------------------------------- */
import { employeesArray } from '../../data'

/* ------------------------------- Components ------------------------------- */
import AppInfo from '../AppInfo/AppInfo'
import SearchPanel from '../SearchPanel/SearchPanel'
import AppFilter from '../AppFilter/AppFilter'
import EmployeesList from '../EmployeesList/EmployeesList'
import EmployeesAddForm from '../EmployeesAddForm/EmployeesAddForm'

/* --------------------------------- Styles --------------------------------- */
import './App.css'

/* ------------------------------ App Component ----------------------------- */
function App () {
    const [ data, setData ] = useState( employeesArray )
    const [ term, setTerm ] = useState( '' )

    const visibleData = searchEmployees( data, term )
    const employees = data.length
    const increased = data.filter( ( elem ) => elem.increase ).length

    return (
        <div className='app'>
            <AppInfo employees={ employees } increased={ increased } />

            <div className='search-panel'>
                <SearchPanel onUpdateSearch={ onUpdateSearch } />
                <AppFilter />
            </div>

            <EmployeesList
                data={ visibleData }
                onDelete={ deleteItem }
                onToggleProp={ onToggleProp }
                onChangeSalary={ onChangeSalary }
            />
            <EmployeesAddForm onAddItem={ addItem } />
        </div>
    )

    function deleteItem ( id ) {
        setData( ( data ) => data.filter( ( item ) => item.id !== id ) )
    }

    function addItem ( name, salary ) {
        if ( name && salary > 0 && name.length > 1 ) {
            const newEmployee = {
                id: uuidv4(),
                name,
                salary,
                increase: false,
                liked: false,
            }
            setData( ( data ) => [ ...data, newEmployee ] )
        }
    }

    function onToggleProp ( id, prop ) {
        setData( ( data ) =>
            data.map( ( elem ) =>
                elem.id === id ? { ...elem, [ prop ]: !elem[ prop ] } : elem
            )
        )
    }

    function onChangeSalary ( id, salaryValue ) {
        const newSalaryValue = salaryValue.slice( 1 )

        setData( ( data ) => (
            data.map( ( elem ) => (
                elem.id === id ? { ...elem, 'salary': newSalaryValue } : elem
            ) )
        ) )
        console.log( data )
    }

    function searchEmployees ( items, term ) {
        if ( term.length === 0 ) {
            return items
        }
        return items.filter( ( item ) => {
            return item.name.toLowerCase().indexOf( term.toLowerCase() ) > -1
        } )
    }

    function onUpdateSearch ( term ) {
        setTerm( term )
    }
}

export default App
