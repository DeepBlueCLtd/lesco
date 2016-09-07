import React, {Component} from 'react';
import ReactDOM from 'react-dom';
const MapApi = require('leaflet');
import {Button, Glyphicon, OverlayTrigger, Popover, Checkbox, FormGroup, ControlLabel, HelpBlock, FormControl, ButtonGroup} from 'react-bootstrap';
const cl = require('leaflet.markercluster');

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
    width: '120px'
};

const layerStyle = {
    width: '150px'
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
            <Button bsClass='btn btn-danger' style={{ float: 'right', marginTop: '-5px', padding: '2px' }}><Glyphicon glyph='remove' style={{ fontSize: '90%' }}/>     </Button>
            <Checkbox>
                Roads
            </Checkbox>
            <Glyphicon glyph='picture' style={{ margin: '3px', fontSize: '150%', opacity: '0.25' }}/>
            <Glyphicon glyph='picture' style={{ margin: '3px', fontSize: '150%', opacity: '0.50' }}/>
            <Glyphicon glyph='picture' style={{ margin: '3px', fontSize: '150%', opacity: '0.75' }}/>
            <Glyphicon glyph='picture' style={{ margin: '3px', fontSize: '150%', opacity: '1' }}/>
            <hr/>
        </div>

        <div style={layerStyle}>
            <Button bsClass='btn btn-danger' style={{ float: 'right', marginTop: '-5px', padding: '2px' }}><Glyphicon glyph='remove' style={{ fontSize: '90%' }}/>     </Button>
            <Checkbox>
                Rivers
            </Checkbox>
            <Glyphicon glyph='picture' style={{ margin: '3px', fontSize: '150%', opacity: '0.25' }}/>
            <Glyphicon glyph='picture' style={{ margin: '3px', fontSize: '150%', opacity: '0.50' }}/>
            <Glyphicon glyph='picture' style={{ margin: '3px', fontSize: '150%', opacity: '0.75' }}/>
            <Glyphicon glyph='picture' style={{ margin: '3px', fontSize: '150%', opacity: '1' }}/>
            <hr/>
        </div>


        <div style={layerStyle}>
            <Button bsClass='btn btn-danger' style={{ float: 'right', marginTop: '-5px', padding: '2px' }}><Glyphicon glyph='remove' style={{ fontSize: '90%' }}/>     </Button>
            <Checkbox>
                Base mapping
            </Checkbox>
            <Glyphicon glyph='picture' style={{ margin: '3px', fontSize: '150%', opacity: '0.25' }}/>
            <Glyphicon glyph='picture' style={{ margin: '3px', fontSize: '150%', opacity: '0.50' }}/>
            <Glyphicon glyph='picture' style={{ margin: '3px', fontSize: '150%', opacity: '0.75' }}/>
            <Glyphicon glyph='picture' style={{ margin: '3px', fontSize: '150%', opacity: '1' }}/>
            <hr/>
        </div>

        <Button bsClass='btn btn-default' style={{ float: 'left', marginTop: '-5px' }}><Glyphicon glyph='road' style={{ fontSize: '100%' }}/>     </Button>
        <Button bsClass='btn btn-success' style={{ float: 'right', marginTop: '-5px' }}><Glyphicon glyph='plus' style={{ fontSize: '100%' }}/>     </Button>



    </Popover>
);

class MapControls extends Component {


    render() {
        return (<div style={{ maxWidth: '26px' }}>

            <OverlayTrigger trigger="click" placement="right" overlay={mapPopOver}>
                <Button bsClass='btnMap' style={{ padding: '5px', fontSize: '12px', borderRadius: '0px', borderTopLeftRadius: '4px', borderTopRightRadius: '4px', borderColor: 'rgba(0,0,0,0)', backgroundImage: 'null', borderBottom: '1px solid #ccc' }}>    <Glyphicon glyph='map-marker' style={{}}/></Button>

            </OverlayTrigger   >
            <OverlayTrigger trigger="click" placement="right" overlay={searchPopOver}>
                <Button bsClass='btnMap' style={{ padding: '5px', fontSize: '12px', borderRadius: '0px', borderColor: 'rgba(0,0,0,0)', backgroundImage: 'null', borderBottom: '1px solid #ccc' }}>    <Glyphicon glyph='search'/></Button>

            </OverlayTrigger   >
            <OverlayTrigger trigger="click" placement="right" overlay={layersPopOver}>
                <Button bsClass='btnMap' style={{ padding: '5px', fontSize: '12px', borderRadius: '0px', borderBottomLeftRadius: '4px', borderBottomRightRadius: '4px', borderColor: 'rgba(0,0,0,0)', backgroundImage: 'null', borderBottom: '1px solid #ccc' }}>    <Glyphicon glyph='th-list'/></Button>

            </OverlayTrigger   >


        </div>)
    }
}


export default class MapWindow extends Component {
    constructor(prop) {
        super(prop);
        this.state = { addCluster: false };
    }

    createCustomControls(map) {

        const mapControl = MapApi.Control.extend({

            options: {
                position: 'topleft'
                //control position - allowed: 'topleft', 'topright', 'bottomleft', 'bottomright'
            },

            onAdd: function (map) {
                var container = MapApi.DomUtil.create('div', 'leaflet-control-zoom leaflet-bar leaflet-control');
                ReactDOM.render(<MapControls/>, container);
                return container;
            }

        });
        map.addControl(new mapControl());

    }

    addClusterData() {
        console.warn("cluster enable");
        this.setState({ addCluster: true })
    }

    componentDidMount() {
        const GlContainer = this.props.glContainer;
        const map = MapApi.map(this.refs.mapContainer, {
            minZoom: 2,
            maxZoom: 20,
            worldCopyJump: true,
            center: MapApi.latLng(51.56, -0.06),
            layers: [
                MapApi.tileLayer(
                    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    { attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>' })
            ],
            attributionControl: false
        });
        map.invalidateSize();
        map.setView(MapApi.latLng(51.56, -0.06), 9);
        this.createCustomControls(map);
        const markers = new MapApi.MarkerClusterGroup();
        const markersList = [];
        function populate(map, count) {
            for (let i = 0; i < count; i++) {
                const m = new MapApi.Marker(getRandomLatLng(map));
                markersList.push(m);
                markers.addLayer(m);
            }
            return false;
        }
        const bounds = map.getBounds();

        function getRandomLatLng(map) {
            const northEast =new MapApi.latLng(51.7049, -0.4807);
            const southWest = new MapApi.latLng(51.3272, 0.2307);
            const lngSpan = northEast.lng - southWest.lng,
                latSpan = northEast.lat - southWest.lat;
            return new MapApi.LatLng(
                southWest.lat + latSpan * Math.random(),
                southWest.lng + lngSpan * Math.random());
        }
        const me = this;

        function updateData() {
            if (me.state.addCluster) {
                const total = Math.random() * markers.length / 2;
                for (let i = 0; i < total; i++) {
                    markers.splice(Math.floor(Math.random() * markers.length), 1)
                }
                populate(map, Math.random() * 20);
            }
            setTimeout(updateData
                , 1000 +  Math.random() * 3000);
        }
        updateData();
        map.addLayer(markers);

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


