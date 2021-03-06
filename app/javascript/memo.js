const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html
}

function post (){
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    // 「クリックされた」というイベントを認識したいため、
    // addEventListenerメソッドの第一引数にはclickイベントを指定します。そして、第二引数に実行したい処理を記述しましょう。
    // preventDefaultとは、既定のイベントを無効化するためのメソッド（投稿ボタンをクリックしたという現象の無効化）
    // eはイベント発生時の情報を持ったオブジェクト(なんでもいいけど今回はeventのeで投稿ボタンをクリックしたという意味)

  const form = document.getElementById("form")
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

  XHR.onload = () => {
    if (XHR.status != 200) {
      alert(`Error ${XHR.status}: ${XHR.statusText}`);
//       XHR.statusには、HTTPステータスコードが格納されます。
// また、XHR.statusTextには、ステータスコードに応じたメッセージが格納されます
      return null;
      //  JavaScriptの処理から抜け出す
    }
    const list = document.getElementById("list");
    const formText = document.getElementById("content");
    // onloadとは、リクエストの送信が成功したときに呼び出されるプロパティ
    list.insertAdjacentHTML("afterend", buildHTML(XHR));
      formText.value = "";
    };
  });
}

window.addEventListener('load', post);
//  ページが読み込まれることをトリガーにして、処理が実行されるように関数を定義