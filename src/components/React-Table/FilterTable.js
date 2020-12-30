import React from 'react'

const FilterTable = ({filter, setFilter}) => {
    return (
        <div style={{margin:'auto', width:'300px',padding:'1rem'}}>
            Search : {''}
            <input value={filter || ''} onChange={(e)=>setFilter(e.target.value)} />
        </div>
    )
}

export default FilterTable
