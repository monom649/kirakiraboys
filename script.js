// ハンバーガーメニュー機能
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const header = document.querySelector('header');

    hamburger.addEventListener('click', function() {
        header.classList.toggle('nav-open');
    });
});


// スクロール連動の背景色変更機能
window.addEventListener('scroll', function() {
    // スクロール位置を取得 (0から1までの値)
    let scrollRatio = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

    // スクロール位置がページの最下部に近い場合、比率が1を超えないように調整
    if (scrollRatio > 1) {
        scrollRatio = 1;
    }

    // 開始色 (オーロラの基本色)
    const startRed = 13;   // #0d
    const startGreen = 0;    // #00
    const startBlue = 94;  // #5e

    // 終了色 (スクロールで近づく色 - 少し紫がかったピンク)
    const endRed = 200;  // #c8
    const endGreen = 60;   // #3c
    const endBlue = 150; // #96

    // スクロール率に応じて中間色を計算
    const newRed = Math.round(startRed + (endRed - startRed) * scrollRatio);
    const newGreen = Math.round(startGreen + (endGreen - startGreen) * scrollRatio);
    const newBlue = Math.round(startBlue + (endBlue - startBlue) * scrollRatio);

    // 計算した色をCSSの変数としてbodyのスタイルに適用
    document.body.style.setProperty('--scroll-bg-color', `rgb(${newRed}, ${newGreen}, ${newBlue})`);
});


// CSS側に、このJSで変更するための記述を追加する必要があります。
// 以下のCSSを style.css の aurora-animation の下あたりに追加してください。

/*
@keyframes aurora-animation { ... } の下にこれを追加

body::before {
    ...
    background-color: var(--scroll-bg-color, #000033); // JSから色を受け取る
    ...
}
*/