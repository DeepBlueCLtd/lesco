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

const CSSClass = {

    combinators: 'form-control', // <select> control for combinators
    addRule: 'btn btn-primary', // <button> to add a Rule
    addGroup: 'btn btn-primary', // <button> to add a RuleGroup
    removeGroup: 'btn btn-danger', // <button> to remove a RuleGroup

    rule: String, // <div> containing the Rule
    fields: 'form-control', // <select> control for fields
    operators: 'form-control', // <select> control for operators
    value: 'form-control', // <input> for the field value
    removeRule: 'btn btn-danger' // <button> to remove a Rule

}




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
    if (field == 'spatial') {
        const hasValue = !!value;
        return (
            <span>
                I am a custom Value
            </span>
        );
    }
    return (<span>
        <input type="text" className="form-control" style={{ width: '30%', minWidth: '120px', display: 'inline-block' }}
            value={value}
            onChange={event => onChange(event.target.checked) }/>
    </span>)
}

function getOperators(field) {
    if (field !== 'spatial') {
        return null;
    }
    return [{ name: 'InRadius', label: 'Inside Radius' }, { name: 'OutRadius', label: 'Outside Radius' }];
}

const startQuery = {
    combinator: 'and',
    id: '111',
    rules: [
        {
            id: '222',
            field: 'firstName',
            value: 'Test',
            operator: '='
        }
    ]
};

const dom = () => {
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <div className="container-fluid" >
                <div className="row" >
                    <div className="col-md-2" style={{minWidth:'110px'}}>
                        <div style={{ display: 'flex', alignItems: 'center',justifyContent: 'center' }}>
                            <img src="https://github.com/DeepBlueCLtd/lesco/raw/master/logo.png" style={{ height:'100px', marginTop:'30px', marginLeft:'10px'}}/>
                        </div>
                    </div>
                    <div className="col-xs-10" >
                        <Well  >
                            <strong>Create your search query</strong>
                            <QueryBuilder query={startQuery} fields={fields}
                                onQueryChange={logQuery} getEditor={getEditor} getOperators={getOperators} controlClassnames= {CSSClass}/>
                        </Well>
                    </div>
                </div>
            </div>
            <div style={{ position: 'absolute', bottom: 0, right: 0 }}>
                <Button bsStyle='danger'><Glyphicon glyph="alert" />  Create Alert </Button>
                <Button bsStyle='primary'><Glyphicon glyph="eye-open" /> Show in Data View  </Button>
                <div style={{ clear: 'both' }}></div>
            </div>


        </div >)
}


export default dom;

function logQuery(query) {
    console.log(query);
}