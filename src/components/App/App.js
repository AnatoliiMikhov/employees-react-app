import { useState } from 'react'

/* -- https://www.npmjs.com/package/uuid#uuidv5name-namespace-buffer-offset - */
import { v4 as uuidv4 } from 'uuid'

import { employeesArray } from '../../data'

import AppInfo from '../AppInfo/AppInfo'
import SearchPanel from '../SearchPanel/SearchPanel'
import AppFilter from '../AppFilter/AppFilter'
import EmployeesList from '../EmployeesList/EmployeesList'
import EmployeesAddForm from '../EmployeesAddForm/EmployeesAddFormClass'

import './App.css'

function App () {

    const [ data, setData ] = useState( employeesArray )

    const employees = data.length
    const increased = data.filter( elem => elem.increase ).length

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

    // Way First
    // function onToggleIncrease ( id ) {
    //     setData( data => {
    //         const index = data.findIndex( elem => elem.id === id )
    //         const old = data[ index ]
    //         const newItem = { ...old, increase: !old.increase }
    //         const newData = [ ...data.slice( 0, index ), newItem, ...data.slice( index + 1 ) ]
    //         return newData
    //     } )
    // }

    // Way Second
    // function onToggleLiked ( id ) {
    //     setData( data => (
    //         data.map( elem => ( elem.id === id ) ? { ...elem, liked: !elem.liked } : elem
    //         ) ) )
    // }

    // Way Third
    function onToggleProp ( id, prop ) {
        setData( data => (
            data.map( elem => ( elem.id === id ) ? { ...elem, [ prop ]: !elem[ prop ] } : elem )
        ) )
    }

    return (
        <div className='app'>
            <AppInfo
                employees={ employees }
                increased={ increased } />

            <div className='search-panel'>
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployeesList
                data={ data }
                onDelete={ deleteItem }
                onToggleProp={ onToggleProp }
            />
            <EmployeesAddForm onAddItem={ addItem } />
        </div>
    )
}

export default App
