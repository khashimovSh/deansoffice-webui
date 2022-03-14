import React, {useEffect, useState} from 'react';
import {geAllSt} from '../../api/authenticationService';
import {AllStudents} from './AllStudents'

export const Student=(props)=>{

    const [students, setStudents]=useState({});

    useEffect(()=> {
        geAllSt().then((res) =>{
            setStudents(res)
        })
    },[])

    let content = null

    if(students.error) {
        content = <p>
            There was an error please refresh or try again later
        </p>
    }

    if(students.data) {
        content =
                <div>
                    <AllStudents student={students.data}/>
                </div>
    }

    return (
        <div>
            {content}
        </div>
    )
}