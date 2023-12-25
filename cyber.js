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
      {author: "快去写论文qaq",  quote: "心情分享<br><br>直播间的大家周五好！继上周的电台过后，我自己思考了一些，因为发现其实很多直播间的朋友似乎也有类似的问题，就想写一点点东西跟大家分享。<br><br>在思考很多之后发现，我们在学生时代的焦虑很大程度上来源于三个方面：目标不清晰、信息闭塞和自我封闭的负循环（也就是内耗）。我自己属于第三种，在不愿放手大胆去做与忧虑结果的矛盾中焦虑，如果不适时跳出这种惰性的循环，结果必定是不尽人意的。<br><br>我之前大部分时间的状态很差，就是不愿意去做！拿英语考试为例，解决词汇量就完成了考试准备的一大部分，但我主观觉得gre的单词难且多（完全掌握的话词汇量大概在2w左右），怕失败所以自己放弃去做，一味的拖延。内心找各种各样荒唐的理由去逃避背单词，白天跟朋友去东四喝咖啡逛公园，所有娱乐都体验一遍，到了晚上开始良心自责——我还有几千个单词没有背，今天浪费了一整天，然后到了第二天继续循环。娱乐放松是需要的，但不是作为逃避hard work的途径。<br><br>到后来我逐渐意识到了一个，简单的道理——一件事儿越难做才越有价值。四六级托福雅思是因为他们考高分很难，所以分数本身才有认可度。对应的，越难完成的考试，成绩的认可度也就越高。很多事物都遵从这个道理，几乎不存在可以简单获得但又precious的技能和物品。不去吃苦，不去动笔学，很大可能是没办法成功的。我的心态随着这个认知也在不断地改变：我开始定一天的学习目标（最开始肯定没办法完全执行，需要与自己的行动力不断适应），开始早睡早起，开始解决之前逃避不愿面对的问题。<br><br>当下的行动，在不断地缓解着我的焦虑。<br>除此之外，跟家人的聊天也是一个很好的booster。<br><br>高考在我心中一直是一个坎，之前十五次的模考，最差的情况也是可以考上人大的，但最后实战发挥失常，去了现在的学校。（也不是说不好，只是觉得和之前的实力没有那么匹配而已）辜负了家人的期望成为了我的“心魔”，大学前几年一直在打击中让自己恢复，但是研究生申请再一次成为了我的执念——我想要申请一所含金量高的学校证明自己。但在有次聊天的时候，我妈妈说，我已经很棒很棒了，高考时候打败了陕西省三十多万的考生，在整个省排前七百名。妈妈只希望我在今后的日子里身体健康，幸福快乐。出国也是觉得我可以达到更高的平台，于是他们支持。在聊天之后，我释然了很多，心境也似乎没那么沉闷了。<br><br>写这些我的心理历程，不仅是分享，也是为了给同样跟我一样迷茫的直播间朋友们提供一个，稍微可以参考的例子（？<br><br>略微摆脱焦虑之后，其实生活美好了很多，也简单了很多：定目标，立小项目标，放手去做就好！<br><br>在最后，给大家浅浅分享一下沙河的scenery.（最近寒潮来袭，电台的朋友们注意身体健康，多多多多加衣）"},
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