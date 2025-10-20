// --------------------------
// JSON データを直接埋め込み（最終版70問サンプル）
// --------------------------
let quizData = [
  {"id":1,"word":"以心伝心","reading":"いしんでんしん","meaning":"言葉に出さなくても心が通じ合うこと","example":"親友とは以心伝心の仲だ","level":"easy"},
  {"id":2,"word":"一石二鳥","reading":"いっせきにちょう","meaning":"一つの行動で二つの利益を得ること","example":"散歩すれば運動にもなるし気分も良い、一石二鳥だ","level":"easy"},
  {"id":3,"word":"一期一会","reading":"いちごいちえ","meaning":"一生に一度の出会いを大切にすること","example":"今日の出会いを一期一会と思おう","level":"easy"},
  {"id":4,"word":"起死回生","reading":"きしかいせい","meaning":"絶望的な状況から立ち直ること","example":"チームは起死回生のホームランで逆転した","level":"easy"},
  {"id":5,"word":"十人十色","reading":"じゅうにんといろ","meaning":"人それぞれ考え方や好みが違うこと","example":"好きな色も十人十色だ","level":"easy"},
  {"id":6,"word":"晴耕雨読","reading":"せいこううどく","meaning":"晴れの日は畑を耕し、雨の日は本を読むゆったりした生活","example":"晴耕雨読の暮らしにあこがれる","level":"easy"},
  {"id":7,"word":"温故知新","reading":"おんこちしん","meaning":"古いことを学び、新しい知識を得ること","example":"歴史を学ぶのは温故知新のためだ","level":"easy"},
  {"id":8,"word":"自業自得","reading":"じごうじとく","meaning":"自分の行いの結果を自分が受けること","example":"それは自業自得だよ","level":"easy"},
  {"id":9,"word":"四苦八苦","reading":"しくはっく","meaning":"たいへんな苦労をすること","example":"宿題を終わらせるのに四苦八苦した","level":"easy"},
  {"id":10,"word":"以弱制強","reading":"いじゃくせいきょう","meaning":"弱い者が知恵で強い者に勝つこと","example":"以弱制強の戦い方を工夫する","level":"easy"},
  {"id":11,"word":"空前絶後","reading":"くうぜんぜつご","meaning":"今までに例がなく、これからもないほど珍しいこと","example":"空前絶後の大記録だ","level":"easy"},
  {"id":12,"word":"三寒四温","reading":"さんかんしおん","meaning":"寒い日が三日続き、その後に暖かい日が四日続くこと","example":"三寒四温をくり返して春になる","level":"easy"},
  {"id":13,"word":"異口同音","reading":"いくどうおん","meaning":"多くの人が同じことを言うこと","example":"みんなが異口同音に賛成した","level":"easy"},
  {"id":14,"word":"和気藹々","reading":"わきあいあい","meaning":"なごやかで楽しい雰囲気があること","example":"和気藹々としたクラスだ","level":"easy"},
  {"id":15,"word":"公平無私","reading":"こうへいむし","meaning":"えこひいきせずに公平であること","example":"先生は公平無私な人だ","level":"easy"},
  {"id":16,"word":"自己中心","reading":"じこちゅうしん","meaning":"自分のことだけ考えること","example":"自己中心な考え方はよくない","level":"easy"},
  {"id":17,"word":"完全無欠","reading":"かんぜんむけつ","meaning":"欠点がまったくないこと","example":"完全無欠の計画だ","level":"easy"},
  {"id":18,"word":"右往左往","reading":"うおうさおう","meaning":"あちこち動き回って落ち着かないこと","example":"道に迷って右往左往した","level":"easy"},
  {"id":19,"word":"自由自在","reading":"じゆうじざい","meaning":"思いのままできること","example":"ピアノを自由自在に弾けるようになりたい","level":"easy"},
  {"id":20,"word":"七転八起","reading":"しちてんはっき","meaning":"何度失敗しても立ち上がること","example":"七転八起の努力で夢をかなえた","level":"easy"},
  {"id":21,"word":"無我夢中","reading":"むがむちゅう","meaning":"夢中で我を忘れること","example":"無我夢中で走った","level":"easy"},
  {"id":22,"word":"日進月歩","reading":"にっしんげっぽ","meaning":"絶えず進歩し発展すること","example":"科学は日進月歩で進んでいる","level":"easy"},
  {"id":23,"word":"喜怒哀楽","reading":"きどあいらく","meaning":"人のいろいろな感情のこと","example":"喜怒哀楽が豊かな人だ","level":"easy"},
  {"id":24,"word":"一心不乱","reading":"いっしんふらん","meaning":"ひとつのことに集中すること","example":"一心不乱に絵を描いた","level":"easy"},
  {"id":25,"word":"単刀直入","reading":"たんとうちょくにゅう","meaning":"前置きなしに本題に入ること","example":"単刀直入に言います","level":"easy"},
  {"id":26,"word":"明朗快活","reading":"めいろうかいかつ","meaning":"明るく元気なこと","example":"彼は明朗快活な性格だ","level":"easy"},
  {"id":27,"word":"公明正大","reading":"こうめいせいだい","meaning":"公平で正しいこと","example":"公明正大に判断する","level":"easy"},
  {"id":28,"word":"全力投球","reading":"ぜんりょくとうきゅう","meaning":"全力で物事に取り組むこと","example":"テスト勉強に全力投球する","level":"easy"},
  {"id":29,"word":"優柔不断","reading":"ゆうじゅうふだん","meaning":"決断力がないこと","example":"優柔不断な態度はよくない","level":"easy"},
  {"id":30,"word":"自己責任","reading":"じこせきにん","meaning":"自分の行動の結果を自分で引き受けること","example":"行動には自己責任がともなう","level":"easy"},
  {"id":31,"word":"臨機応変","reading":"りんきおうへん","meaning":"その場に応じて適切に対応すること","example":"臨機応変に考えよう","level":"easy"},
  {"id":32,"word":"不言実行","reading":"ふげんじっこう","meaning":"文句を言わずに実行すること","example":"彼は不言実行の人だ","level":"easy"},
  {"id":33,"word":"大同小異","reading":"だいどうしょうい","meaning":"細かい違いはあっても全体はほぼ同じこと","example":"二つの意見は大同小異だ","level":"easy"},
  {"id":34,"word":"勇気百倍","reading":"ゆうきひゃくばい","meaning":"勇気が何倍にも強まること","example":"友の声で勇気百倍になった","level":"easy"},
  {"id":35,"word":"悪戦苦闘","reading":"あくせんくとう","meaning":"困難に打ち勝とうと苦しむこと","example":"テスト勉強で悪戦苦闘した","level":"easy"},
  {"id":36,"word":"感謝感激","reading":"かんしゃかんげき","meaning":"心からありがたいと思うこと","example":"助けてもらって感謝感激です","level":"easy"},
  {"id":37,"word":"誠心誠意","reading":"せいしんせいい","meaning":"まじめで心からの気持ち","example":"誠心誠意がんばります","level":"easy"},
  {"id":38,"word":"異国情緒","reading":"いこくじょうちょ","meaning":"外国の雰囲気があること","example":"港町には異国情緒があふれる","level":"easy"},
  {"id":39,"word":"和洋折衷","reading":"わようせっちゅう","meaning":"日本風と西洋風をうまく合わせること","example":"和洋折衷の家に住んでいる","level":"easy"},
  {"id":40,"word":"以心伝意","reading":"いしんでんい","meaning":"心で通じ合い、相手の気持ちを察すること","example":"以心伝意で友の気持ちがわかった","level":"easy"},
  {"id":41,"word":"勇猛果敢","reading":"ゆうもうかかん","meaning":"勇ましく決断力があること","example":"勇猛果敢に立ち向かった","level":"easy"},
  {"id":42,"word":"質実剛健","reading":"しつじつごうけん","meaning":"飾り気がなく真面目で強いこと","example":"彼は質実剛健な人だ","level":"easy"},
  {"id":43,"word":"温厚篤実","reading":"おんこうとくじつ","meaning":"穏やかで誠実な性格であること","example":"温厚篤実な先生","level":"easy"},
  {"id":44,"word":"当意即妙","reading":"とういそくみょう","meaning":"その場に応じてうまく対応すること","example":"当意即妙な返事をした","level":"easy"},
  {"id":45,"word":"心機一転","reading":"しんきいってん","meaning":"気持ちを新たにすること","example":"心機一転、がんばろう","level":"easy"},
  {"id":46,"word":"温故知新","reading":"おんこちしん","meaning":"古いことを学び新しい知識を得ること","example":"歴史を学ぶのは温故知新のためだ","level":"easy"},
  {"id":47,"word":"意気投合","reading":"いきとうごう","meaning":"気持ちがぴったり合うこと","example":"友達と意気投合して話が弾んだ","level":"easy"},
  {"id":48,"word":"温厚篤実","reading":"おんこうとくじつ","meaning":"穏やかで誠実なこと","example":"温厚篤実な先生に教わる","level":"easy"},
  {"id":49,"word":"一日一善","reading":"いちにちいちぜん","meaning":"毎日少なくとも一つは善行をすること","example":"一日一善を心がける","level":"easy"},
  {"id":50,"word":"天真爛漫","reading":"てんしんらんまん","meaning":"素直で明るく自然なさま","example":"天真爛漫な子どもたち","level":"easy"},
  {"id":51,"word":"一蓮托生","reading":"いちれんたくしょう","meaning":"運命を共にすること","example":"友と一蓮托生の覚悟で挑む","level":"easy"},
  {"id":52,"word":"唯我独尊","reading":"ゆいがどくそん","meaning":"自分が一番価値があると思うこと","example":"唯我独尊の態度は注意が必要","level":"easy"},
  {"id":53,"word":"順風満帆","reading":"じゅんぷうまんぱん","meaning":"物事が順調に進むこと","example":"順風満帆な生活を送る","level":"easy"},
  {"id":54,"word":"早起三文","reading":"はやおきさんもん","meaning":"早起きは得をすること","example":"早起三文の徳を感じた","level":"easy"},
  {"id":55,"word":"七転八起","reading":"しちてんはっき","meaning":"何度失敗しても立ち上がること","example":"七転八起の努力で夢をかなえた","level":"easy"},
  {"id":56,"word":"臥薪嘗胆","reading":"がしんしょうたん","meaning":"目的達成のため苦労を重ねること","example":"臥薪嘗胆の思いで努力した","level":"easy"},
  {"id":57,"word":"心頭滅却","reading":"しんとうめっきゃく","meaning":"心を落ち着け、邪念を取り除くこと","example":"心頭滅却で緊張を乗り越えた","level":"easy"},
  {"id":58,"word":"和顔愛語","reading":"わがんあいご","meaning":"優しい顔と言葉で人に接すること","example":"和顔愛語で接する教師","level":"easy"},
  {"id":59,"word":"五里霧中","reading":"ごりむちゅう","meaning":"物事の見通しがつかず迷うこと","example":"問題解決の方法がわからず五里霧中だ","level":"easy"},
  {"id":60,"word":"異口同音","reading":"いくどうおん","meaning":"多くの人が同じ意見を言うこと","example":"みんなが異口同音に賛成した","level":"easy"},
  {"id":61,"word":"自画自賛","reading":"じがじさん","meaning":"自分で自分をほめること","example":"彼は自画自賛するタイプだ","level":"easy"},
  {"id":62,"word":"相思相愛","reading":"そうしそうあい","meaning":"互いに思い合うこと","example":"二人は相思相愛だ","level":"easy"},
  {"id":63,"word":"因果応報","reading":"いんがおうほう","meaning":"行いには必ず結果があること","example":"因果応報の教えを守る","level":"easy"},
  {"id":64,"word":"温情溢れる","reading":"おんじょうあふれる","meaning":"思いやりが多く親切なこと","example":"温情溢れる対応に感謝した","level":"easy"},
  {"id":65,"word":"意気揚々","reading":"いきようよう","meaning":"得意で張り切っている様子","example":"試合に勝って意気揚々と帰る","level":"easy"},
  {"id":66,"word":"順風順水","reading":"じゅんぷうじゅんすい","meaning":"物事が非常に順調なこと","example":"仕事は順風順水に進んでいる","level":"easy"},
  {"id":67,"word":"一喜一憂","reading":"いっきいちゆう","meaning":"喜んだり心配したりすること","example":"結果に一喜一憂する","level":"easy"},
  {"id":68,"word":"言行一致","reading":"げんこういっち","meaning":"言葉と行動が一致していること","example":"言行一致の人が信頼される","level":"easy"},
  {"id":69,"word":"自給自足","reading":"じきゅうじそく","meaning":"自分で必要な物をまかなうこと","example":"田舎で自給自足の生活をする","level":"easy"},
  {"id":70,"word":"粉骨砕身","reading":"ふんこつさいしん","meaning":"力の限り努力すること","example":"粉骨砕身して研究に励む","level":"easy"},
  {"id":71,"word":"一網打尽","reading":"いちもうだじん","meaning":"一度に全てを捕まえること","example":"悪党を一網打尽にした","level":"easy"},
  {"id":72,"word":"大器晩成","reading":"たいきばんせい","meaning":"大人物は時間をかけて成長すること","example":"大器晩成の人物が成功した","level":"easy"},
  {"id":73,"word":"意気軒昂","reading":"いきけんこう","meaning":"元気で勢いがある様子","example":"意気軒昂に登場する選手","level":"easy"},
  {"id":74,"word":"才色兼備","reading":"さいしょくけんび","meaning":"才能と美貌を兼ね備えていること","example":"才色兼備の女性として知られる","level":"easy"},
  {"id":75,"word":"笑顔満面","reading":"えがおまんめん","meaning":"顔いっぱいに笑顔があふれていること","example":"笑顔満面で挨拶する","level":"easy"},
  {"id":76,"word":"一目瞭然","reading":"いちもくりょうぜん","meaning":"一目でよくわかること","example":"結果は一目瞭然だ","level":"easy"},
  {"id":77,"word":"空前絶後","reading":"くうぜんぜつご","meaning":"今までに例がなく、これからもないほど珍しいこと","example":"空前絶後の快挙","level":"easy"},
  {"id":78,"word":"百聞は一見に如かず","reading":"ひゃくぶんはいっけんにしかず","meaning":"何度聞くよりも一度見た方がよくわかること","example":"百聞は一見に如かずだ","level":"easy"},
  {"id":79,"word":"一陽来復","reading":"いちようらいふく","meaning":"悪いことの後に良いことが訪れること","example":"一陽来復の知らせが届いた","level":"easy"},
  {"id":80,"word":"和魂洋才","reading":"わこんようさい","meaning":"日本の精神と西洋の学問を合わせること","example":"和魂洋才で新しい技術を開発する","level":"easy"},
  {"id":81,"word":"満身創痍","reading":"まんしんそうい","meaning":"体が傷だらけで痛むこと","example":"満身創痍でゴールした選手","level":"easy"},
  {"id":82,"word":"柔軟自在","reading":"じゅうなんじざい","meaning":"自由に、柔軟に対応できること","example":"柔軟自在な考え方を身につける","level":"easy"},
  {"id":83,"word":"臨機応変","reading":"りんきおうへん","meaning":"状況に応じて適切に行動すること","example":"臨機応変な対応が求められる","level":"easy"},
  {"id":84,"word":"異端邪説","reading":"いたんじゃせつ","meaning":"正統ではない考えや説","example":"異端邪説に惑わされない","level":"easy"},
  {"id":85,"word":"感慨無量","reading":"かんがいむりょう","meaning":"深く心に感じること","example":"卒業式で感慨無量だった","level":"easy"},
  {"id":86,"word":"自力更生","reading":"じりきこうせい","meaning":"自分の力で再び立ち直ること","example":"自力更生で事業を立て直した","level":"easy"},
  {"id":87,"word":"意志堅固","reading":"いしけんご","meaning":"意志が固くぶれないこと","example":"意志堅固に目標を達成した","level":"easy"},
  {"id":88,"word":"直情径行","reading":"ちょくじょうけいこう","meaning":"思ったままに行動すること","example":"直情径行な性格だ","level":"easy"},
  {"id":89,"word":"自由奔放","reading":"じゆうほんぽう","meaning":"自由に自分の思うままに行動すること","example":"自由奔放に生きる","level":"easy"},
  {"id":90,"word":"明朗快活","reading":"めいろうかいかつ","meaning":"明るく元気で活発なこと","example":"明朗快活な性格の友人","level":"easy"},
  {"id":91,"word":"一期懸命","reading":"いちごけんめい","meaning":"一生懸命に努力すること","example":"一期懸命に勉強した","level":"easy"},
  {"id":92,"word":"笑止千万","reading":"しょうしせんばん","meaning":"あきれて笑ってしまうこと","example":"笑止千万な冗談だ","level":"easy"},
  {"id":93,"word":"大器晩成","reading":"たいきばんせい","meaning":"大人物は時間をかけて成長すること","example":"大器晩成の人物が成功した","level":"easy"},
  {"id":94,"word":"心身一如","reading":"しんしんいちにょ","meaning":"心と体が一体であること","example":"心身一如の状態で挑む","level":"easy"},
  {"id":95,"word":"前人未到","reading":"ぜんじんみとう","meaning":"これまで誰も達成したことのないこと","example":"前人未到の記録を作る","level":"easy"},
  {"id":96,"word":"悠々自適","reading":"ゆうゆうじてき","meaning":"自由気ままで落ち着いた生活をすること","example":"悠々自適な老後を過ごす","level":"easy"},
  {"id":97,"word":"自由奔放","reading":"じゆうほんぽう","meaning":"自分の思うままに振る舞うこと","example":"自由奔放な生き方をする","level":"easy"},
  {"id":98,"word":"不言実行","reading":"ふげんじっこう","meaning":"言わずに行動すること","example":"不言実行の態度が信頼を呼ぶ","level":"easy"},
  {"id":99,"word":"質実剛健","reading":"しつじつごうけん","meaning":"飾り気がなく真面目で力強いこと","example":"質実剛健な性格","level":"easy"},
  {"id":100,"word":"明鏡止水","reading":"めいきょうしすい","meaning":"心が澄み切って落ち着いていること","example":"明鏡止水の心で判断する","level":"easy"},
  {"id":101,"word":"勇往邁進","reading":"ゆうおうまいしん","meaning":"恐れずに勇敢に前進すること","example":"勇往邁進の精神で挑む","level":"normal"},
  {"id":102,"word":"泰然自若","reading":"たいぜんじじゃく","meaning":"落ち着いて動じないこと","example":"泰然自若の態度で問題を解決した","level":"normal"},
  {"id":103,"word":"臥薪嘗胆","reading":"がしんしょうたん","meaning":"目的達成のため苦労を重ねること","example":"臥薪嘗胆の努力を重ねた","level":"normal"},
  {"id":104,"word":"粉骨砕身","reading":"ふんこつさいしん","meaning":"力の限り努力すること","example":"粉骨砕身して研究に打ち込む","level":"normal"},
  {"id":105,"word":"満身創痍","reading":"まんしんそうい","meaning":"体が傷だらけで痛むこと","example":"満身創痍で戦い抜いた","level":"normal"},
  {"id":106,"word":"一意専心","reading":"いちいせんしん","meaning":"ひたすら一つのことに心を集中すること","example":"一意専心に勉強する","level":"normal"},
  {"id":107,"word":"百発百中","reading":"ひゃっぱつひゃくちゅう","meaning":"何度やっても必ず成功すること","example":"百発百中のシュートを決めた","level":"normal"},
  {"id":108,"word":"電光石火","reading":"でんこうせっか","meaning":"非常に素早いこと","example":"電光石火の反応で相手をかわした","level":"normal"},
  {"id":109,"word":"異口同音","reading":"いくどうおん","meaning":"多くの人が同じ意見を言うこと","example":"異口同音に賛成された","level":"normal"},
  {"id":110,"word":"一触即発","reading":"いっしょくそくはつ","meaning":"危険な状態で、ちょっとしたことで事件が起こること","example":"緊張で一触即発の状況だった","level":"normal"},
  {"id":111,"word":"臨戦態勢","reading":"りんせんたいせい","meaning":"戦いに備えて整った状態","example":"臨戦態勢で試合に臨む","level":"normal"},
  {"id":112,"word":"破天荒","reading":"はてんこう","meaning":"前例がなく、非常に珍しいこと","example":"破天荒なアイディアを出した","level":"normal"},
  {"id":113,"word":"自業自得","reading":"じごうじとく","meaning":"自分の行いの結果を自分が受けること","example":"失敗は自業自得だ","level":"normal"},
  {"id":114,"word":"意気軒昂","reading":"いきけんこう","meaning":"元気で勢いがある様子","example":"意気軒昂に出発した","level":"normal"},
  {"id":115,"word":"喜怒哀楽","reading":"きどあいらく","meaning":"人のいろいろな感情","example":"喜怒哀楽が豊かだ","level":"normal"},
  {"id":116,"word":"一網打尽","reading":"いちもうだじん","meaning":"一度にすべて捕まえること","example":"悪党を一網打尽にした","level":"normal"},
  {"id":117,"word":"異国情緒","reading":"いこくじょうちょ","meaning":"外国の雰囲気があること","example":"港町には異国情緒が漂う","level":"normal"},
  {"id":118,"word":"温故知新","reading":"おんこちしん","meaning":"古いことを学び新しい知識を得ること","example":"温故知新の心で学ぶ","level":"normal"},
  {"id":119,"word":"和洋折衷","reading":"わようせっちゅう","meaning":"日本風と西洋風をうまく合わせること","example":"和洋折衷の家に住む","level":"normal"},
  {"id":120,"word":"明鏡止水","reading":"めいきょうしすい","meaning":"心が澄み切って落ち着いていること","example":"明鏡止水の心で判断する","level":"normal"},
  {"id":121,"word":"大器晩成","reading":"たいきばんせい","meaning":"大人物は時間をかけて成長すること","example":"大器晩成の人物が成功した","level":"normal"},
  {"id":122,"word":"百戦錬磨","reading":"ひゃくせんれんま","meaning":"多くの経験を積んで鍛えられていること","example":"百戦錬磨の選手だ","level":"normal"},
  {"id":123,"word":"直情径行","reading":"ちょくじょうけいこう","meaning":"思ったままに行動すること","example":"直情径行の性格だ","level":"normal"},
  {"id":124,"word":"無我夢中","reading":"むがむちゅう","meaning":"夢中で我を忘れること","example":"無我夢中で絵を描いた","level":"normal"},
  {"id":125,"word":"一心不乱","reading":"いっしんふらん","meaning":"ひとつのことに集中すること","example":"一心不乱に勉強した","level":"normal"},
  {"id":126,"word":"一知半解","reading":"いっちはんかい","meaning":"少し知っているだけで十分に理解していないこと","example":"一知半解で答えを出すな","level":"normal"},
  {"id":127,"word":"以心伝心","reading":"いしんでんしん","meaning":"言葉に出さなくても心が通じ合うこと","example":"友と以心伝心で通じ合う","level":"normal"},
  {"id":128,"word":"電光石火","reading":"でんこうせっか","meaning":"非常に素早いこと","example":"電光石火の対応を見せた","level":"normal"},
  {"id":129,"word":"一目瞭然","reading":"いちもくりょうぜん","meaning":"一目でよくわかること","example":"結果は一目瞭然だった","level":"normal"},
  {"id":130,"word":"言行一致","reading":"げんこういっち","meaning":"言葉と行動が一致していること","example":"言行一致の人物が信頼される","level":"normal"},
  {"id":131,"word":"自暴自棄","reading":"じぼうじき","meaning":"投げやりになって自分をだめにすること","example":"自暴自棄になってしまった","level":"normal"},
  {"id":132,"word":"心機一転","reading":"しんきいってん","meaning":"気持ちを新たにすること","example":"心機一転して再出発した","level":"normal"},
  {"id":133,"word":"一蓮托生","reading":"いちれんたくしょう","meaning":"運命を共にすること","example":"仲間と一蓮托生で挑む","level":"normal"},
  {"id":134,"word":"柔軟自在","reading":"じゅうなんじざい","meaning":"自由に、柔軟に対応できること","example":"柔軟自在な考え方を身につける","level":"normal"},
  {"id":135,"word":"有言実行","reading":"ゆうげんじっこう","meaning":"言ったことを必ず実行すること","example":"有言実行の人を尊敬する","level":"normal"},
  {"id":136,"word":"粉骨砕身","reading":"ふんこつさいしん","meaning":"力の限り努力すること","example":"粉骨砕身して仕事に打ち込む","level":"normal"},
  {"id":137,"word":"自力更生","reading":"じりきこうせい","meaning":"自分の力で再び立ち直ること","example":"自力更生で事業を立て直した","level":"normal"},
  {"id":138,"word":"一意専心","reading":"いちいせんしん","meaning":"ひたすら一つのことに心を集中すること","example":"一意専心に練習する","level":"normal"},
  {"id":139,"word":"電光石火","reading":"でんこうせっか","meaning":"非常に素早いこと","example":"電光石火の動きで勝利した","level":"normal"},
  {"id":140,"word":"粉骨砕身","reading":"ふんこつさいしん","meaning":"力の限り努力すること","example":"粉骨砕身の努力で成功した","level":"normal"},
  {"id":141,"word":"臥薪嘗胆","reading":"がしんしょうたん","meaning":"目的達成のため苦労を重ねること","example":"臥薪嘗胆の覚悟で挑む","level":"normal"},
  {"id":142,"word":"百発百中","reading":"ひゃっぱつひゃくちゅう","meaning":"何度やっても必ず成功すること","example":"百発百中の成果を出した","level":"normal"},
  {"id":143,"word":"勇猛果敢","reading":"ゆうもうかかん","meaning":"勇ましく決断力があること","example":"勇猛果敢に立ち向かう","level":"normal"},
  {"id":144,"word":"破天荒","reading":"はてんこう","meaning":"前例がなく、非常に珍しいこと","example":"破天荒な行動をする","level":"normal"},
  {"id":145,"word":"百戦錬磨","reading":"ひゃくせんれんま","meaning":"多くの経験を積んで鍛えられていること","example":"百戦錬磨の戦士だ","level":"normal"},
  {"id":146,"word":"泰然自若","reading":"たいぜんじじゃく","meaning":"落ち着いて動じないこと","example":"泰然自若の態度で問題を解決","level":"normal"},
  {"id":147,"word":"臨機応変","reading":"りんきおうへん","meaning":"状況に応じて適切に行動すること","example":"臨機応変に対応する","level":"normal"},
  {"id":148,"word":"無我夢中","reading":"むがむちゅう","meaning":"夢中で我を忘れること","example":"無我夢中で絵を描いた","level":"normal"},
  {"id":149,"word":"一心不乱","reading":"いっしんふらん","meaning":"ひとつのことに集中すること","example":"一心不乱に練習した","level":"normal"},
  {"id":150,"word":"意気投合","reading":"いきとうごう","meaning":"気持ちがぴったり合うこと","example":"友と意気投合した","level":"normal"},
  {"id":151,"word":"百聞は一見に如かず","reading":"ひゃくぶんはいっけんにしかず","meaning":"何度聞くより一度見る方が良くわかること","example":"百聞は一見に如かずだ","level":"normal"},
  {"id":152,"word":"一喜一憂","reading":"いっきいちゆう","meaning":"喜んだり心配したりすること","example":"結果に一喜一憂する","level":"normal"},
  {"id":153,"word":"自業自得","reading":"じごうじとく","meaning":"自分の行いの結果を自分が受けること","example":"自業自得だ","level":"normal"},
  {"id":154,"word":"意気揚々","reading":"いきようよう","meaning":"得意で張り切っている様子","example":"意気揚々と出発する","level":"normal"},
  {"id":155,"word":"温厚篤実","reading":"おんこうとくじつ","meaning":"穏やかで誠実なこと","example":"温厚篤実な人柄","level":"normal"},
  {"id":156,"word":"和顔愛語","reading":"わがんあいご","meaning":"優しい顔と言葉で接すること","example":"和顔愛語で接する","level":"normal"},
  {"id":157,"word":"百戦錬磨","reading":"ひゃくせんれんま","meaning":"多くの経験を積んで鍛えられていること","example":"百戦錬磨の人物だ","level":"normal"},
  {"id":158,"word":"一意専心","reading":"いちいせんしん","meaning":"ひたすら一つのことに心を集中すること","example":"一意専心に努力する","level":"normal"},
  {"id":159,"word":"意志堅固","reading":"いしけんご","meaning":"意志が固くぶれないこと","example":"意志堅固に目標を達成","level":"normal"},
  {"id":160,"word":"電光石火","reading":"でんこうせっか","meaning":"非常に素早いこと","example":"電光石火の動きで勝利","level":"normal"},
   {"id":161,"word":"天衣無縫","reading":"てんいむほう","meaning":"自然で飾り気がなく、完全であること","example":"天衣無縫な演技に感動した","level":"hard"},
  {"id":162,"word":"明鏡止水","reading":"めいきょうしすい","meaning":"心が澄み切って落ち着いていること","example":"明鏡止水の心で決断する","level":"hard"},
  {"id":163,"word":"百折不撓","reading":"ひゃくせつふとう","meaning":"何度失敗してもくじけないこと","example":"百折不撓の精神で挑戦する","level":"hard"},
  {"id":164,"word":"不撓不屈","reading":"ふとうふくつ","meaning":"どんな困難にも屈しないこと","example":"不撓不屈の精神で立ち向かう","level":"hard"},
  {"id":165,"word":"鶏鳴狗盗","reading":"けいめいくとう","meaning":"卑劣な手段で人を騙すこと","example":"鶏鳴狗盗のような行為は許されない","level":"hard"},
  {"id":166,"word":"四面楚歌","reading":"しめんそか","meaning":"周囲がすべて敵で孤立すること","example":"四面楚歌の状況に追い込まれた","level":"hard"},
  {"id":167,"word":"朝令暮改","reading":"ちょうれいぼかい","meaning":"命令が頻繁に変わること","example":"朝令暮改の政策は混乱を招く","level":"hard"},
  {"id":168,"word":"温故知新","reading":"おんこちしん","meaning":"古いことを学び新しい知識を得ること","example":"温故知新の心で学ぶ","level":"hard"},
  {"id":169,"word":"以心伝心","reading":"いしんでんしん","meaning":"言葉にせず心が通じること","example":"以心伝心で気持ちが伝わった","level":"hard"},
  {"id":170,"word":"泰山北斗","reading":"たいざんほくと","meaning":"その分野で最も尊敬される人","example":"泰山北斗の学者に学ぶ","level":"hard"},
  {"id":171,"word":"温厚篤実","reading":"おんこうとくじつ","meaning":"穏やかで誠実なこと","example":"温厚篤実な指導者","level":"hard"},
  {"id":172,"word":"自暴自棄","reading":"じぼうじき","meaning":"投げやりになって自分をだめにすること","example":"自暴自棄にならず立ち直った","level":"hard"},
  {"id":173,"word":"寡黙不言","reading":"かもくふげん","meaning":"口数が少なく沈黙を守ること","example":"寡黙不言の人物だ","level":"hard"},
  {"id":174,"word":"独立独歩","reading":"どくりつどっぽ","meaning":"他に頼らず自分の力で進むこと","example":"独立独歩の生き方を貫く","level":"hard"},
  {"id":175,"word":"百戦百勝","reading":"ひゃくせんひゃくしょう","meaning":"戦いにおいて常に勝つこと","example":"百戦百勝の将軍だ","level":"hard"},
  {"id":176,"word":"先憂後楽","reading":"せんゆうこうらく","meaning":"先に心配して後で楽しむこと","example":"先憂後楽の精神で行動する","level":"hard"},
  {"id":177,"word":"唯我独尊","reading":"ゆいがどくそん","meaning":"自分が一番価値があると思うこと","example":"唯我独尊な態度は注意が必要","level":"hard"},
  {"id":178,"word":"風林火山","reading":"ふうりんかざん","meaning":"戦いの際の機動力や攻撃性を表す言葉","example":"風林火山の戦術で勝利した","level":"hard"},
  {"id":179,"word":"馬耳東風","reading":"ばじとうふう","meaning":"人の意見を全く気に留めないこと","example":"注意しても馬耳東風だった","level":"hard"},
  {"id":180,"word":"渾然一体","reading":"こんぜんいったい","meaning":"すべてが混ざり合って一つになること","example":"作品が渾然一体となっている","level":"hard"},
  {"id":181,"word":"因果応報","reading":"いんがおうほう","meaning":"行いには必ず結果があること","example":"因果応報の教えを守る","level":"hard"},
  {"id":182,"word":"風光明媚","reading":"ふうこうめいび","meaning":"景色が美しいこと","example":"風光明媚な場所を旅する","level":"hard"},
  {"id":183,"word":"先手必勝","reading":"せんてひっしょう","meaning":"先に行動すれば勝つこと","example":"先手必勝の戦略を立てる","level":"hard"},
  {"id":184,"word":"不撓不屈","reading":"ふとうふくつ","meaning":"どんな困難にも屈しないこと","example":"不撓不屈で挑戦を続ける","level":"hard"},
  {"id":185,"word":"大智若愚","reading":"だいちじゃくぐ","meaning":"大きな知恵を持つ人は愚かに見えること","example":"大智若愚な人は慎重だ","level":"hard"},
  {"id":186,"word":"鳴かぬなら鳴くまで待とう","reading":"なかぬならなくまでまとう","meaning":"物事を焦らず待つこと","example":"鳴かぬなら鳴くまで待とうの精神で臨む","level":"hard"},
  {"id":187,"word":"因循姑息","reading":"いんじゅんこそく","meaning":"場当たり的で決断力がないこと","example":"因循姑息な態度を改める","level":"hard"},
  {"id":188,"word":"勇猛果敢","reading":"ゆうもうかかん","meaning":"勇ましく決断力があること","example":"勇猛果敢に挑む","level":"hard"},
  {"id":189,"word":"百戦百勝","reading":"ひゃくせんひゃくしょう","meaning":"戦いにおいて常に勝つこと","example":"百戦百勝の名将","level":"hard"},
  {"id":190,"word":"一刀両断","reading":"いっとうりょうだん","meaning":"物事を明快に決断すること","example":"問題を一刀両断に解決する","level":"hard"},
  {"id":191,"word":"以毒攻毒","reading":"いどくこうどく","meaning":"毒には毒で対抗すること","example":"以毒攻毒の戦略を取る","level":"hard"},
  {"id":192,"word":"孤軍奮闘","reading":"こぐんふんとう","meaning":"孤立して懸命に戦うこと","example":"孤軍奮闘の努力が実った","level":"hard"},
  {"id":193,"word":"百尺竿頭","reading":"ひゃくしゃくかんとう","meaning":"最上の段階に達したこと","example":"百尺竿頭の境地に立つ","level":"hard"},
  {"id":194,"word":"光陰矢の如し","reading":"こういんやのごとし","meaning":"月日が非常に早く過ぎること","example":"光陰矢の如しで一年が過ぎた","level":"hard"},
  {"id":195,"word":"金科玉条","reading":"きんかぎょくじょう","meaning":"絶対に守るべき規則や法則","example":"金科玉条のルールを守る","level":"hard"},
  {"id":196,"word":"臨機応変","reading":"りんきおうへん","meaning":"状況に応じて適切に行動すること","example":"臨機応変に対応する","level":"hard"},
  {"id":197,"word":"七転八起","reading":"しちてんはっき","meaning":"何度失敗しても立ち上がること","example":"七転八起の精神で挑む","level":"hard"},
  {"id":198,"word":"大器晩成","reading":"たいきばんせい","meaning":"大人物は時間をかけて成長すること","example":"大器晩成の人物が成功した","level":"hard"},
  {"id":199,"word":"独立独歩","reading":"どくりつどっぽ","meaning":"他に頼らず自分の力で進むこと","example":"独立独歩で生きる","level":"hard"},
  {"id":200,"word":"泰然自若","reading":"たいぜんじじゃく","meaning":"落ち着いて動じないこと","example":"泰然自若の態度で対処する","level":"hard"},
];

