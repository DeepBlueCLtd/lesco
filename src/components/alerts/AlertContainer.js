import React, {Component} from 'react';
const GoldenLayout = require('golden-layout');
import {ButtonToolbar, Dropdown, Glyphicon, MenuItem} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import MapAlert from './MapAlert';
import TableAlert from './TableAlert';
import HistogramAlert from './HistogramAlert';
import CloudAlert from './CloudAlert';
import CardAlert from './CardAlert';
import CustomToggle from'../common/CustomToggle';
const DropdownMenu = Dropdown.Menu;

function isAlert(t) {
    return t == 'MapAlert' || t == 'TableAlert' || t == 'HistogramAlert' || t == 'CloudAlert' || (t.indexOf('Alert') !== -1);
}
const layoutConfig = {
    settings: {
        hasHeaders: true
    },
    dimensions: {
        borderWidth: 2,
        headerHeight: 25
    },
    content: [
        {
            type: 'column',
            width: 100,
            content: [
                {
                    type: 'react-component',
                    component: 'TableAlert',
                    title: 'New #evening',
                    props: { title: 'New #evening', color: '#eb4f4f' },
                    cssClass : ''
                },
                {
                    type: 'row',
                    width: 30,
                    content: [
                        {
                            type: 'react-component',
                            component: 'CardAlert',
                            title: 'Local imagery',
                            props: { title: 'Local imagery', color: '#4febeb' },
                            cssClass : 'scroll'
                        },
                        {
                            type: 'react-component',
                            component: 'HistogramAlert',
                            title: 'Platforms today',
                            props: { title: 'Platforms today', color: '#eb9650' },
                            cssClass : 'scroll'
                        }
                    ]
                }
                ]
        }

    ]

}

export default class AlertWallContainer extends Component {
    constructor(props) {
        super(props);

        //this.state = { layout };
    }
    componentDidMount() {
        const layout = new GoldenLayout(layoutConfig, this.refs.LayoutContainer);

        let alertCtr = 1;

        const alertWall = React.createClass({
            componentDidMount: function () {

                const color = this.props.color || '#000000';
                this.props.glContainer.tab.titleElement.prevObject.css('background-color', this.props.color);
                this.props.glContainer.tab.setTitle(this.props.title || 'No Title');
                // eslint-disable-next-line react/prop-types
                this.props.glContainer.on('tab', (tab) => {
                    tab.titleElement.prevObject.css('background-color', color);
                });
            },
            render: function () {
                return (<h1>Alert Window {alertCtr++}</h1>)
            }
        })



        layout.registerComponent('MapAlert', MapAlert);
        layout.registerComponent('TableAlert', TableAlert);
        layout.registerComponent('HistogramAlert', HistogramAlert);
        layout.registerComponent('CloudAlert', CloudAlert);
        layout.registerComponent('Alert Wall', alertWall);
        layout.registerComponent('CardAlert', CardAlert);

        layout.on('stackCreated', function (stack) {
            /*
             * Listening for activeContentItemChanged. This happens initially
             * when the stack is created and everytime the user clicks a tab
             */
            stack.on('activeContentItemChanged', function (contentItem) {
                stack.header.controlsContainer.children('.alertCommands').remove();
                const buttonInstance = (
                    <ButtonToolbar>
                        <Dropdown id="dropdown-custom-1"  >
                            <CustomToggle bsRole="toggle">
                                <Glyphicon glyph="cog" />
                            </CustomToggle>
                            <DropdownMenu className="">
                                <MenuItem eventKey="1">Load in Search Window</MenuItem>
                                <MenuItem eventKey="1">Change perspective ></MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey="1">Color ></MenuItem>
                                <MenuItem eventKey="1">Audio ></MenuItem>
                                <MenuItem eventKey="1">[x]Active</MenuItem>
                                <MenuItem eventKey="1">[x]Intelligent downsample</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey="1">Export to CSV</MenuItem>
                                <MenuItem eventKey="1">Export to PNG</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey="1">Save this configuration</MenuItem>
                                <MenuItem eventKey="1">Share this configuration</MenuItem>
                            </DropdownMenu>
                        </Dropdown>
                    </ButtonToolbar>

                );

                // interact with the contentItem
                if (isAlert(contentItem.config.component)) {

                    stack.header.controlsContainer.prepend('<li class="alertCommands "><span class="glyphicon glyphicon-volume-off" aria-hidden="true"></span></li>');
                    stack.header.controlsContainer.prepend('<li class="alertCommands cogSettings"></li>');
                    ReactDOM.render(buttonInstance, stack.header.controlsContainer.children('.cogSettings')[0]);
                }

            });
        });
        layout.on('itemCreated', function (item) {
            if (item.config.cssClass) {
                item.element.addClass(item.config.cssClass);
            }
        });
        layout.init();

    }


    render() {
        return (
            <div ref= 'LayoutContainer' style= {{ width: '100%', height: '100%' }}>

            </div >
        )
    }

    componentWillUnMount() {
        const layout = this.state.layout;
        if (layout)
            layout.destroy();
    }
}