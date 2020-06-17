# reactアプリケーションの作成

## 一つのファイルのみを前の状態に戻す

``` git checkout READ.me(ファイル名)```

## アプリケーションの雛形の作成

```create-react-app ../作成するファイル名```

## サーバー起動のコマンド

```yarn run start```

## ```command + shift + B```でブックマークバーの表示と非表示

## reduxの追加

```yarn add redux react-redux```

## ファイルの移動

` git mv src/App.js src/components/`

# 注意点のまとめ

## JSXについて
returnで返す時は一つのタグでなければならない(原則としてReact>Fragmentを使用する)  
**原則JSの処理をする時は{}が必要**  
<React.Fragment> = divの代わりであり、一つにくくることができるようになる  
###他のファイルで機能を使用する時
`export`を先頭に記述しておき使用するファイルで`import`する  
例：
`import {INCREMENT, DECREMENT}  from "../actions";`

### タグ内でのクラスの定義
`<div class = 'hoge'>` => `<div className = 'hoge'>`


## アロー関数
> アロー関数とはfunctionの定義をより短く記述できる記法です。「=>」という記号を使って記述します。

### 例：クリックされた場合の定義の仕方
`onClick = { function() { ~処理を書く }` => `onClick = {() => { ~処理を書く }`


## コンポーネントについて
**原則クラスと関数の二つのコンポーネントが存在する**
関数とクラスそれぞれのコンポーネントの書き方は異なる

### クラスコンポーネント
```class App extends Companent { ~処理 }```
この時に必ずimportの部分でCompanentを記述  
`class ~ extends Component`で作成できる

### 関数コンポーネント
``` const App = () => { ~処理 }```


## propsについて
propsとは？　**コンポーネントの属性のこと**  
props.nameあるデーターの属性に対して参照できるもの  
基本的には{}で囲って使用する  
  例：```<User name = {"Taro"}/>```
これでユーザーコンポーネントにnameという属性を与えることができるようになる  
```const User = (props) => {```  
    ```return <div>Hi, I am {props.name}. Age is {props.age} </div>```  
```}```  
このように記述すればこの場合のnameはTaroを参照することができるようになる

## defaultPropsについて
`User.defaultProps = {`  
`name: "hoge"`  
`}`  
もしpropsを使用する時にnameを入力しなかったらデフォルトのhogeになる

## prop-typesについて
prop-typesとは？　**プロパティに対する型チェックを行うパッケージ**  
使用する時は`import PropTypes from 'prop-types';`の記述が必要  
`User.propTypes = {`  
`    name: PropTypes.string`  
`}`  
これで型チェックができるようになり。渡した時に他の方だった場合、**warningが発生する**  
`age: PropTypes.number.isRequired`これを記述すると必ずageを記述する必要がある  

## stateについて
stateとは？ **コンポーネント内の状態のこと**  
`this.state`でアクセスすることができる  
**constructorメソッド**で状態を初期化する　＝＞　counstructorの引数にはpropsを設定できる  
`    constructor(props) {`  
`        super(props)`  
`        this.state = { count: 0 }`  
これでこの場合countの初期化が完了する

描画の部分  
`        return (<div>count: {this.state.count }</div>)`  
と記述すれば使える  

### 状態を変更する
`setState`を使用する  
例：`        this.setState({count: this.state.count + 1})`  
と記述すると現在の状態に+1されるカウントの関数ができるようにステートが設定される  
**setSateを設定すると性質として自動でrenderされる**


###  propsとの違い  
ステートはコンポーネントの内部のみで使用される  
propsは変更不可能な値であるがステートは**変更可能な値**  


## その他の概念や対応について
###  Warning: Each child in list in should have a unique "key" props ~のエラーの対処法
A. indexを引数に設定する
***
```profiles.map((profile, index) => {```  
                   ``` return <User name = {profile.name} age = {profile.age} key={index} />```  
               ``` })```

## redux Actionについて
actionとは？ **javascriptのオブジェクトのこと**  
そのオブジェクトの中でtypeのキーとそのtypeに対応する値を持つのが特徴であり、ユニークなものである  
### アクションを返す関数　＝　actionCreatorという
例：  
`export const decrement = () => ({`  
    `// DECREMENTのアクション`  
   ` type: 'DECREMENT'`  
`})`  
このように記述することができる  
アクションのタイプ　＝ action.type  

## redux reducerについて
reducerとは？　**アクションが発生した時に組み込まれているtypeに応じて状態をどのように変更させるか**  
ここでの状態はstateで扱う  
#### reducers/index.js
**アプリケーション内のreducer全てを統括するファイル**  
`import { combineReducers } from "redux";` => reducerを結合する関数  
例：
`export default (state = initialState, action) => {`  
`    switch (action.type) {`  
`        case INCREMENT:`  
`            return { value: state.value + 1}`  
`        case DECREMENT:`  
`            return { value: state.value - 1}`  
`            default:`  
`            return state`
`}`  
`}`  
などと記述する

## redux storeについて
storeとは？ **全てのコンポーネントでreducerを使用できるようにするもの**  
`import { createStore} from "redux";`をimportする必要がある  
`const store = createStore(reducer)`  
ここで作られるストアはアプリケーション内で唯一のものになり,  
アプリケーション内の全てのステートはこのストアに集約されている  
ここで作られたストアは全てのコンポーネントで参照できる

### Providerについて
**作成したストアを全コンポーネントに渡ための機能を持つコンポーネント**  
`import { Provider } from "react-redux"`を記述する  
例： `      <Provider store={store}>`  
`          <App />`  
`      </Provider>`  
このような記述を**src/index.js**に記述  

## redux Connect関数について
conectとは？ **ステートやアクションとコンポーネントと関連づけを行って、viewのイベントで状態を遷移させて、遷移後の状態を描画する**  
`import { connect } from 'react-redux'`をインポートする  
expoerで結びつける部分: `export default connect(mapStateToProps, mapDispatchToProps)(App)`  
####  mapStateToProps = stateの情報からこのコンポーネントに必要な情報を呼び出して、コンポーネントないのpropsとしてマッピングする性質のあるもの  
`const mapStateToProps = state => {{ value: state.count.value }}`と記述  
引数にはstateを書いてどういったオブジェクトをpropsとして対応するか返り値として定義する  
  
## dispatchについて
**発行という意味**
> 作成(create)-初期化(init)-発行(dispatch)プロセスの最後のステップ
