import React from "react";
import Table from "./Table";

const colNames = ['id', 'firstName', 'lastName', 'major', 'dateOfBirth', 'startDateOfStudies', 'nationality', 'placeOfBirth', 'active']

export function AllStudents(props){
        return (
            <div>
                    <Table list={props.student} colNames={colNames}/>
            </div>
        )
}
