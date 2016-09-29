self.addEventListener('message', function(e) {
  postMessage(1/x);
/*
  try {
    if (!isFinite(e.data.a) || !isFinite(e.data.b)) throw new Error("Not number");
    postMessage(e.data.a / e.data.b);
  } catch(err) {
    // オブジェクトがクローンできないというエラーになってしまうので、エラー詳細がわからなくなってしまう
    console.log('stack:', err.stack)
    postMessage(err);
  }
*/
});
