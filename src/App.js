// JSXの時は必ずreactを書く
import React, { Component } from "react";

const App = () => {
    // 配列で囲うことによって複数管理できるようになる
    const profiles = [
        { name: "Taro", age: 10 },
        { name: "Hanako", age: 40 },
        { name: "Souta" }
    ]
    return (
        <div>
            {
                // mapメソッドを使って配列を順番に取り出す
                // ruby => profiles.map do |profile|
                profiles.map((profile, index) => {
                    return <User name = {profile.name} age = {profile.age} key={index} />
                })
            }
        </div>
    )
}

const User = (props) => {
    return <div>Hi, I am {props.name}. Age is {props.age} </div>
}

// defaultPropsを設定しておけば情報が入力されていない時に代わりのデーターを入れる
User.defaultProps = {
    age: 1
}

export  default App;