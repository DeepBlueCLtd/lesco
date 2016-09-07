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
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = { key: 1 };
    }
    handleSelect(key) {
        const me = this;
        const tour = this.props.tour;
        this.setState({ key });
        if (key == 2 && this.props.tour.getCurrentStep().id == 'existingView') {
            setTimeout(() => {
                const step = tour.getById('selectMap');
                step.options.attachTo = {
                    element: $(me.refs.anchor),
                    on: 'right'
                }
                tour.next();
            }, 200);
        }
    }
    componentDidMount() {
        const tour = this.props.tour;
        const me = this;
        if (tour != null) {

            if (tour.getById('showDatTypes') == null) {
                tour.addStep('showDatTypes', {
                    text: 'This popup will let you choose how you want to see the data',
                    attachTo: { element: ReactDOM.findDOMNode(this.refs.typeOfDataView), on: 'right' },
                    showCancelLink: true
                });
                tour.addStep('showMapBtn', {
                    text: 'You could choose a slippy map',
                    attachTo: { element: ReactDOM.findDOMNode(this.refs.btnMap), on: 'right' },
                    showCancelLink: true
                });
                tour.addStep('showtable', {
                    text: 'The tabular presentation carries the most information',
                    attachTo: { element: ReactDOM.findDOMNode(this.refs.btnTable), on: 'right' },
                    showCancelLink: true
                });
                tour.addStep('showHistBtn', {
                    text: 'Or a histogram that shows the frequency of some attribute, such as source',
                    attachTo: { element: ReactDOM.findDOMNode(this.refs.btnHistogram), on: 'right' },
                    showCancelLink: true
                })
                tour.addStep('showcards', {
                    text: 'And the card view is good for displaying attached imagery',
                    attachTo: { element: ReactDOM.findDOMNode(this.refs.btnCards), on: 'right' },
                    showCancelLink: true
                })
                tour.addStep('showcloudbtn', {
                    text: 'A word cloud may be useful, maybe for trending tags',
                    attachTo: { element: ReactDOM.findDOMNode(this.refs.btnCloud), on: 'right' },
                    showCancelLink: true
                })
                tour.addStep('showNameLabel', {
                    text: 'Here you name the new view, to help organise your screen. So, you could call it \'M25 within last hour\'',
                    attachTo: { element: ReactDOM.findDOMNode(this.refs.viewName), on: 'top' },
                    showCancelLink: true
                })
                tour.addStep('receiveUpdates', {
                    text: 'Here you indicate if you wish to receive near-real time updates',
                    attachTo: { element: ReactDOM.findDOMNode(this.refs.chkUpdates), on: 'right' },
                    showCancelLink: true
                })
                tour.addStep('inteligentPooling', {
                    text: 'And if you want the application to vary the pooling rate based on how frequently new items are observed',
                    attachTo: { element: ReactDOM.findDOMNode(this.refs.chkPooling), on: 'right' },
                    showCancelLink: true
                })
                tour.addStep('existingView', {
                    text: 'But, we\'re not going to do that.  We\'re going to add it to an existing plot. So, click on "Add to existing"',
                    attachTo: { element: $('#dialogTab-tab-2'), on: 'left' },
                    showCancelLink: true,
                    buttons: [],
                    when: {
                        hide: function () {
                            const step = tour.getById('selectMap');
                            step.options.attachTo = {
                                element: ReactDOM.findDOMNode(me.refs.anchor),
                                on: 'right'
                            }
                        }
                    }
                })

                tour.addStep('selectMap', {
                    text: 'Ok, now select the Map panel - since that\'s how we want to view it',
                    attachTo: '#anchorSelect', //this is defered to the render method so the step is updated when the tab shows
                    showCancelLink: true

                })
                tour.addStep('finish', {
                    text: 'Ok, next you can click on \'Confirm\' to add the data.  That will be the end of the walkthrough. Why not have a go at re-organising the dummy views. Pick them up by their title and drag them onto another, or alongside another.',
                    attachTo: { element: $('.btn-success'), on: 'right' },
                    showCancelLink: true
                })

                tour.next();

            }
        }
    }
    render() {
        return (<Tabs id="dialogTab" activeKey={this.state.key} onSelect={this.handleSelect}>
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
                                        <Checkbox checked ref='chkUpdates'  >
                                            Receive Updates
                                        </Checkbox>
                                        <Checkbox ref='chkPooling' >
                                            Inteligent Sample Rate
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
                    <FormControl ref= 'anchor'  componentClass="select" multiple>
                        <option value="select">Map View: London Airports</option>
                        <option value="other">Table View: User Feed</option>
                    </FormControl>
                </FormGroup>
            </Tab>
        </Tabs >)
    }
}