// --- 書き込みのデータベース（今後300件まで増やせるネタ帳） ---
const postDatabase = [
    { author: 'ななしのFAMILY', title: 'はじめまして！', content: '最近ファンになりました！よろしくお願いします！' },
    { author: 'HIROSHI推し', title: 'リーダーの復帰まだかな…', content: 'HIROSHIくんがいないとやっぱり寂しい…でも、信じて待ってます！' },
    { author: 'KEN-KENウォッチャー', title: '昨日のバラエティ見た？', content: 'KEN-KENのツッコミ、キレッキレだったな(笑) アイドルなのに体張ってて最高！' },
    { author: 'YU-KUNのメロディ', title: '新曲のギターソロ', content: 'YU-KUNが弾いてるっていう新曲のギター、めちゃくちゃカッコよくない？リピートが止まらない。' },
    { author: '古参ファン', title: '昔の雑誌を読み返してる', content: '家の整理してたら、91年頃のアイドル雑誌が出てきた！みんな若くてキラキラしてる！' },
    { author: 'マイコ', title: 'カラオケで歌ってきた！', content: '友達とカラオケで「NIJI-IRO no MELODY」歌ってきたよー！超盛り上がった！' },
    { author: '伝説のライブ', title: '国立の3DAYS行った人いる？', content: '伝説になってる92年の国立大ホール公演、行った人いますか？私は最終日に行きました！感動で涙が止まらなかったのを覚えてる。' },
    { author: 'デジタル世代', title: 'YANKEE HEARTヤバい', content: '最近リメイクされたYANKEE HEARTからハマりました。原曲も聴いたけど、どっちも神曲すぎる。' },
    { author: 'ななしのFAMILY', title: 'グッズ情報求む！', content: '昔のグッズとかって、今どこかで手に入らないかな？特にツアーパンフが欲しい…！' },
    { author: 'KIRA-KIRA応援団', title: '次の配信まだかな', content: '金曜の「KIRA-KIRA FRIDAY NIGHT」が待ち遠しい！毎週の楽しみ！' },
    { author: '北海道民', title: 'YU-KUNの訛り', content: 'たまに出るYU-KUNの北海道弁が可愛すぎてヤバい。「だべさ」って言われたい。' },
    { author: '関西人', title: 'KEN-KENの関西弁', content: 'KEN-KENの関西弁、ネイティブから見ても完璧やで。リアルタイム生成機能、伊達やないな！' },
    { author: '管理人なぎさ', title: 'みんな、いつもありがとう！', content: 'サイトへのたくさんのアクセス、BBSへの書き込み、本当にありがとう！\nみんなの応援がKIRA-KIRA BOYSの力になります！これからも一緒に応援していこうね！' },
    { author: 'コレクター', title: 'ZOKKON☆DREAMの初回盤', content: 'インディーズ時代の「ZOKKON☆DREAM」の初回盤持ってる人いる？ジャケットが微妙に違うんだよね。' },
    { author: '未来からのファン', title: '2025年のツアー', content: '「昭和 MEETS 令和」ツアー、絶対行く！チケット取れるかな…今からドキドキしてる。' }
    // 今後、ここに書き込みのストックを最大300件まで追加していく
];

// --- 動的なBBS書き込みを生成する関数 ---
function generateBbsPosts() {
    const container = document.getElementById('bbs-log-container-dynamic');
    if (!container) return; // BBSページでなければ何もしない

    // サイトの誕生日（この日時からカウントを開始する）
    // 日本時間の2025年7月30日 00:00:00を基準とする
    const siteBirthday = new Date('2025-07-30T00:00:00+09:00');
    const now = new Date();

    // 誕生日からの経過時間（ミリ秒）を計算
    const elapsedTime = now - siteBirthday;

    // 経過時間を時間単位に変換
    const hoursPassed = elapsedTime / (1000 * 60 * 60);

    // 4時間ごとに1件増える計算（初期件数を1とする）
    let numPostsToShow = 1 + Math.floor(hoursPassed / 4);

    // 最大件数を100件に制限
    if (numPostsToShow > 100) {
        numPostsToShow = 100;
    }
    // データベースの件数より多くならないように制限
    if (numPostsToShow > postDatabase.length) {
        numPostsToShow = postDatabase.length;
    }

    // 表示する投稿のHTMLを生成
    let postsHtml = '';
    const usedIndices = new Set(); // 同じ投稿が重複して表示されるのを防ぐ

    // 投稿をランダムに選んで表示
    for (let i = 0; i < numPostsToShow; i++) {
        let postIndex;
        // 重複しないランダムなインデックスが見つかるまで探す
        do {
            postIndex = Math.floor(Math.random() * postDatabase.length);
        } while (usedIndices.has(postIndex));
        
        usedIndices.add(postIndex);
        const post = postDatabase[postIndex];

        const authorHtml = post.author === '管理人なぎさ' 
            ? `<span class="管理人">${post.author}</span>` 
            : post.author;

        // それっぽい投稿日時を生成
        const randomHour = Math.floor(Math.random() * 24);
        const randomMinute = Math.floor(Math.random() * 60);
        
        const postDiv = `
            <div class="bbs-post">
                <div class="bbs-post-header">
                    <b>${i + 1}. ${post.title}</b> - <b>投稿者：</b>${authorHtml} - <b>投稿日：</b>${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()} ${String(randomHour).padStart(2, '0')}:${String(randomMinute).padStart(2, '0')}
                </div>
                <div class="bbs-post-body">
                    ${post.content.replace(/\n/g, '<br>')}
                </div>
            </div>
        `;
        postsHtml = postDiv + postsHtml;
    }

    container.innerHTML = postsHtml;
}

// --- ページ読み込み完了時に実行する処理 ---
document.addEventListener('DOMContentLoaded', function() {
    // 1. ハンバーガーメニュー機能 (変更なし)
    const hamburger = document.querySelector('.hamburger-menu');
    const header = document.querySelector('header');
    if (hamburger && header) {
        hamburger.addEventListener('click', function() {
            header.classList.toggle('nav-open');
        });
    }

    // 2. スクロール連動の背景色変更機能 (変更なし)
    window.addEventListener('scroll', function() {
        let scrollRatio = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        if (scrollRatio > 1) scrollRatio = 1;
        if (isNaN(scrollRatio)) scrollRatio = 0;
        const startRed = 13, startGreen = 0, startBlue = 94;
        const endRed = 200, endGreen = 60, endBlue = 150;
        const newRed = Math.round(startRed + (endRed - startRed) * scrollRatio);
        const newGreen = Math.round(startGreen + (endGreen - startGreen) * scrollRatio);
        const newBlue = Math.round(startBlue + (endBlue - startBlue) * scrollRatio);
        document.body.style.setProperty('--scroll-bg-color', `rgb(${newRed}, ${newGreen}, ${newBlue})`);
    });

    // 3. 動的BBS生成機能を呼び出す
    generateBbsPosts();
});