// --------------------------
// 以下、以前の完成版 app.js と同じロジック
// --------------------------
let filteredData = [];
let currentQuestion = 0;
let score = 0;
let mode = 'meaning';
let level = 'all';
let historyData = [];
let scoreChart;

setLevel('all');

function setMode(newMode) {
  mode = newMode;
  currentQuestion = 0;
  score = 0;
  historyData = [];
  document.getElementById('historyList').innerHTML = '';
  showQuestion();
  updateStatus();
}

function setLevel(newLevel) {
  level = newLevel;
  currentQuestion = 0;
  score = 0;
  historyData = [];
  document.getElementById('historyList').innerHTML = '';

  if(level === 'all') {
    filteredData = [...quizData];
  } else {
    filteredData = quizData.filter(item => item.level === level);
  }

  shuffleArray(filteredData);
  showQuestion();
  updateStatus();
}

function showQuestion() {
  const q = filteredData[currentQuestion];
  const questionDiv = document.getElementById('question');
  const choicesDiv = document.getElementById('choices');
  const resultDiv = document.getElementById('result');

  if(!q){
    questionDiv.textContent = "問題がありません";
    choicesDiv.innerHTML = '';
    return;
  }

  choicesDiv.innerHTML = '';
  resultDiv.textContent = '';

  let choices = [];
  if(mode === 'meaning'){
    questionDiv.textContent = `次の意味に合う四字熟語はどれ？\n「${q.meaning}」`;
    choices.push(q.word);
    while(choices.length < 4){
      const randomWord = filteredData[Math.floor(Math.random() * filteredData.length)].word;
      if(!choices.includes(randomWord)) choices.push(randomWord);
    }
  } else {
    questionDiv.textContent = `次の四字熟語の意味はどれ？\n「${q.word}」`;
    choices.push(q.meaning);
    while(choices.length < 4){
      const randomMeaning = filteredData[Math.floor(Math.random() * filteredData.length)].meaning;
      if(!choices.includes(randomMeaning)) choices.push(randomMeaning);
    }
  }

  shuffleArray(choices);

  choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.textContent = choice;
    btn.onclick = () => handleAnswer(btn, q);
    choicesDiv.appendChild(btn);
  });
}

function handleAnswer(btn, q){
  const choicesDiv = document.getElementById('choices');
  const resultDiv = document.getElementById('result');
  const correctAnswer = mode==='meaning'?q.word:q.meaning;
  const isCorrect = btn.textContent === correctAnswer;

  if(isCorrect){
    btn.classList.add('correct');
    score++;
    resultDiv.textContent = '正解！';
  } else {
    btn.classList.add('wrong');
    resultDiv.textContent = `不正解… 正解は「${correctAnswer}」`;
    Array.from(choicesDiv.children).forEach(b => {
      if(b.textContent === correctAnswer) b.classList.add('correct');
    });
  }

  recordHistory(isCorrect);
  updateStatus();

  setTimeout(() => {
    currentQuestion++;
    if(currentQuestion >= filteredData.length){
      alert(`終了！正解数: ${score} / ${filteredData.length}`);
      currentQuestion = 0;
      score = 0;
      historyData = [];
      document.getElementById('historyList').innerHTML = '';
      shuffleArray(filteredData);
    }
    showQuestion();
  }, 2000);
}

function recordHistory(correct){
  historyData.push({ question: currentQuestion + 1, correct: correct });

  const historyList = document.getElementById('historyList');
  const li = document.createElement('li');
  li.textContent = `問題${currentQuestion+1}: ${correct ? '正解' : '不正解'}`;
  historyList.appendChild(li);

  updateChart();
}

function updateChart(){
  const labels = historyData.map((_, i) => i+1);
  const data = historyData.map(h => h.correct ? 1 : 0);

  if(!scoreChart){
    const ctx = document.getElementById('scoreChart').getContext('2d');
    scoreChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: '正解=1, 不正解=0',
          data: data,
          borderColor: 'blue',
          backgroundColor: 'rgba(0,0,255,0.1)',
          tension: 0.3,
          fill: true,
        }]
      },
      options: {
        scales: {
          y: {
            min: 0,
            max: 1,
            ticks: { stepSize: 1, callback: v => v ? '正解' : '不正解' }
          }
        }
      }
    });
  } else {
    scoreChart.data.labels = labels;
    scoreChart.data.datasets[0].data = data;
    scoreChart.update();
  }
}

function updateStatus(){
  document.getElementById('score').textContent = `正解: ${score}`;
  document.getElementById('questionNumber').textContent = `問題: ${currentQuestion+1} / ${filteredData.length}`;
}

function shuffleArray(array){
  for(let i=array.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

