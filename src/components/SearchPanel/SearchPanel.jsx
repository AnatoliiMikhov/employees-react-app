import { useState } from 'react'

import './SearchPanel.css'

const SearchPanel = ( props ) => {
    const { onUpdateSearch } = props

    const [ term, setTerm ] = useState( '' )

    function onUpdateSearchPanelInput ( e ) {
        const term = e.target.value
        setTerm( term )
        onUpdateSearch( term )
    }

    return (
        <input type="text"
            className="form-control search-input"
            placeholder="Знайти співробітника"
            value={ term }
            onChange={ onUpdateSearchPanelInput } />
    )
}

export default SearchPanel
