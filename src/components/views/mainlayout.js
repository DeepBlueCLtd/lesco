import React, {Component} from 'react';
import QueryWindow from '../SearchWindow/querybuilder';
import MapWindow from '../MapWindow/mapView';
import TableWindow from '../TableWindow/tableView';
import {ButtonToolbar, Dropdown, Glyphicon, MenuItem} from 'react-bootstrap';
import ReactDOM from 'react-dom';

import MapAlert from '../Alerts/MapAlert';
import TableAlert from '../Alerts/TableAlert';
import HistogramAlert from '../Alerts/HistogramAlert';
import CloudAlert from '../Alerts/CloudAlert';
import CardAlert from '../Alerts/CardAlert';

function isAlert(t) {
    return t == 'MapAlert' || t == 'TableAlert' || t == 'HistogramAlert' || t == 'CloudAlert' || (t.indexOf('Alert') !== -1);
}
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


const table1Data = [
    { Time: '12/09/17 16:34', User: 'userA', Location: '12.3N 1.3W', Source: 'Twitter', Message: 'message a', Keywords: 'keyword-a' },
    { Time: '12/09/17 16:28', User: 'userC', Location: '12.4N 1.5W', Source: 'Twitter', Message: 'message b', Keywords: 'keyword-b' },
    { Time: '12/09/17 16:25', User: 'userA', Location: '11.1N 2.1W', Source: 'Facebook', Message: 'message c', Keywords: 'keyword-c' },
    { Time: '12/09/17 16:21', User: 'userB', Location: '11.7W 1.3W', Source: 'Instagram', Message: 'message d', Keywords: 'keyword-a' },
    { Time: '12/09/17 16:20', User: 'userA', Location: '13.9N 1.2W', Source: 'Facebook', Message: 'message e', Keywords: 'keyword-a' },
    { Time: '12/09/17 16:19', User: 'userD', Location: '13.4N 2.8W', Source: 'Instragram', Message: 'message f', Keywords: 'keyword-c' },
    { Time: '12/09/17 16:18', User: 'userC', Location: '12.4N 1.5W', Source: 'Twitter', Message: 'message b', Keywords: 'keyword-b' },
    { Time: '12/09/17 16:15', User: 'userA', Location: '11.1N 2.1W', Source: 'Facebook', Message: 'message c', Keywords: 'keyword-c' },
    { Time: '12/09/17 16:11', User: 'userB', Location: '11.7W 1.3W', Source: 'Instagram', Message: 'message d', Keywords: 'keyword-a' },
    { Time: '12/09/17 16:07', User: 'userD', Location: '11.1N 1.3W', Source: 'Facebook', Message: 'message f', Keywords: 'keyword-f' },
    { Time: '12/09/17 16:05', User: 'userA', Location: '11.1N 2.1W', Source: 'Facebook', Message: 'message c', Keywords: 'keyword-c' },
    { Time: '12/09/17 16:01', User: 'userB', Location: '11.7W 1.3W', Source: 'Instagram', Message: 'message d', Keywords: 'keyword-a' },
    { Time: '12/09/17 16:00', User: 'userA', Location: '13.9N 1.2W', Source: 'Facebook', Message: 'message e', Keywords: 'keyword-a' },
]


