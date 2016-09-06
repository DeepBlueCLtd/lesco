import React, {Component} from 'react'
import SlickGrid from 'react-slickgrid';

const tableData = [
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
let counter = 0;

function format(date) {
  var mm = date.getMonth() + 1; // getMonth() is zero-based
  var dd = date.getDate();

  return [date.getFullYear(), !mm[1] && '0', mm, !dd[1] && '0', dd].join(''); // padding
}

function simulateRealTimeUpdates(grid) {
    const changes = {};
    counter++;
    const server = Math.round(Math.random() * 3);
    tableData[server].User = tableData[server].User + "1";
    const date = new Date();
    const  data =date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()
    tableData.splice(0, 0, { Time: data , User: 'userA' +  counter , Location: '12.3N 1.3W', Source: 'Twitter', Message: 'message a', Keywords: 'keyword-a' }, )
    if (!changes[server]) {
        changes[server] = {};
    }
    changes[server]['User'] = 'changed';

    grid.setCellCssStyles('highlight', changes);
    grid.flashCell(server, 1, 200);
    setTimeout(function () {
        const oh = { server: { User: '' } };
        grid.setCellCssStyles('highlight', oh);
    }, 850);
    grid.invalidateRow(server);
    grid.invalidate();
    setTimeout(function () {
        simulateRealTimeUpdates(grid);
    }, 1000);

}

export default class TableAlert extends Component {
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
        }, 1000);

    }
    render() {
        var settings = {
            multiColumnSort: true,

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