import React, {Component} from 'react';
import { Button, Glyphicon, Well, Modal, Tabs, Tab, Grid, Row, Col, Alert, FormGroup, Checkbox, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';



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
    render() {
        return (<Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="New View">
                <Grid fluid>
                    <Row className="show-grid">
                        <Col xs={6} md={6}>
                            <div>
                                <Well bsSize="large">
                                    <Button bsSize="large" bsClass='btn btn-default text-center' style={{width:'100px'}} onClick={this.close}><Glyphicon  glyph='map-marker' style={buttonStyle} /> <br/>Map</Button>
                                    <Button bsSize="large" bsClass='btn btn-default text-center' style={{width:'100px'}}  onClick={this.close}><Glyphicon  glyph='list-alt' style={buttonStyle}  /> <br/>Table</Button>
                                    <Button bsSize="large" bsClass='btn btn-default text-center' style={{width:'100px'}} onClick={this.close}><Glyphicon  glyph='signal' style={buttonStyle}  /> <br/>Histogram</Button>
                                    <Button bsSize="large" bsClass='btn btn-default text-center' style={{width:'100px'}}  onClick={this.close}><Glyphicon  glyph='th-large' style={buttonStyle} /><br/>Cards</Button>
                                    <Button bsSize="large" bsClass='btn btn-default text-center' style={{width:'100px'}}  onClick={this.close}><Glyphicon  glyph='cloud' style={buttonStyle} /><br/>Cloud</Button>
                                </Well>

                            </div>
                        </Col>
                        <Col xs={6} md={6}>
                            <div>
                                <Well bsSize="large">
                                    <h5>Configure View</h5>

                                    <FormGroup>
                                        <FieldGroup label="View Name"  type="text" onChange={this.props.onChange} />
                                        <Checkbox >
                                            Inteligent Sample Rate
                                        </Checkbox>
                                        <Checkbox >
                                            Receive Updates
                                        </Checkbox>
                                    </FormGroup>
                                </Well>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </Tab>
            <Tab eventKey={2} title="Add to Existing">
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