const table2Data =
    [
        { Time: '12/09/17 16:34', User: 'userA', Location: '12.3N 1.3W', Source: 'Twitter', Message: 'message a', Keywords: 'keyword-a' },
        { Time: '12/09/17 16:28', User: 'userC', Location: '12.4N 1.5W', Source: 'Twitter', Message: 'message b', Keywords: 'keyword-b' },
        { Time: '12/09/17 16:25', User: 'userA', Location: '11.1N 2.1W', Source: 'Facebook', Message: 'message c', Keywords: 'keyword-c' }

    ]



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
            width: 50,
            content: [
                {
                    type: 'row',
                    height: 50,
                    content: [{
                        type: 'react-component',
                        component: 'Search Criteria',
                        title: 'Search Criteria'
                    }]
                },
                {
                    type: 'row',
                    height: 50,
                    content: [{
                        type: 'column',
                        width: 33,
                        content: [
                            {
                                type: 'react-component',
                                component: 'MapAlert',
                                title: 'New #dinner',
                                props: { title: 'New #dinner', color: '#53eb53' }
                            }, {
                                type: 'react-component',
                                component: 'TableAlert',
                                title: 'New #evening',
                                props: { title: 'New #evening', color: '#eb4f4f' }
                            }
                        ]
                    }, {
                            type: 'column',
                            width: 33,
                            content: [
                                {
                                    type: 'react-component',
                                    component: 'HistogramAlert',
                                    title: 'Platforms today',
                                    props: { title: 'Platforms today', color: '#eb9650' }
                                }, {
                                    type: 'react-component',
                                    component: 'CloudAlert',
                                    title: 'Trending this hour',
                                    props: { title: 'Trending this hour', color: '#4febeb' }

                                }
                            ]


                        },
                        {
                            type: 'column',
                            width: 33,
                            content: [

                                {
                                    type: 'react-component',
                                    component: 'CardAlert',
                                    title: 'Local imagery',
                                    props: { title: 'Local imagery', color: '#4febeb' }

                                }
                            ]
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
                            component: 'Map',
                            title: 'Map'
                        }, {
                            type: 'react-component',
                            component: 'Table',
                            title: 'Table',
                            props: {data: table1Data}
                        }, {
                            type: 'react-component',
                            component: 'Table',
                            title: 'Table 2',
                            props: {data: table2Data}
                        // }, {
                        //     type: 'react-component',
                        //     component: 'Cloud',
                        //     title: 'Cloud'
                        // }, {
                        //     type: 'react-component',
                        //     component: 'Histogram',
                        //     title: 'Histogram'
                        }]
                    }]
                }]
            }]
    }]
};
// eslint-disable-next-line react/no-multi-comp

export default class MainLayout extends Component {
    
    componentWillUnmount(){
        const layout = this.state.layout;
        if ( layout)
        layout.destroy();
    }
    componentDidMount() {
        const temp = React.createClass({
            render: () => {
                return (<h1>test component 3</h1>)
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
        layout.registerComponent('Search Criteria', QueryWindow);

        layout.registerComponent('MapAlert', MapAlert);
        layout.registerComponent('TableAlert', TableAlert);
        layout.registerComponent('HistogramAlert', HistogramAlert);
        layout.registerComponent('CloudAlert', CloudAlert);
        layout.registerComponent('Alert Wall', alertWall);
        layout.registerComponent('Histogram', temp);
        layout.registerComponent('CardAlert', CardAlert);

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


                const searchWindow = (
                    <ButtonToolbar>
                        <Dropdown id="dropdown-custom-1"  >
                            <CustomToggle bsRole="toggle">
                                <Glyphicon glyph="cog" />
                            </CustomToggle>
                            <DropdownMenu className="">
                                <MenuItem eventKey="1">Save Session</MenuItem>
                                <MenuItem eventKey="1">Restore Session </MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey="1">Disable Updates</MenuItem>
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
                if (contentItem.config.component == 'Search Criteria') {

                    stack.header.controlsContainer.prepend('<li class="alertCommands "><span class="glyphicon glyphicon-volume-off" aria-hidden="true"></span></li>');
                    stack.header.controlsContainer.prepend('<li class="alertCommands cogSettings"></li>');
                    ReactDOM.render(searchWindow, stack.header.controlsContainer.children('.cogSettings')[0]);
                }
            });

            /*
             * Accessing the container and updating its state
             */
            //stack.getActiveContentItem().container.extendState({ color: '#faa' });
        });

        layout.init()
        this.setState({layout});
    }

    render() {
        return (<div></div>)
    }
}
