import React, {Component} from 'react';
import QueryWindow from '../SearchWindow/querybuilder';
import MapWindow from '../MapWindow/mapView';
import TableWindow from '../TableWindow/tableView';
import {ButtonToolbar, Dropdown, Glyphicon,MenuItem} from 'react-bootstrap';
import ReactDOM from 'react-dom';

const DropdownMenu = Dropdown.Menu;


/* eslint-disable react/no-multi-comp*/
/* eslint-disable react/prop-types*/
const GoldenLayout = require('golden-layout');


class CustomToggle extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();

        this.props.onClick(e);
    }

    render() {
        return (
            <Glyphicon glyph="cog" onClick={this.handleClick} />
        );
    }
}


//configuration for the layout
const layoutConfig = {
    settings: {
        hasHeaders: true
    },
    dimensions: {
        borderWidth: 2,
        headerHeight: 25
    },
    content: [{
        type: 'row',
        content: [{
            type: 'column',
            width: 40,
            content: [{
                type: 'react-component',
                component: 'Search Criteria',
                title: 'Search Criteria'
            }, {
                type: 'stack',
                content: [{
                    type: 'react-component',
                    component: 'Alert Wall',
                    title: 'Alert1',
                    props: {title: 'Alert 1', color: '#53eb53'}
                }, {
                    type: 'react-component',
                    component: 'Alert Wall',
                    title: 'Alert2',
                    props: {title: 'Alert 2', color: '#eb4f4f'}
                }, {
                    type: 'react-component',
                    component: 'Alert Wall',
                    title: 'Alert3',
                    props: {title: 'Alert 3', color: '#eb9650'}
                }, {
                    type: 'react-component',
                    component: 'Alert Wall',
                    title: 'Alert4',
                    props: {title: 'Alert 4', color: '#4febeb'}

                }
                ]
            }
            ]
        }, {
            type: 'row',
            content: [{
                type: 'column',
                width: 50,
                content: [{
                    type: 'stack',
                    height: 50,
                    content: [{
                        type: 'react-component',
                        component: 'Table',
                        title: 'Table'
                    }, {
                        type: 'react-component',
                        component: 'Map',
                        title: 'Map'
                    }, {
                        type: 'react-component',
                        component: 'Cloud',
                        title: 'Cloud'
                    }, {
                        type: 'react-component',
                        component: 'Histogram',
                        title: 'Histogram'
                    }]
                }]
            }]
        }]
    }]
};
// eslint-disable-next-line react/no-multi-comp

export default class MainLayout extends Component {

    componentDidMount() {
        const temp = React.createClass({
            render: () => {
                return (<h1>test component 3</h1>)
            }
        });
        const queryWidget = React.createClass({
            render: () => {
                return (<QueryWindow/>)
            }
        });

        var alertCtr = 1;

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

        const layout = new GoldenLayout(layoutConfig);
        layout.registerComponent('Search Criteria', queryWidget);
        layout.registerComponent('Alert Wall', alertWall);
        layout.registerComponent('Histogram', temp);
        layout.registerComponent('Cloud', temp);
        layout.registerComponent('Map', MapWindow);
        layout.registerComponent('Table', TableWindow);

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
                                <MenuItem eventKey="1">[x] Active</MenuItem>
                                <MenuItem eventKey="1">[x] Intelligent downsample</MenuItem>
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
                if (contentItem.config.component == 'Alert Wall') {

                    stack.header.controlsContainer.prepend('<li class="alertCommands "><span class="glyphicon glyphicon-volume-off" aria-hidden="true"></span></li>');
                    stack.header.controlsContainer.prepend('<li class="alertCommands cogSettings"></li>');
                    ReactDOM.render(buttonInstance, stack.header.controlsContainer.children('.cogSettings')[0]);
                }
            });

            /*
             * Accessing the container and updating its state
             */
            //stack.getActiveContentItem().container.extendState({ color: '#faa' });
        });

        layout.init()
    }

    render() {
        return (<div></div>)
    }
}
