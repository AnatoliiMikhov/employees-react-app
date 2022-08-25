import './AppFilter.scss'

const AppFilter = ( { onChangeFilter, filter } ) => {
    const buttonsData = [
        { name: 'all', label: 'Усі співробітники' },
        { name: 'liked', label: 'На підвищення' },
        { name: 'moreThan1000', label: 'З/П більше $1000' },
    ]

    const buttons = buttonsData.map( ( { name, label } ) => {
        const active = filter === name
        const theClass = active ? 'btn-light' : 'btn-outline-light'

        return (
            <button
                type='button'
                key={ name }
                className={ `btn ${theClass}` }
                onClick={ () => onChangeFilter( name ) }
            >
                { label }
            </button>
        )
    } )

    return (
        <div className='btn-group'>
            { buttons }
        </div>
    )
}

export default AppFilter
