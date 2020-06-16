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

### 例：定数を定数の中で使う場合
```const greeting = 'Hi';
    const dom = <h1>{greeting}</h1>;
    return dom ```
と{}（ハッシュ）をつける必要がある
**これがないとJSとしての記述を利用することができない**

### タグ内でのクラスの定義
`<div class = 'hoge'>` => `<div className = 'hoge'>`


## アロー関数
> アロー関数とはfunctionの定義をより短く記述できる記法です。「=>」という記号を使って記述します。

### 例：クリックされた場合の定義の仕方
`onClick = { function() { ~処理を書く }` => `onClick = {() => { ~処理を書く }`
