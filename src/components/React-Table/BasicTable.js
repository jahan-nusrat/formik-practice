import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import DummyData from './dummy.json'
import { COLUMNS } from './columns'

const BasicTable = () => {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => DummyData, []);
    const tableInstance =  useTable({
        columns,
        data
    })
    console.log(tableInstance)
    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                </tr>
            </tbody>
        </table>
    )
}

export default BasicTable
