import React, {Component} from 'react';
import { Button, Glyphicon, Well, Modal, Tabs, Tab, Grid, Row, Col, Alert, FormGroup, Checkbox, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import Shepherd from'tether-shepherd';
import ReactDOM from 'react-dom';


function FieldGroup({ id, label, help, ...props, onChange }) {

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
                    text: 'This popup will let you choose how you want to see the data',
                    attachTo: { element: ReactDOM.findDOMNode(this.refs.typeOfDataView), on: 'right' }
                });
                tour.addStep('showMapBtn', {
                    text: 'You could choose a slippy map',
                    attachTo: { element: ReactDOM.findDOMNode(this.refs.btnMap), on: 'right' }
                });
                tour.addStep('showtable', {
                    text: 'The tabular presentation carries the most information',
                    attachTo: { element: ReactDOM.findDOMNode(this.refs.btnTable), on: 'right' }
                });
                tour.addStep('showHistBtn', {
                    text: 'Or a histogram that shows the frequency of some attribute, such as source',
                    attachTo: { element: ReactDOM.findDOMNode(this.refs.btnHistogram), on: 'right' }
                })
                tour.addStep('showcards', {
                    text: 'And the card view is good for displaying attached imagery',
                    attachTo: { element: ReactDOM.findDOMNode(this.refs.btnCards), on: 'right' }
                })
                tour.addStep('showcloudbtn', {
                    text: 'A word cloud may be useful, maybe for trending tags',
                    attachTo: { element: ReactDOM.findDOMNode(this.refs.btnCloud), on: 'right' }
                })
                tour.addStep('showNameLabel', {
                    text: 'Here you name the new view, to help organise your screen. Go on, call it \'M25 within last hour\'',
                    attachTo: { element: ReactDOM.findDOMNode(this.refs.viewName), on: 'top' }
                })
                tour.addStep('receiveUpdates', {
                    text: 'Here you indicate if you wish to receive near-real time updates',
                    attachTo: { element: ReactDOM.findDOMNode(this.refs.chkUpdates), on: 'right' }
                })
                tour.addStep('inteligentPooling', {
                    text: 'And if you want the application to vary the pooling rate based on how frequently new items are observed',
                    attachTo: { element: ReactDOM.findDOMNode(this.refs.chkPooling), on: 'right' }
                })
                tour.addStep('existingView', {
                    text: 'Alternatively, you may wish to add the data results to an existing map or table',
                    attachTo: { element: ReactDOM.findDOMNode(this.refs.typeOfDataView), on: 'left' }
                })
                tour.addStep('finish', {
                    text: 'Ok, that\'s the end of the walkthrough. Why not close this panel and have a go at re-organising the dummy views. Pick them up by their title and drag them onto another, or alongside another.',
                    attachTo: { element: ReactDOM.findDOMNode(this.refs.typeOfDataView), on: 'right' }
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

                                        <Checkbox checked ref='chkUpdates'  >
                                            Receive Updates
                                        </Checkbox>
                                    </FormGroup>
                                </Well>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </Tab>
            <Tab ref="tabExisting"  eventKey={2} title="Add to Existing">
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