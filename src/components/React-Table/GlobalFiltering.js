import React, { useMemo } from 'react'
import { useTable, useGlobalFilter } from 'react-table'
import DummyData from './dummy.json'
import { COLUMNS } from './columns'
import FilterTable from './FilterTable'

const GlobalFiltering = () => {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => DummyData, []);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter
    } =  useTable({
        columns,
        data
    },
    useGlobalFilter
    )

    const { globalFilter } = state;

    return (
        <div>
            <FilterTable filter={globalFilter} setFilter={setGlobalFilter} />
            <table {...getTableProps()}>
                <thead>
                {
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>
                                        {column.render('Header')}
                                    </th>
                                ))
                            }
                        </tr>
                    ))
                }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell)=>{
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
                <tfoot>
                {
                    footerGroups.map(footerGroup => (
                        <tr {...footerGroup.getFooterGroupProps()}>
                        {
                            footerGroup.headers.map(column => (
                                <td {...column.getFooterProps()}>
                                {column.render('Footer')}
                                </td>
                            ))
                        }
                        </tr>
                    ))
                }
                </tfoot>
            </table>
        </div>
    )
}

export default GlobalFiltering
