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
                        title: 'Alert1'
                    }, {
                            type: 'react-component',
                            component: 'Alert Wall',
                            title: 'Alert2',
                            props: { title: 'Alert 1', color: '#0000FF' }
                        }, {
                            type: 'react-component',
                            component: 'Alert Wall',
                            title: 'Alert3',
                            props: { title: 'Alert 1', color: '#00FFFF' }
                        }, {
                            type: 'react-component',
                            component: 'Alert Wall',
                            title: 'Alert6',
                            props: { title: 'Alert 1', color: '#FFFFFF' }

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

                return (<h1>test component 3</h1>)
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
                                <MenuItem divider />
                                <MenuItem eventKey="1">Low Priority (1) </MenuItem>
                                <MenuItem eventKey="2" active >Medium Priority (2) </MenuItem>
                                <MenuItem eventKey="3">High Priority (3) </MenuItem>
                                <MenuItem eventKey="4">Highest Priority (4) </MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey="6">Color (Red) </MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey="7" >Export to PNG</MenuItem>
                                <MenuItem eventKey="8" >Export to CSV</MenuItem>
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

