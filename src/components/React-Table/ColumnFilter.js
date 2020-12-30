import React from 'react'

const ColumnFilter = ({column}) => {
    const {filterValue, setFilter} = column;
    return (
        <div style={{margin:'auto', width:'300px',padding:'1rem'}}>
            Search : {''}
            <input 
                value={filterValue || ''} 
                onChange={(e)=>setFilter(e.target.value)} 
            />
        </div>
    )
}

export default ColumnFilter
