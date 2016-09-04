import React, {Component} from 'react';
import { Button, Glyphicon, Well, Modal, Tabs, Tab, Grid, Row, Col, Alert, FormGroup, Checkbox, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';



function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}


export default class createDataViewDialog extends Component {
    render() {
        return (<Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="New View">
                <Grid fluid>
                    <Row className="show-grid">
                        <Col xs={6} md={6}>
                            <div>
                                <Well bsSize="large">
                                    <Button bsSize="large" onClick={this.close}><Glyphicon bsSize='large' glyph='map-marker' style={{ fontSize: '250%' }} /></Button>
                                    <Button bsSize="large" onClick={this.close}><Glyphicon bsSize='large' glyph='list-alt' style={{ fontSize: '250%' }} /></Button>
                                    <Button bsSize="large" onClick={this.close}><Glyphicon bsSize='large' glyph='signal' style={{ fontSize: '250%' }} /></Button>
                                    <Button bsSize="large" onClick={this.close}><Glyphicon bsSize='large' glyph='th-large' style={{ fontSize: '250%' }}/></Button>
                                    <Button bsSize="large" onClick={this.close}><Glyphicon bsSize='large' glyph='cloud' style={{ fontSize: '250%' }}/></Button>
                                </Well>

                            </div>
                        </Col>
                        <Col xs={6} md={6}>
                            <div>
                                <Well bsSize="large">
                                    <h5>Configure View</h5>

                                    <FormGroup>
                                        <FieldGroup label="View Name"  type="text"/>
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