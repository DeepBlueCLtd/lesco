import React, {Component} from 'react'
import SlickGrid from 'react-slickgrid';

const tableData = [
    { Time: '12/09/17 16:34', User: 'userA', Location: '12.3N 1.3W', Source: 'Twitter', Message: 'message a', Keywords:'keyword-a' },
    { Time: '12/09/17 16:28', User: 'userC', Location: '12.4N 1.5W', Source: 'Twitter', Message: 'message b', Keywords:'keyword-b' },
    { Time: '12/09/17 16:25', User: 'userA', Location: '11.1N 2.1W', Source: 'Facebook', Message: 'message c', Keywords:'keyword-c' },
    { Time: '12/09/17 16:21', User: 'userB', Location: '11.7W 1.3W', Source: 'Instagram', Message: 'message d', Keywords:'keyword-a' },
    { Time: '12/09/17 16:20', User: 'userA', Location: '13.9N 1.2W', Source: 'Facebook', Message: 'message e', Keywords:'keyword-a' },
    { Time: '12/09/17 16:19', User: 'userD', Location: '13.4N 2.8W', Source: 'Instragram', Message: 'message f', Keywords:'keyword-c' },
    { Time: '12/09/17 16:18', User: 'userC', Location: '12.4N 1.5W', Source: 'Twitter', Message: 'message b', Keywords:'keyword-b' },
    { Time: '12/09/17 16:15', User: 'userA', Location: '11.1N 2.1W', Source: 'Facebook', Message: 'message c', Keywords:'keyword-c' },
    { Time: '12/09/17 16:11', User: 'userB', Location: '11.7W 1.3W', Source: 'Instagram', Message: 'message d', Keywords:'keyword-a' },
    { Time: '12/09/17 16:07', User: 'userD', Location: '11.1N 1.3W', Source: 'Facebook', Message: 'message f', Keywords:'keyword-f' },
    { Time: '12/09/17 16:05', User: 'userA', Location: '11.1N 2.1W', Source: 'Facebook', Message: 'message c', Keywords:'keyword-c' },
    { Time: '12/09/17 16:01', User: 'userB', Location: '11.7W 1.3W', Source: 'Instagram', Message: 'message d', Keywords:'keyword-a' },
    { Time: '12/09/17 16:00', User: 'userA', Location: '13.9N 1.2W', Source: 'Facebook', Message: 'message e', Keywords:'keyword-a' },
]

export default class TableView extends Component {
    render() {
        var settings = {
            multiColumnSort: true,
            defaultColumnWidth: 125,
            rowHeight: 26
        };
        return (

            <SlickGrid  id="slick-grid-container"
                data = {tableData}
                table="NFL"
                settings={settings} />

        )
    }
}