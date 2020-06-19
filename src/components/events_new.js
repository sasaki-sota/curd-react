import React, { Component } from "react";
import { connect } from 'react-redux';
// import { postEvent } from "../actions";
import { Link } from "react-router-dom";

class EventsNew extends Component {
    render() {
        //ヘッダー部分の作成
        return (
            <React.Fragment>
                <div>foo</div>
            </React.Fragment>
        )
    }
}

// const mapDispatchToProps = ({ postEvent })

// 使用していない時はnullを使用する
export default connect(null, null)(EventsNew)