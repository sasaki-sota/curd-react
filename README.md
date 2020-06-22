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

## axiosの追加
`yarn add axios`  
外部のサーバーに対してhttpリクエストを送るためのライブラリ  
使用する時は`import axios from 'axios'`が必要

## redux-thunkの追加
`yarn add redux-thunk`  
reduxのactionCreatorの非同期処理のライブラリ  
**アクションの代わりに関数を返すことができるようになる**  
使用する時は`import thunk from "redux-thunk";`が必要  
また、reduxのインポートの部分で`applyMiddleware`を追加する必要がある  
ストアの部分に組み込まれるように`const store = createStore(reducer, applyMiddleware(thunk))`とする  

## react-router-domの追加
`yarn add react-router-dom`  
新規作成画面の画面遷移となるリンク機能を有するパッケージ  
`import { Link } from "react-router-dom";`  
src/index.js: `import { BrowserRouter, Route, Switch } from 'react-router-dom';`  
src/indexファイル内のReactDOM.render内でrouteの記述ができるようになる  
`<Route exact path="/" component={EventsIndex} />`: indexの場合の例  


## redux-formの追加
`yarn add redux-form`  
新規作成画面のreduxのフォーム画面  


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
reduxを使用する時はimportする必要がある  
expoerで結びつける部分: `export default connect(mapStateToProps, mapDispatchToProps)(App)`  
####  mapStateToProps = stateの情報からこのコンポーネントに必要な情報を呼び出して、コンポーネントないのpropsとしてマッピングする性質のあるもの  
`const mapStateToProps = state => {{ value: state.count.value }}`と記述  
引数にはstateを書いてどういったオブジェクトをpropsとして対応するか返り値として定義する  
  
## dispatchについて
**発行という意味**
> 作成(create)-初期化(init)-発行(dispatch)プロセスの最後のステップ

### `componentDidMount()` => **コンポーネントがマウントされた時呼ばれるメソッド**

## async awaitについて
例:  
`const readEvents = () => async dispatch => {`  
`const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)`  
このように記述することで  
**レスポンスを含めたアクションをディスパッチでレデューサに渡すようにする**  
非同期処理を用いる際にとてもよく使用される

#### axiosでのURLの設定について  
`const ROOT_URL = 'https://hoge.com/api/v1'`  
`const QUERYSTRING = '?token=token123'`  
`axios.get(`${ROOT_URL}/events${QUERYSTRING}`)`  
のように設定することでgetメソッドを走らせることができるようになる


#### loadshについて
**配列の操作に使用するパッケージ**  
`import _ from 'lodash';`をインポートする必要がある  
`            console.log(_.mapKeys(action.response.data, 'id'))`  
IDとして抽出したものをキーとして再配置する、それを一つのオブジェクトとして書き換える(1: {object~}となる)  
繰り返しの場合も使用することが多い  

##### mapKeysメソッドについて



## redux-formついて
URL: **https://redux-form.com/8.3.0/docs/gettingstarted.md/**  
storeにreducerを含める必要がある  
次にFormコンポーネントを実装する(step2)  
events_new: `import { Field, reduxForm} from "redux-form";`を記述  

### fieldコンポーネントの記述の例
`<Field label="Title" name="title" type="text" component={this.renderField} />`  
などと書く。renderFieldは別途で定義  
`    renderField(field) {`  
`const { input, label, type, meta: {touched, error} } = field`  
`return (<div></div>)`  
`}`  
このように記述して引数でinputなどを察知する  
export defaultの部分で  
`reduxForm( {validate, form: 'eventNewForm' })(EventsNew)`  
と記述することでEventsNewを渡す  

##### disable属性について
> ボタン・入力フォーム・選択リストにdisabled属性を付与すると一切の操作ができなくなります  

#### `this.onSubmit.bind(this)`について


##### pristine属性について
**何も入力されていないことを明示的に表す状態の属性**  
`<input type="submit" value="Submit" disabled={pristine} />`  
と記述するとボタンを押せなくなる  

##### submitting属性について
**一度したボタンが押せなくなる**  
`<input type="submit" value="Submit" disabled={pristine || submitting} />`  
と記述することでうまく完成する  


## redux-devtoolsについて
**https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd**ここの部分で拡張する  
`yarn add redux-devtools-extension`でダウンロードできる  
src/index.jsに`import { composeWithDevTools} from "redux-devtools-extension";`をインポートする  
開発環境のみデバックすることが可能に  
`const enhancer = process.env.NODE_ENV === 'development' ?`  
`composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)`  
と記述する  

#### idの探し方について
`const { id } = this.props.match.params`  
と記述することでrubyでのparams[:id]を検知できるようになる  

#### スプレット演算子について
`return { ...events }`  

