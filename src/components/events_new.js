import React, { Component } from "react";
import { connect } from 'react-redux';
import { Field, reduxForm} from "redux-form";
import { postEvent } from "../actions";
import { Link } from "react-router-dom";

class EventsNew extends Component {
    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }
    renderField(field) {
        const { input, label, type, meta: {touched, error} } = field
        return (
            <div>
                {/*入力したものがそのまま渡ってくる*/}
                <input {...input} placeholder={label} type={type} />
                {/*からでエラーの場合*/}
                {touched && error && <span>{error}</span>}
            </div>
        )
    }

    // 非同期処理
    async onSubmit(values) {
        await this.props.postEvent(values)
        this.props.history.push('/')
    }

    render() {
        // pristineとは何も入力されていない状態の属性
        const { handleSubmit, pristine, submitting, invalid } = this.props
        return (
            // サブミットが押された場合の処理
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <div>
                    {/*fieldコンポーネント*/}
                    <Field label="Title" name="title" type="text" component={this.renderField} />
                    <Field label="Body" name="body" type="text" component={this.renderField} />
                </div>

                <div>
                    <input type="submit" value="Submit" disabled={pristine || submitting || invalid } />
                    <Link to="/">Cancel</Link>
                </div>
            </form>
        )
    }
}

// これでエラーのバリデーションを完成
const validate = values => {
    const errors = {}

    if (!values.title) errors.title = "タイトルを入力してください"
    if (!values.body) errors.body = "本文を入力してください"

    return errors
}
// アクションで実装する
const mapDispatchToProps = ({ postEvent })

// 使用していない時はnullを使用する
export default connect(null, mapDispatchToProps)(
    reduxForm( {validate, form: 'eventNewForm' })(EventsNew)
)