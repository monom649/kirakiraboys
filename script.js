// --- 書き込みのデータベース（全300件） ---
const postDatabase = [
    // (300件の書き込みデータは、ここに変更はありません)
    // --- 初期投稿 (1-50) ---
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
    { author: '未来からのファン', title: '2025年のツアー', content: '「昭和 MEETS 令和」ツアー、絶対行く！チケット取れるかな…今からドキドキしてる。' },
    { author: '昭和おばさん', title: 'デビュー当時が懐かしい', content: '原宿のホコ天でゲリラライブやってた頃が懐かしいわ。あの頃はみんな若かった…私もね(笑)' },
    { author: '平成おじさん', title: 'バブル期最強アイドル', content: '91年の年間売上1位は本当にすごかった。CDが擦り切れるほど聞いたよ。まさに俺たちの青春。' },
    { author: '令和ギャル', title: 'TikTokで知った！', content: '昭和ダンスチャレンジで知って、曲聴いたら普通に神でハマったんですけど！親世代のアイドルってマジやば！' },
    { author: '海外ファン(USA)', title: 'Amazing group!', content: 'I discovered them through YouTube. Their music is timeless! "AI・LOVE FOREVER" makes me cry.' },
    { author: 'HIROSHIに夢中', title: 'リーダーの言葉', content: '「デジタルでもハートは本物」って言葉、信じてる。HIROSHIくんの言葉はいつだって真っ直ぐだもん。' },
    { author: '筋金入り', title: 'ファンクラブ会員番号3桁', content: 'KIRA-KIRA FAMILYの会員番号3桁台です。低迷期もずっと応援してました。デジタル復活、本当に嬉しい。' },
    { author: 'ドラマウォッチャー', title: '主題歌のドラマ', content: '「AI・LOVE FOREVER」が主題歌だったドラマ、毎週見てたなー。内容全然覚えてないけど(笑)' },
    { author: '2人体制時代ファン', title: 'あの頃の2人も好き', content: 'HIROSHIくんがいなくて大変な時期だったけど、二人で頑張ってたKEN-KENとYU-KUNもすごく輝いてたよ。' },
    { author: 'バーチャル番長推し', title: '新曲の衝撃', content: 'バーチャル番長、最初聞いたとき衝撃だった。これが2024年のKIRA-KIRA BOYSなんだなって。' },
    { author: '質問です！', title: '皆さんのイチオシ曲は？', content: 'ファンになったばかりです！皆さんの「これだけは聴いとけ！」っていうイチオシ曲があったら教えてください！' },
    { author: '管理人なぎさ', title: 'Re:質問です！', content: '>質問です！さん\nはじめまして！管理人のなぎさです！\nうーん、難しい質問だけど、私はやっぱりメジャーデビュー曲の「NIJI-IRO no MELODY」かな！あのキラキラ感は永遠！' },
    { author: '匿名希望', title: 'アジアツアー', content: '93年のアジアツアー、香港公演に行ったのが自慢。現地のファンの熱気もすごかった。' },
    { author: 'HIROSHIの涙', title: '復帰ライブ', content: '98年にHIROSHIくんが復帰した時のライブ、最初のMCで言葉に詰まって泣いちゃったんだよね。あれはもらい泣きした。' },
    { author: '解散コンサート', title: '最後の挨拶', content: '99年の解散コンサート、今でも覚えてる。「終わりじゃない、始まりだ」って言ってくれたもんね。本当にそうなった！' },
    { author: '動画サイト職人', title: '昔の映像探してます', content: '深夜番組「MIDNIGHT MUSIC」に出演した時の映像、誰か持ってませんか…？' },
    { author: 'ファッション好き', title: '当時の衣装', content: 'あの頃のメンバーのファッション、今見ても逆に新しいよね。ケミカルウォッシュのデニムとか。' },
    { author: 'KIRA-KIRA POSE', title: '決めポーズ', content: 'ライブでKIRA-KIRA POSEやるの、一体感あって最高に楽しい！' },
    { author: 'ZOKKON世代', title: 'インディーズ時代', content: 'デビュー前のストリートライブ時代から応援してた。まさかこんな国民的アイドルになるなんて…。' },
    { author: '親子ファン', title: '母と応援してます', content: '母が昔からのファンで、私も好きになりました！親子でライブ行くのが夢です！' },
    { author: 'YU-KUNの楽器', title: '何でも弾けるの？', content: 'YU-KUNってギター以外にもピアノとか色々弾けるよね。まさに音楽の申し子。' },
    { author: '妄想族', title: 'もし解散してなかったら…', content: 'もし99年に解散してなかったら、どんな曲を歌ってたんだろうなーって時々考えちゃう。' },
    { author: '歌詞考察班', title: 'YANKEE HEARTの歌詞', content: 'リメイク版YANKEE HEARTの歌詞、あれは絶対休止中のHIROSHIくんのことを歌ってるよね…泣ける。' },
    { author: 'キリ番GET!', title: '777番いただきました！', content: 'アクセスカウンター、777番踏みました！何か良いことありそう！記念にカキコ。' },
    { author: 'アナログ人間', title: 'カセットで聴いてた', content: '昔はCDじゃなくてカセットテープで聴いてたな。A面とB面を何度もひっくり返して。' },
    { author: 'ライブMC担当', title: 'KEN-KENのMC面白い', content: 'ライブのMC、ほとんどKEN-KENが喋ってるけど、あれがないと始まらないよね(笑)' },
    { author: 'HIROSHIの「だっぺ」', title: 'キャッチフレーズの謎', content: 'HIROSHIくん、東京出身なのにキャッチフレーズで「だっぺ」って言ってるの何でなんだろう？可愛いからいいけど！' },
    { author: 'YU-KUNの照れ顔', title: 'クールなだけじゃない', content: 'YU-KUN、普段はクールなのにファンに声援もらうと耳真っ赤にして照れるの、最高に可愛い。' },
    { author: 'K-POPファン', title: '元祖はここにいた', content: '最近のK-POPアイドルもすごいけど、歌って踊るアイドルの元祖はやっぱりKIRA-KIRA BOYSだなって思う。' },
    { author: '男ファン', title: '男だけどファンです', content: '男だけど、HIROSHIくんの生き様に憧れてファンになりました。硬派なところがカッコいい。' },
    { author: 'DOKIDOKI NATSU-YASUMI', title: '夏の思い出', content: 'この曲を聴くと、中学生の時の夏休みを思い出す。甘酸っぱい思い出…。' },
    { author: '管理人なぎさ', title: 'サーバーメンテナンスのお知らせ', content: 'いつもサイトをご利用いただきありがとうございます。\n明日の深夜、サーバーメンテナンスのため一時的にサイトが見れなくなります。ご迷惑をおかけしますが、よろしくお願いします。' },
    { author: '祝・デジタル復活', title: 'ありがとう！', content: 'もう一度3人が揃う姿を見れるなんて思ってなかった。このプロジェクトに関わってくれた全ての人に感謝しかない。' },
    { author: '技術班', title: '学習データ10万時間って…', content: 'HIROSHIくんの学習データ、80年代アイドル映像10万時間分ってヤバすぎでしょ(笑) どんだけ勉強したんだ。' },
    { author: 'もしも…', title: '現代の音楽番組に出たら', content: 'もしKIRA-KIRA BOYSが今の音楽番組に出たら、他のアーティストとどんなトークするんだろう。見てみたいなあ。' },
    ...Array.from({ length: 250 }, (v, i) => ({
      author: `ファン${i + 1}`,
      title: `雑談${i + 1}`,
      content: `KIRA-KIRA BOYSについての雑談です。これは${i + 1}番目の投稿になります。みんなで応援しましょう！`
    }))
];

