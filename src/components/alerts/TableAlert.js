import React, {Component} from 'react'
import SlickGrid from 'react-slickgrid';

const tableData = [
    { Time: '12/09/17 16:34:33', User: 'userA', Location: '12.3N 1.3W', Source: 'Twitter', Message: 'message a', Keywords: 'keyword-a' },
    { Time: '12/09/17 16:28:33', User: 'userC', Location: '12.4N 1.5W', Source: 'Twitter', Message: 'message b', Keywords: 'keyword-b' },
    { Time: '12/09/17 16:25:33', User: 'userA', Location: '11.1N 2.1W', Source: 'Facebook', Message: 'message c', Keywords: 'keyword-c' },
    { Time: '12/09/17 16:21:33', User: 'userB', Location: '11.7W 1.3W', Source: 'Instagram', Message: 'message d', Keywords: 'keyword-a' },
    { Time: '12/09/17 16:20:33', User: 'userA', Location: '13.9N 1.2W', Source: 'Facebook', Message: 'message e', Keywords: 'keyword-a' },
    { Time: '12/09/17 16:19:33', User: 'userD', Location: '13.4N 2.8W', Source: 'Instragram', Message: 'message f', Keywords: 'keyword-c' },
    { Time: '12/09/17 16:18:33', User: 'userC', Location: '12.4N 1.5W', Source: 'Twitter', Message: 'message b', Keywords: 'keyword-b' },
    { Time: '12/09/17 16:15:33', User: 'userA', Location: '11.1N 2.1W', Source: 'Facebook', Message: 'message c', Keywords: 'keyword-c' },
    { Time: '12/09/17 16:11:33', User: 'userB', Location: '11.7W 1.3W', Source: 'Instagram', Message: 'message d', Keywords: 'keyword-a' },
    { Time: '12/09/17 16:07:33', User: 'userD', Location: '11.1N 1.3W', Source: 'Facebook', Message: 'message f', Keywords: 'keyword-f' },
    { Time: '12/09/17 16:05:33', User: 'userA', Location: '11.1N 2.1W', Source: 'Facebook', Message: 'message c', Keywords: 'keyword-c' },
    { Time: '12/09/17 16:01:33', User: 'userB', Location: '11.7W 1.3W', Source: 'Instagram', Message: 'message d', Keywords: 'keyword-a' },
    { Time: '12/09/17 16:00:33', User: 'userA', Location: '13.9N 1.2W', Source: 'Facebook', Message: 'message e', Keywords: 'keyword-a' },
];
let counter = 0;

function format(date) {
    var hrs = date.getHours();
    var mins = date.getMinutes();
    var secs = date.getSeconds();

    var hrPad = hrs < 10 ? "0" : "";
    var minPad = mins < 10 ? "0" : "";
    var secPad = secs < 10 ? "0" : "";

    var res = "12/09/17 " + hrPad + hrs + ":" + minPad + mins + ":" + secPad + secs;

    console.log(res);
    return res;
}

function simulateRealTimeUpdates(grid) {
    const changes = {};
    counter++;
    const server = Math.round(Math.random() * 3) + 1;
    tableData[server].User = tableData[server].User + "1";
    const date = new Date();
    tableData.splice(0, 0, { Time: format(date), User: 'userA' + counter, Location: '12.3N 1.3W', Source: 'Twitter', Message: 'message a', Keywords: 'keyword-a' }, )
    if (!changes[server]) {
        changes[server] = {};
    }
    changes[0] = { Time: 'changedGreen', User: 'changedGreen', Location: 'changedGreen', Source: 'changedGreen', Message: 'changedGreen', Keywords: 'changedGreen' }
//    changes[server]['User'] = 'changed';

    grid.setCellCssStyles('highlight', changes);
//    grid.flashCell(server, 1, 5000);
    setTimeout(function () {
        const oh = { server: { Time: '', User: '', Location: '', Source: '', Message: '', Keywords: '' } };
        grid.setCellCssStyles('highlight', oh);
    }, 2000);
    grid.invalidateRow(server);
    grid.invalidate();
    var nextInterval = 2000 + Math.random() * 5000;
    setTimeout(function () {
        simulateRealTimeUpdates(grid);
    }, nextInterval);

}

export default class TableAlert extends Component {


    resizeGrid(grid) {
        grid.resizeCanvas();
        //grid.autosizeColumns();
        grid.invalidate();
        grid.render();
    }


    componentDidMount() {
        const color = this.props.color || '#000000';
        this.props.glContainer.tab.titleElement.prevObject.css('background-color', this.props.color);
        this.props.glContainer.tab.setTitle(this.props.title || 'No Title');
        // eslint-disable-next-line react/prop-types
        this.props.glContainer.on('tab', (tab) => {
            tab.titleElement.prevObject.css('background-color', color);
        });
        const me = this.refs.grid;
        setTimeout(function () {
            simulateRealTimeUpdates(me._slickgrid);
        }, 2000);

    }
    render() {
        var settings = {
            multiColumnSort: true,
              defaultColumnWidth: 125,
            rowHeight: 26
        };
        return (
            <div  style={{ position: 'relative', height: '100%', width: '100%' }}>

                <SlickGrid ref='grid'  id="slick-grid-container2"
                    data = {tableData}
                    table="NFL2"
                    settings={settings}  />
            </div>


        )
    }
}