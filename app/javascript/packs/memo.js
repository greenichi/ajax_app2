function post (){
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    // 「クリックされた」というイベントを認識したいため、
    // addEventListenerメソッドの第一引数にはclickイベントを指定します。そして、第二引数に実行したい処理を記述しましょう。
    // preventDefaultとは、既定のイベントを無効化するためのメソッド（投稿ボタンをクリックしたという現象の無効化）
    // eはイベント発生時の情報を持ったオブジェクト(なんでもいいけど今回はeventのeで投稿ボタンをクリックしたという意味)

  const form = document.getElementById("form");
  // 取得したフォームの要素を変数formに格納しています。
  const formData = new FormData(form);
  // new FormData(フォームの要素);のように記述することでオブジェクトを生成し、引数にフォームの要素を渡すことで、そのフォームに入力された値を取得できます。
  const XHR = new XMLHttpRequest();
  // 新たに生成したXMLHttpRequestオブジェクトを変数XHRに格納しています。（JavaScriptからサーバーサイドにリクエストを送信するのに必要）  
　 XHR.open("POST", "/posts", true);
  // openでリクエストの内容を指定できました。
   XHR.responseType = "json";
  //  responseTypeとは、レスポンスのデータフォーマット（＝どのような形式のデータにするか）を指定するプロパティ
  XHR.send(formData);
  // フォームに入力された内容をサーバー側に送信




  
  });

 }
 
 window.addEventListener('load', post);
//  ページが読み込まれることをトリガーにして、処理が実行されるように関数を定義