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


export default class createAlerView extends Component {
    render() {
        return (
            <Grid fluid>
                <Row className="show-grid">
                    <Col xs={6} md={6}>
                        <div>
                            <Well bsSize="large">

                      <Button bsSize="large" onClick={this.close}><Glyphicon bsSize='large' glyph='map-marker' style={{fontSize:'250%'}} /></Button>
                                    <Button bsSize="large" onClick={this.close}><Glyphicon bsSize='large' glyph='list-alt' style={{fontSize:'250%'}} /></Button>
                                    <Button bsSize="large" onClick={this.close}><Glyphicon bsSize='large' glyph='signal' style={{fontSize:'250%'}} /></Button>
                                    <Button bsSize="large" onClick={this.close}><Glyphicon bsSize='large' glyph='th-large' style={{ fontSize: '250%' }}/></Button>
                                 <Button bsSize="large" onClick={this.close}><Glyphicon bsSize='large' glyph='cloud' style={{fontSize:'250%'}}/></Button>
                            </Well>

                        </div>
                    </Col>
                    <Col xs={6} md={6}>
                        <div>
                            <Well bsSize="large">
                                <h5>Configure Alert</h5>
                                <FormGroup>
                                    <FieldGroup label="Alert Name"  type="text"/>
                                    <Checkbox>
                                        Audio Alert
                                    </Checkbox>
                                    <Checkbox >
                                        Intelligent Sample Rate
                                    </Checkbox>
                                </FormGroup>
                            </Well>

                        </div>
                    </Col>
                </Row>
            </Grid>


        )
    }
}