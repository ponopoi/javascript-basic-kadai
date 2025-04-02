document.addEventListener('DOMContentLoaded', function() {
    // ボタン要素とテキスト要素を取得します
    const button = document.getElementById('btn');
    const textElement = document.getElementById('text');
  
    // ボタンがクリックされたときのイベントリスナーを追加します
    button.addEventListener('click', function() {
      // テキスト要素の内容を変更します
      textElement.textContent = 'ボタンをクリックしました';
    });
  });