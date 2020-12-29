import React, { useMemo } from 'react'
import { useTable,useSortBy } from 'react-table'
import DummyData from './dummy.json'
import { GROUPED_COLUMNS } from './columns'
import { FaCaretSquareDown, FaCaretSquareUp } from 'react-icons/fa'

const SortingTable = () => {
    const columns = useMemo(() => GROUPED_COLUMNS, []);
    const data = useMemo(() => DummyData, []);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } =  useTable({
        columns,
        data
    },
    useSortBy
    )

    return (
        <table {...getTableProps()}>
            <thead>
            {
                headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span>
                                    { column.isSorted ? (column.isSortedDesc ? <FaCaretSquareDown className='reactIcon' />:<FaCaretSquareUp className='reactIcon' />) : ''}
                                    </span>
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

export default SortingTable
