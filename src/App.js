// JSXの時は必ずreactを書く
import React from "react";
import PropTypes from 'prop-types';

const App = () => {
    // 配列で囲うことによって複数管理できるようになる
    const profiles = [
        { name: "Taro", age: 10 },
        { name: "Hanako", age: 40 },
        { name: "Souta", age: 34 }
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

// ユーザーに対するproptypes
User.propTypes = {
    // これでstring型でのチェックができるようになる
    name: PropTypes.string,
    // これを記述するとこの場合は必ずageが必要になる
    age: PropTypes.number.isRequired
}


export  default App;