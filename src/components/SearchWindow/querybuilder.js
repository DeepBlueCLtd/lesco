import {QueryBuilder} from 'react-querybuilder';
import React from 'react';
import { Button, Glyphicon, Well } from 'react-bootstrap';
const fields = [
    { name: 'firstName', label: 'First Name' },
    { name: 'lastName', label: 'Last Name' },
    { name: 'age', label: 'Age' },
    { name: 'address', label: 'Address' },
    { name: 'phone', label: 'Phone' },
    { name: 'email', label: 'Email' },
    { name: 'twitter', label: 'Twitter' },
    { name: 'isDev', label: 'Is a Developer?', value: false }
];

const dom = () => {
    return (
        <div style={{ height: '100%', width: '100%', position: 'relative', padding: '1em' }}>
            <Well >
                <strong>Create your search query</strong>
                <QueryBuilder fields={fields}
                    onQueryChange={logQuery}/>
            </Well>



            <div style={{ position: 'absolute', bottom: 0, right: 0 }}>
                <Button bsStyle='danger'><Glyphicon glyph="alert" />  Create Alert </Button>
                <Button bsStyle='primary'><Glyphicon glyph="eye-open" /> Show in Data View  </Button>
            </div>


        </div>)
}

export default dom;


function logQuery(query) {
    console.log(query);
}