/*****
DONE: Add author to the tweet
TODO: Fix the 140 character tweet limit
TODO: Random number/quote on click shouldn't sometimes be the same as the previous one, making the quote form look unresponsive/broken
TODO: Rotating phone from landscape to portrait causes height issues
TODO: Give users the ability to add quotes and/or upvote or rate their favorite quotes -- could be abused though.
TODO: More quotes!
TODO: Add more cyberpunk-y effects and animations
*****/

$(document).ready(function() {
    var quoteList = [
      {author: "星河里的鱼骨",  quote: "2018年12月6日 大雨 夜雨转晴 <br><br>不知是第几次 男孩抬头望向月亮 月光依旧皎洁。月亮啊月亮 独自一人你也会感到寂寞吗 还是说有群星相伴 你始终都无法理解诗人们有关孤独的遣词造句。<br>男孩找了块没水的楼梯坐了下来。<br>“喵～” 一只小猫踱步到男孩脚边 用头蹭了蹭男孩的裤脚。<br>男孩娴熟地摸了摸小猫的脑袋。<br>“你呢？你也是独单一人吗” <br>像是听到了男孩的疑问 路旁的草丛里钻出了另一只花色相近的小猫 盯着男孩 慵懒地叫了两声。<br>仿佛听出了猫叫声里的揶揄 男孩独自笑了笑 站起身来 拍了拍屁股上的灰。<br>熟悉的下课铃又响了起来 男孩最后一遍检查了自己的服装 向教学楼走去。<br><br>“你今天晚上吃了什么”<br>“…嗯”<br>“问你话呢”<br>“嗯…哦 没吃什么”<br>“有必要这么魂不守舍吗 也就临门一脚的事”<br>“…”<br>“欸 你还没和我说过为什么喜欢他呢”<br>“…嗯 我也不知道从什么时候开始 切到的一首歌 一句歌词 一段楼梯 一个背影 和无数个闭上眼的瞬间 都与他有关”<br>“咦~真肉麻”<br>熟悉的下课铃又响了起来 女孩合上书本 最后梳了一遍如墨般乌黑的长发 扭头看向了窗外。<br>月亮啊月亮 他现在在做什么呢 他也在思念着我吗 他是否也感受到我的心意。<br>女孩关掉最后一盏灯 锁好了门 朝楼梯走去。<br><br>男孩站在雨中 手中的雨伞在大风中形同虚设 淋湿的刘海让男孩显得有点狼狈 却又透露着一种孤胆英雄的凄美。<br>女孩走到倒数第二阶台阶停了下来。<br>“我的公主殿下 可否邀您共赏这雨中夜景片刻”<br>“当然可以 我的王子殿下”<br>男孩打起伞 撑在两人中间 向着雨海深处走去。<br><br>天地间静得只剩下雨声 伴随着两颗心脏微弱起伏的跳动 像是在演奏某种年代久远的交响曲。<br>雨滴毫无顾忌地砸向伞面 哒哒 哒哒 像是一位位眼神坚毅的工匠 挥舞着手中的小锤 一遍 又一遍敲击着男孩的心脏 直至小锤的最后一次下落 工匠们满意地看着眼前的作品 男孩也在此刻停下了脚步。<br>看着回过头的女孩 男孩深吸了一口气。<br>“我…有些话想对你说”<br>“嗯 我在听”<br>“我…我喜欢你很久了 如果可以的话 你愿意和我交往吗”<br>男孩弯下腰 伸出的右手微微颤抖 不知是否是因为这初冬的雨太过凛冽。<br>今天的风很大 把女孩的裙摆吹向男孩 好像风儿也在劝说她答应。<br>女孩轻轻握住了男孩的手。<br>“我愿意”<br>话没说完 女孩就被男孩搂进怀里 她听见了男孩的心跳声 热烈 赤诚 毫不掩饰。<br>男孩也听见了女孩的心跳声 很慢很柔 但每一拍都跳的很坚定。<br>"},
    ];
    
    function quoteGenerate() {  
      var quoteRandomize = Math.floor(Math.random() * quoteList.length);
      var quoteMain = quoteList[quoteRandomize].quote;
      var quoteAuthor = quoteList[quoteRandomize].author;
      
      $("#quote").html(quoteMain);
      $("#author").text(quoteAuthor);
    };
    
    quoteGenerate();
  });