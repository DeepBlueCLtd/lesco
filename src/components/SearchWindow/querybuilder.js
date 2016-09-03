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
    { name: 'isDev', label: 'Is a Developer?', value: false },
    { name: 'spatial', label: 'Spatial Custom Type', value: {} }
];




function getEditor({field, operator, value, onChange}) {
    if (field == 'isDev' && operator !== '=') {
        const hasValue = !!value;
        return (
            <span>
                <input type="checkbox"
                    value={hasValue}
                    onChange={event => onChange(event.target.checked) }/>
            </span>
        );
    }
    if (field == 'spatial' ) {
        const hasValue = !!value;
        return (
            <span>
                I am a custom Value
            </span>
        );
    }
}

function getOperators(field) {
    if (field !== 'spatial') {
        return null;
    }
    return [{ name: 'InRadius', label: 'Inside Radius' }, { name: 'OutRadius', label: 'Outside Radius' }];
}


const dom = () => {
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Well >
                <strong>Create your search query</strong>
                <QueryBuilder fields={fields}
                    onQueryChange={logQuery} getEditor={getEditor} getOperators={getOperators}/>
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