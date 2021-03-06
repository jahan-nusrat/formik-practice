import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import DummyData from './dummy.json'
import { GROUPED_COLUMNS } from './columns'

const GroupedColTable = () => {
    const columns = useMemo(() => GROUPED_COLUMNS, []);
    const data = useMemo(() => DummyData, []);
    const tableInstance =  useTable({
        columns,
        data
    })

    console.log(tableInstance)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = tableInstance

    return (
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
        </table>
    )
}

export default GroupedColTable