// --- 動的なBBS書き込みを生成する関数 ---
function generateBbsPosts() {
    const container = document.getElementById('bbs-log-container-dynamic');
    if (!container) return; 

    // サイトの誕生日
    const siteBirthday = new Date('2025-07-30T00:00:00+09:00');
    const now = new Date();
    const elapsedTime = now - siteBirthday;

    // 経過時間を15分単位のブロック数に変換
    const blocksPassed = Math.floor(elapsedTime / (1000 * 60 * 15));

    // 投稿タイミングのパターン (1ブロック=15分, 4ブロック=1時間, 16ブロック=4時間)
    const timeIntervals = [1, 4, 16];
    
    let numPostsToShow = 0;
    let accumulatedBlocks = 0;

    // サイト誕生日から現在までの投稿数を計算
    for (let i = 0; i < 100; i++) {
        // 各投稿の「次の投稿までの時間」を、投稿内容に基づいてランダムに決定
        // これにより、同じ投稿はいつも同じ時間間隔で現れるように見える
        const post = postDatabase[i % postDatabase.length];
        const randomIntervalIndex = (post.author.length + post.content.length) % timeIntervals.length;
        accumulatedBlocks += timeIntervals[randomIntervalIndex];
        
        if (accumulatedBlocks <= blocksPassed) {
            numPostsToShow++;
        } else {
            break; // 未来の投稿は表示しない
        }
    }

    if (numPostsToShow === 0) numPostsToShow = 1; // サイト開設直後は最低1件表示

    // 表示する投稿のHTMLを生成
    let postsHtml = '';
    const usedIndices = new Set();
    const displayCount = Math.min(numPostsToShow, postDatabase.length);

    for (let i = 0; i < displayCount; i++) {
        let postIndex;
        if (usedIndices.size >= postDatabase.length) break;
        do {
            // ここでのランダムは、その日の投稿の中での「順序」を決めるためのもの
            postIndex = Math.floor(Math.random() * postDatabase.length);
        } while (usedIndices.has(postIndex));
        
        usedIndices.add(postIndex);
        const post = postDatabase[postIndex];
        const authorHtml = post.author === '管理人なぎさ' ? `<span class="管理人">${post.author}</span>` : post.author;
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
    if (hamburger) {
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