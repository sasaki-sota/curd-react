# reactアプリケーションの作成

## 一つのファイルのみを前の状態に戻す

``` git checkout READ.me(ファイル名)```

## アプリケーションの雛形の作成

```create-react-app ../作成するファイル名```

## サーバー起動のコマンド

```yarn run start```

## ```command + shift + B```でブックマークバーの表示と非表示


# 注意点のまとめ

## JSXについて
returnで返す時は一つのタグでなければならない
**原則JSの処理をする時は{}が必要**
  <React.Fragment> = divの代わりであり、一つにくくることができるようになる

### タグ内でのクラスの定義
`<div class = 'hoge'>` => `<div className = 'hoge'>`


## アロー関数
> アロー関数とはfunctionの定義をより短く記述できる記法です。「=>」という記号を使って記述します。

### 例：クリックされた場合の定義の仕方
`onClick = { function() { ~処理を書く }` => `onClick = {() => { ~処理を書く }`


## コンポーネントについて
**原則クラスと関数の二つのコンポーネントが存在する**

### クラスコンポーネント
```class App extends Companent { ~処理 }```
この時に必ずimportの部分でCompanentを記述

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



## その他の概念や対応について
###  Warning: Each child in list in should have a unique "key" props ~のエラーの対処法
A. indexを引数に設定する
***
```profiles.map((profile, index) => {```
                   ``` return <User name = {profile.name} age = {profile.age} key={index} />```
               ``` })```

