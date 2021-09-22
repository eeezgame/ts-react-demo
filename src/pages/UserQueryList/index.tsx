import React, { useState } from 'react'
import Table from './components/Table'
import SearchForm from './components/SearchForm'
import { UserListResponse, Sex } from '../../types'

interface Props {
    userName:string
}

export default (props:Props)=> {
    const [ rows, setRows ] = useState<UserListResponse[]|undefined>(undefined)
    
    return (
        <>
            <h1>User Query List</h1>
            <SearchForm onDataChange={(e)=>setRows(e)} userName={props.userName} pageURI={true}></SearchForm>
            <Table dataSource={rows}></Table>
        </>
    )
}