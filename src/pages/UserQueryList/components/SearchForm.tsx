import { FormControl, InputLabel, Input, FormHelperText, Button } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import { UserListResponse, Sex } from '../../../types'

interface SearchFormParams {
    userName:string
}
interface SearchFormProps {
    onDataChange(params:UserListResponse[]|undefined):void,
    userName:string
    pageURI:boolean
}

function createData(uid: string, name: string, sex: Sex):UserListResponse {
    return { uid, name, sex };
}

const rows = [
    createData('sa6d76546', 'Frozen yoghurt', Sex.men),
    createData('sdf4asd15', 'Ice cream sandwich', Sex.women),
    createData('as1f35a1s3d5', 'Eclair', Sex.women),
    createData('asdf132as12', 'Cupcake', Sex.men),
    createData('ewr132we1r3', 'Gingerbread', Sex.women),
];

function searchUserByName(name:string){
    if(name){
        return rows.filter(item=>item.name === name);
    } else {
        return rows
    }
}

export default (props:SearchFormProps)=>{

    const [ userName, setUserName ] = useState(props.userName||'')
    const queryUser = (params:SearchFormParams)=>{
        props.onDataChange(undefined)
        setTimeout(()=>{
            props.onDataChange(searchUserByName(params.userName))
        }, 300)
    }

    const handleSumbit = ()=> {
        if(props.pageURI){
            window.location.assign('#/UserQueryList?userName=' + userName)
        }
        queryUser({userName})
    }
    
    useEffect(()=>{
        queryUser({userName})
    },[])

    return (
        <div>
            <FormControl>
                <div>
                    <InputLabel htmlFor="my-input">User Name</InputLabel>
                    <Input 
                        id="my-input" 
                        aria-describedby="my-helper-text" 
                        value={userName} 
                        onChange={e=>{setUserName(e.target.value)}}
                    />
                    <Button 
                        variant='text' 
                        color='primary' 
                        onClick={handleSumbit}
                    >
                        Query!
                    </Button>
                </div>
                <FormHelperText id="my-helper-text">serach data by user name</FormHelperText>
            </FormControl>
        </div>
    )
}