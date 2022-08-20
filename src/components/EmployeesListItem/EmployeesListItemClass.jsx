import { Component } from 'react'
import './EmployeesListItem.css'

class EmployeesListItem extends Component {
    constructor ( props ) {
        super( props )

        this.state = {
            increase: this.props.increase,
            liked: this.props.liked,
        }
    }

    onIncrease = () => {
        this.setState( ( { increase } ) => ( {
            increase: !increase,
        } ) )
    };

    onLiked = () => {
        this.setState( ( { liked } ) => ( {
            liked: !liked,
        } ) )
    };

    render () {
        const { name, salary, onDelete } = this.props
        const { increase, liked } = this.state

        let classNames = 'list-group-item d-flex justify-content-between'

        if ( increase ) {
            classNames += ' increase'
        }

        if ( liked ) {
            classNames += ' like'
        }

        return (
            <li className={ classNames }>
                <span className='list-group-item-label' onClick={ this.onLiked }>
                    { name }
                </span>

                <input
                    type='text'
                    className='list-group-item-input'
                    defaultValue={ salary + '$' }
                />

                <div className='d-flex justify-content-center align-items-center'>
                    <button
                        onClick={ this.onIncrease }
                        type='button'
                        className='btn-cookie btn-sm '
                    >
                        <i className='fas fa-cookie'></i>
                    </button>

                    <button
                        type='button'
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
}

export default EmployeesListItem