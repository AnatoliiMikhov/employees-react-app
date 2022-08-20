import { useState } from 'react'
import './EmployeesListItem.css'

const EmployeesListItem = ( { name, salary, ...props } ) => {

    const [ increase, setIncrease ] = useState( props.increase )
    const [ liked, setLiked ] = useState( props.liked )

    const onIncrease = () => setIncrease( ( increase ) => !increase )
    const onLikes = () => setLiked( ( liked ) => !liked )

    let classNames = 'list-group-item d-flex justify-content-between'

    if ( increase ) {
        classNames += ' increase'
    }

    if ( liked ) {
        classNames += ' like'
    }

    return (
        <li className={ classNames }>
            <span className="list-group-item-label" onClick={ onLikes }>{ name }</span>
            <input type="text" className="list-group-item-input" defaultValue={ salary + '$' } />
            <div className='d-flex justify-content-center align-items-center'>

                <button
                    onClick={ onIncrease }
                    type="button"
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                    className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem
