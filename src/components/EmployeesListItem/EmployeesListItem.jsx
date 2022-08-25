import './EmployeesListItem.scss'

const EmployeesListItem = ( props ) => {
    const {
        name,
        salary,
        increase,
        liked,
        onDelete,
        onToggleProp,
        onChangeSalary
    } = props

    let classNames = 'list-group-item d-flex justify-content-between'

    if ( increase ) {
        classNames += ' increase'
    }

    if ( liked ) {
        classNames += ' like'
    }

    return (
        <li className={ classNames }>
            <span
                className='list-group-item-label'
                data-toggle='liked'
                onClick={ onToggleProp }
            >
                { name }
            </span>

            <input
                type='text'
                className='list-group-item-input'
                defaultValue={ `$${salary}` }
                onChange={ onChangeSalary }
            />

            <div className='d-flex justify-content-center align-items-center'>
                <button
                    type='button'
                    className='btn-cookie btn-sm '
                    title={ increase ? 'no bonus' : 'give a prize' }
                    data-toggle='increase'
                    onClick={ onToggleProp }
                >
                    <i className='fas fa-cookie'></i>
                </button>

                <button
                    type='button'
                    title='Do you want to delete?'
                    className='btn-trash btn-sm '
                    onClick={ onDelete }
                >
                    <i className='fas fa-trash'></i>
                </button>
                <i className='fas fa-star'></i>
            </div>
        </li>
    )
}

export default EmployeesListItem
