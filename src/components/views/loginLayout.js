import React, {Component} from 'react';
import {Grid, Row,Col,Well,Button,ControlLabel,HelpBlock,FormGroup,FormControl,Alert} from 'react-bootstrap';



function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

export default class LoginView extends Component{

    render(){
        return (
            <div style={{display:'flex', alignItems:'center',justifyContent:'center',minHeight:'650px'}}>
            <Well bsSize="large" style={{maxWidth:'70%'}}>
               <Grid fluid>
               <Row>
                 <Col xs={2} md={2}>
                 <img src="https://github.com/DeepBlueCLtd/lesco/raw/master/logo.png" style={{ width: '100%', marginTop: '30px', maxWidth:'200px', marginLeft: '10px', marginBot:'100px' }}/>
                 </Col>
                   <Col xs={9} md={9}>
                   <br/>
                    <br/>
                    <h1 style={{fontSize:'50px',color:''}}>Welcome to Lesco!</h1>
                    <h4 style= {{fontSize:'30px', marginLeft:'5px',marginTop:'-20px',color:'blue'}}>the bulk data analysis tool</h4>
                   </Col>
               
               </Row>
               <Row>
               <br/>
               </Row>
                <Row className="show-grid">
                    <Col xs={6} md={6} >
                        <div>
                            <Well bsSize="large"  style={{height:'233px'}}>
                            <FieldGroup label = "Username" />
                             <FieldGroup label = "Password" type='password' />

                           <Button bsSize='large' bsClass='large btn btn-success' style={{float:'right'}} onClick={()=>{
                               
                               this.context.router.push('/analysis');
                           }} >Login</Button>
                           <span style={{visibility: 'hidden',     display: 'block',     fontSize: '0',     content: '',     clear: 'both',     height: 0}}/>
                             
                            </Well>

                        </div>
                    </Col>
                     <Col xs={6} md={6}>
                        <div>
                            <Well bsSize="large" style={{height:'233px'}}>
                         
                           <Button bsSize='large' bsClass='large btn btn-primary' style={{width:'100%', height:'100%'}}   ><span style={{fontSize:'300%'}}>Demo</span></Button>
                            </Well>

                        </div>
                    </Col>
                    </Row>
                    </Grid>
           </Well>
           </div>
        )
    }
}

LoginView.contextTypes = {
    router :React.PropTypes.object
}