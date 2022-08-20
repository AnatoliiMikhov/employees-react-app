import AppInfo from '../AppInfo/AppInfo'
import SearchPanel from '../SearchPanel/SearchPanel'
import AppFilter from '../AppFilter/AppFilter'
import EmployeesList from '../EmployeesList/EmployeesList'
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
