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

const buttonStyle = { fontSize: '250%', color: '#1B75BB' };
export default class createAlerView extends Component {
    render() {
        return (
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