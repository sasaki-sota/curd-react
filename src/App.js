// JSXの時は必ずreactを書く
import React, { Component } from "react";

// counterコンポーネントを呼ぶ定数
const App = () => (<Counter></Counter>)

class Counter extends Component {

    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }

    handlePlusButton = () => {
        // 現在のカウントに1を足す
        this.setState({count: this.state.count + 1})
    }

    handleDeleteButton = () => {
        this.setState({count: this.state.count - 1})
    }

    render() {
        return (
            <React.Fragment>
                <div>count: {this.state.count }</div>
                クリックされた時定義されたハンドルクラスボタン関数が作動する
                <button onClick={this.handlePlusButton}>+1</button>
                <button onClick={this.handleDeleteButton}>-1</button>
            </React.Fragment>
        )
    }
}

export  default App;