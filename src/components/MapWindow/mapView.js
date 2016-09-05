import React, {Component} from 'react';
import ReactDOM from 'react-dom';
const MapApi = require('leaflet');
import {Button,Glyphicon,OverlayTrigger,Popover,Checkbox,FormGroup,ControlLabel,HelpBlock,FormControl} from 'react-bootstrap';


function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

const buttonStyle = {
    width : '120px'
};

const layerStyle = {
    width : '150px'
};
const mapPopOver = (
  <Popover id="popover-positioned-left" title="Map">
     <Button style={buttonStyle}>    <Glyphicon glyph='fullscreen'/> Pan</Button><br/>
       <Button style={buttonStyle}>    <Glyphicon glyph='repeat'/> Rotate</Button><br/>
         <Button style={buttonStyle}>    <Glyphicon glyph='resize-full'/> FullScreen</Button><br/>
           <Button style={buttonStyle}>    <Glyphicon glyph='pencil'/> Draw</Button><br/>

  </Popover>
);


const searchPopOver = (
  <Popover id="popover-positioned-left" title="Search">
    <FieldGroup label="Search"  type="text"/>
  </Popover>
);


const layersPopOver = (
  <Popover id="popover-positioned-left" title="Layers">
    <div style={layerStyle}>
      <Button bsClass='btn btn-danger' style={{float:'right',marginTop:'-5px',padding:'2px'}}><Glyphicon glyph='remove' style={{fontSize:'90%'}}/>     </Button>
    <Checkbox>
      Roads
    </Checkbox>
    <Glyphicon glyph='picture' style={{margin : '3px',fontSize:'150%',opacity:'0.25'}}/>
    <Glyphicon glyph='picture' style={{margin : '3px',fontSize:'150%',opacity:'0.50'}}/>
    <Glyphicon glyph='picture' style={{margin : '3px',fontSize:'150%',opacity:'0.75'}}/>
    <Glyphicon glyph='picture' style={{margin : '3px',fontSize:'150%',opacity:'1'}}/>
      <hr/>
    </div>

<div style={layerStyle}>
      <Button bsClass='btn btn-danger' style={{float:'right',marginTop:'-5px',padding:'2px'}}><Glyphicon glyph='remove' style={{fontSize:'90%'}}/>     </Button>
    <Checkbox>
      Rivers
    </Checkbox>
    <Glyphicon glyph='picture' style={{margin : '3px',fontSize:'150%',opacity:'0.25'}}/>
    <Glyphicon glyph='picture' style={{margin : '3px',fontSize:'150%',opacity:'0.50'}}/>
    <Glyphicon glyph='picture' style={{margin : '3px',fontSize:'150%',opacity:'0.75'}}/>
    <Glyphicon glyph='picture' style={{margin : '3px',fontSize:'150%',opacity:'1'}}/>
      <hr/>
    </div>


    <div style={layerStyle}>
      <Button bsClass='btn btn-danger' style={{float:'right',marginTop:'-5px',padding:'2px'}}><Glyphicon glyph='remove' style={{fontSize:'90%'}}/>     </Button>
    <Checkbox>
      Base mapping
    </Checkbox>
    <Glyphicon glyph='picture' style={{margin : '3px',fontSize:'150%',opacity:'0.25'}}/>
    <Glyphicon glyph='picture' style={{margin : '3px',fontSize:'150%',opacity:'0.50'}}/>
    <Glyphicon glyph='picture' style={{margin : '3px',fontSize:'150%',opacity:'0.75'}}/>
    <Glyphicon glyph='picture' style={{margin : '3px',fontSize:'150%',opacity:'1'}}/>
      <hr/>
    </div>

      <Button bsClass='btn btn-default' style={{float:'left',marginTop:'-5px'}}><Glyphicon glyph='road' style={{fontSize:'100%'}}/>     </Button>
     <Button bsClass='btn btn-success' style={{float:'right',marginTop:'-5px'}}><Glyphicon glyph='plus' style={{fontSize:'100%'}}/>     </Button>
    
  

  </Popover>
);

class MapControls extends Component {

        
    render() {
        return (<div>
         <OverlayTrigger trigger="click" placement="right" overlay={mapPopOver}>
                <Button>    <Glyphicon glyph='map-marker'/></Button>
                
        </OverlayTrigger   ><br/>     
         <OverlayTrigger trigger="click" placement="right" overlay={searchPopOver}>
                 <Button>    <Glyphicon glyph='search'/></Button>
                
        </OverlayTrigger   >  <br/> 
         <OverlayTrigger trigger="click" placement="right" overlay={layersPopOver}>
                <Button>    <Glyphicon glyph='th-list'/></Button>
                
        </OverlayTrigger   >   <br/>
       
                
        </div>)
    }
}


export default class MapWindow extends Component {
    constructor() {
        super();
    }

    createCustomControls(map) {

        const mapControl = MapApi.Control.extend({

            options: {
                position: 'topleft'
                //control position - allowed: 'topleft', 'topright', 'bottomleft', 'bottomright'
            },

            onAdd: function (map) {
                var container = MapApi.DomUtil.create('div');
                ReactDOM.render(<MapControls/>, container);
                return container;
            }

        });
        map.addControl(new mapControl());

    }

    componentDidMount() {
        const GlContainer = this.props.glContainer;
        const map = MapApi.map(this.refs.mapContainer, {
            minZoom: 2,
            maxZoom: 20,
            layers: [
                MapApi.tileLayer(
                    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    { attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>' })
            ],
            attributionControl: false
        });
        map.fitWorld();
        map.invalidateSize();
        this.createCustomControls(map);
        GlContainer.on('resize', () => {
            map.invalidateSize();
        });
        GlContainer.on('show', () => {
            map.invalidateSize();
            //TODO::This is a stupic hack , but without this the LeafMap won't update to fit the Tab without a resize'
            setTimeout(() => {
                map.invalidateSize();
            }, 5);
        })
    }


    render() {


        return (
            <div ref="mapContainer" className='map' style={{ height: '100%' }}> </div>
        );

    }
}


