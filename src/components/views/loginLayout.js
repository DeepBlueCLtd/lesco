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
           
            <Well bsSize="large" style={{maxWidth:'70%',position:'relative'}}>
             <a href="https://github.com/DeepBlueCLtd/lesco"><img style={{position: 'absolute', top: 0, right: 0, border: 0,}} src="https://camo.githubusercontent.com/e7bbb0521b397edbd5fe43e7f760759336b5e05f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677265656e5f3030373230302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png"/></a>
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

                           <Button bsSize='large' bsClass='large btn btn-success' style={{float:'right'}} >Login</Button>
                           <span style={{visibility: 'hidden',     display: 'block',     fontSize: '0',     content: '',     clear: 'both',     height: 0}}/>
                             
                            </Well>

                        </div>
                    </Col>
                     <Col xs={6} md={6}>
                        <div>
                            <Well bsSize="large" style={{height:'233px'}}>
                         
                           <Button bsSize='large' bsClass='large btn btn-primary' style={{width:'100%', height:'100%'}} onClick={()=>{
                               
                               this.context.router.push('/analysis');
                           }}    ><span style={{fontSize:'300%'}}>Demo</span></Button>
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