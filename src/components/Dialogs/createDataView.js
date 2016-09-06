import React, {Component} from 'react';
import { Button, Glyphicon, Well, Modal, Tabs, Tab, Grid, Row, Col, Alert, FormGroup, Checkbox, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import Shepherd from'tether-shepherd';
import ReactDOM from 'react-dom';


function FieldGroup({ id, label, help, ...props,onChange }) {

    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} onChange={onChange} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}
const buttonStyle = { fontSize: '250%', color: '#1B75BB' };
export default class createDataViewDialog extends Component {
    componentDidMount() {
        const tour = this.props.tour;
        if (tour != null) {

            if (tour.getById('showDatTypes') == null) {
                tour.addStep('showDatTypes', {
                    text: 'These buttons allow you to choose the type of DataView to add.',
                    attachTo: { element: ReactDOM.findDOMNode(this.refs.typeOfDataView), on: 'right' }
                })
                tour.addStep('showMapBtn', {
                    text: 'This button creates a Map Data View.',
                    attachTo: { element: ReactDOM.findDOMNode(this.refs.btnMap), on: 'right' }
                })
                tour.addStep('showHistBtn', {
                    text: 'This button creates a Histogram View.',
                    attachTo: { element: ReactDOM.findDOMNode(this.refs.btnTable), on: 'right' }
                })
                tour.addStep('showcloudbtn', {
                    text: 'This button creates a Cloud View.',
                    attachTo: { element: ReactDOM.findDOMNode(this.refs.btnHistogram), on: 'right' }
                })
                tour.addStep('showtable', {
                    text: 'This button creates a Table View',
                    attachTo: { element: ReactDOM.findDOMNode(this.refs.btnCards), on: 'right' }
                })
                tour.addStep('showcards', {
                    text: 'This button creates a Cards View',
                    attachTo: { element: ReactDOM.findDOMNode(this.refs.btnCloud), on: 'right' }
                })
                tour.addStep('showNameLabel', {
                    text: 'This is the name of the DataView you are creating.',
                    attachTo: { element: ReactDOM.findDOMNode(this.refs.viewName), on: 'top' }
                })
                 tour.addStep('inteligentPooling', {
                    text: 'This checkbox allows the application to vary the pooling rate based on the update frequency of the data.',
                    attachTo: { element: ReactDOM.findDOMNode(this.refs.chkPooling), on: 'right' }
                })
                  tour.addStep('receiveUpdates', {
                    text: 'Checking this makes the View Update in Real Time.',
                    attachTo: { element: ReactDOM.findDOMNode(this.refs.chkUpdates), on: 'right' }
                 })
                   tour.addStep('existingView', {
                    text: 'This Tab allows you to add this Data to a existing View.',
                    attachTo: { element: ReactDOM.findDOMNode(this.refs.tabExisting), on: 'top' }
                 })
                
                tour.next();

            }
        }
    }
    render() {
        return (<Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="New View">
                <Grid fluid>
                    <Row className="show-grid">
                        <Col xs={6} md={6}>
                            <div>
                                <Well ref='typeOfDataView' bsSize="large">
                                    <Button ref='btnMap' bsSize="large" bsClass='btn btn-default text-center' style={{ width: '100px' }} onClick={this.close}><Glyphicon  glyph='map-marker' style={buttonStyle} /> <br/>Map</Button>
                                    <Button  ref='btnTable' bsSize="large" bsClass='btn btn-default text-center' style={{ width: '100px' }}  onClick={this.close}><Glyphicon  glyph='list-alt' style={buttonStyle}  /> <br/>Table</Button>
                                    <Button  ref='btnHistogram' bsSize="large" bsClass='btn btn-default text-center' style={{ width: '100px' }} onClick={this.close}><Glyphicon  glyph='signal' style={buttonStyle}  /> <br/>Histogram</Button>
                                    <Button  ref='btnCards' bsSize="large" bsClass='btn btn-default text-center' style={{ width: '100px' }}  onClick={this.close}><Glyphicon  glyph='th-large' style={buttonStyle} /><br/>Cards</Button>
                                    <Button  ref='btnCloud' bsSize="large" bsClass='btn btn-default text-center' style={{ width: '100px' }}  onClick={this.close}><Glyphicon  glyph='cloud' style={buttonStyle} /><br/>Cloud</Button>
                                </Well>

                            </div>
                        </Col>
                        <Col xs={6} md={6}>
                            <div>
                                <Well bsSize="large">
                                    <h5>Configure View</h5>

                                    <FormGroup ref='viewName'>
                                        <FieldGroup  label="View Name"  type="text" onChange={this.props.onChange}/>
                                        <Checkbox ref='chkPooling' >
                                            Inteligent Sample Rate
                                        </Checkbox>
                                        <Checkbox  ref='chkUpdates'  >
                                            Receive Updates
                                        </Checkbox>
                                    </FormGroup>
                                </Well>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </Tab>
            <Tab   eventKey={2} title="Add to Existing">
                <FormGroup controlId="formControlsSelectMultiple">
                    <ControlLabel>Multiple select</ControlLabel>
                    <FormControl componentClass="select" multiple>
                        <option value="select">Map View: London Airports</option>
                        <option value="other">Table View: User Feed</option>
                    </FormControl>
                </FormGroup>
            </Tab>
        </Tabs>)
    }
}