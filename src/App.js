// JSXの時は必ずreactを書く
import React, { Component } from "react";

// クラスコンポーネント
class App extends Component {
  render() {
    return (
        <React.Fragment>
          <label htmlFor="bar">bar</label>
          <input type="text" onClick={() => {console.log('I am clicked')}} />
        </React.Fragment>
    )
  }
}

// 関数コンポーネント
// const App = () => {
//     return <div>Hi</div>
// }

export  default App;