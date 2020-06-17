// JSXの時は必ずreactを書く
import React, { Component } from "react";
import { connect } from 'react-redux';
import _ from 'lodash';
import { readEvents } from "../actions";
import { Link } from "react-router-dom";

class EventsIndex extends Component {
    // コンポーネントがマウントされた時呼ばれるメソッド
    componentDidMount() {
        this.props.readEvents()
    }

    renderEvents() {
        //mapで配列のデーターを順番に取り出す
        return _.map(this.props.events, event => (
            // keyを明示してwarningを消す
            <tr key={event.id}>
                <td>{event.id}</td>
                <td>{event.title}</td>
                <td>{event.body}</td>
            </tr>
        ))
    }

    render() {
        //ヘッダー部分の作成
        return (
            <React.Fragment>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                    </thead>

                    <tbody>
                    {/*レンダーする関数*/}
                    {this.renderEvents()}
                    </tbody>
                </table>
                {/*このような感じでリンクを設定する*/}

                <Link to='events/new'>New Event</Link>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({ events: state.events })

const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)