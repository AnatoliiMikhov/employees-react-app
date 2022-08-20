import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../AppFilter/AppFilter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../EmployeesAddForm/EmployeesAddForm'

import './App.css'

function App () {

    const data = [
        { id: 1, name: 'John Smith', salary: 800, increase: false, liked: false },
        { id: 2, name: 'One Doe', salary: 3300, increase: false, liked: false },
        { id: 3, name: 'Kite White', salary: 5000, increase: true, liked: true },
    ]

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployeesList data={ data } />
            <EmployeesAddForm />
        </div>
    )
}

export default App
