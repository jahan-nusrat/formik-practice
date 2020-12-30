import React from 'react'

const FilterTable = ({filter, setFilter}) => {
    return (
        <span>
            Search : {''}
            <input value={filter || ''} onChange={(e)=>setFilter(e.target.value)} />
        </span>
    )
}

export default FilterTable
