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
                                <Button onClick={this.close}>Map</Button>
                                <Button onClick={this.close}>Table</Button>
                                <Button onClick={this.close}>Cards</Button>
                                <Button onClick={this.close}>Histogram</Button>
                            </Well>

                        </div>
                    </Col>
                    <Col xs={6} md={6}>
                        <div>
                            <Well bsSize="large">
                                <h5>Configure Alert</h5>
                                <FormGroup>
                                    <FieldGroup label="Alert Name"  type="text"/>
                                    <Checkbox >
                                        Inteligent Sample Rate
                                    </Checkbox>
                                    <Checkbox>
                                        Audio Alert
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