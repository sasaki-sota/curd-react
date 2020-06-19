import React, { Component } from "react";
import { connect } from 'react-redux';
import { Field, reduxForm} from "redux-form";
// import { postEvent } from "../actions";
import { Link } from "react-router-dom";

class EventsNew extends Component {
    renderField(field) {
        const { input, label, type, meta: {touched, error} } = field
        return (<div></div>)
    }
    render() {
        //ヘッダー部分の作成
        return (
            <form>
                <div>
                    {/*fieldコンポーネント*/}
                    <Field label="Title" name="title" type="text" component={this.renderField} />
                    <Field label="Body" name="body" type="text" component={this.renderField} />
                </div>

                <div>
                    <input type="submit" value="Submit" disabled={false} />
                    <Link to="/">Cancel</Link>
                </div>
            </form>
        )
    }
}

// これでエラーのバリデーションを完成
const validate = values => {
    const errors = {}

    return errors
}
// const mapDispatchToProps = ({ postEvent })

// 使用していない時はnullを使用する
export default connect(null, null)(
    reduxForm( {validate, form: 'eventNewForm' })(EventsNew)
)