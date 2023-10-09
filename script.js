let leftRunning = false;
let rightRunning = false;
let leftTime = 150.0;
let rightTime = 150.0;

const tasks = [
    "按下快門：自拍一張。",
	"環顧四周：拍下一張全景相片。",
	"處處碰壁：觸摸一堵牆。",
	"一線希望：不用鉛筆或原子筆，畫出一條直線。",
	"握手言和：與另一個人（除你的對手外）握手。",
	"觸手可及：與另一個人（除你的對手外）擊掌。",
	"虎視眈眈：找一個比你大三歲或小三歲的人，再盯著他三秒鐘。",
	"一擲千金：擲一枚硬幣。",
	"自作自受：打電話給自己，並留下一則具威脅性的留言。",
	"目不轉睛：等待你對手眨眼，再按下空白鍵。",
	"君在何處：讀出你所在的GPS座標。",
	"如履平地：開啟手機上「測距儀」應用程式中的「水平儀」，再把手機平衡在兩隻手指上，直到螢幕連續三秒顯示綠色為止。",
	"展望將來：開啟手機上的「日曆」應用程式，並按下十年後的今天。",
	"東西不分：開啟手機上的「指南針」應用程式，並把手機指向「123°東南」。",
	"永不放棄：播放《Never Gonna Give You Up》。",
	"突發消息：找出一篇今天發布的新聞報道，並讀出這篇報道的標題。",
	"來者何人：敲一道門。",
	"東窗事發：觸摸一扇窗戶。",
	"再也不見：從「最近刪除」相簿中選取一張相片，並永久刪除那張照片。",
	"一網掃盡：掃描一個QR code。",
	"倒背如流：從Z開始，以A結尾，倒序地背出26個英文字母。",
	"錯漏百出：依次序讓計數機顯示MathError、StackError及SyntaxError。",
	"機關用盡：關閉一部裝置。 你不得關閉此裝置。",
	"別開生面：開啟一部裝置。",
	"待人接物：讓別人（除你及你的對手外）按下空白鍵。",
	"十項全能：把十項不同的東西（除紙張外）放在桌子上。",
	"天下三分：把某物分成三個不同的部分，然後重新組裝。",
	"年長年少：觸碰一個與你年齡不同的人（除你的對手外）。",
	"大敗虧輸：輸掉一場「剪刀石頭布」遊戲。",
	"滾滾而來：讓某物連續滾動至少五秒鐘。",
	"七平八穩：用兩根手指握住一把15cm尺子的一端，並把鉛筆放在尺子的另一端。傾斜尺子，直到鉛筆位於6cm和8cm的標記之間。",
	"心中有數：讓計算機顯示結果「1234」。你不得使用1、2、3、4這四個按鈕。",
	"身手敏捷：從手背拋起三支鉛筆，，然後用同一隻手在半空中抓住全部三支鉛筆。",
	"坦誠相見：對你的對手作出具建設性的批評。",
	"穩穩當當：用一根手指平衡一個文具。文具必須保持靜止至少5秒。",
	"國際交流：用三種不同語言（除中英文外）向三個不同的人打招呼。",
	"天旋地轉：旋轉某物或某人（除自己外）。旋轉必須包含至少720°。",
	"玉軟花柔：觸摸一件柔軟的物體。",
	"鈴聲響起：給別人（除你及你的對手外）打電話，並在他接電話之前掛斷電話。",
	"盲目行動：完全閉上眼睛7秒鐘。您必須睜開眼睛後先確認已閉上眼睛7秒，才能按下空白鍵。",
	"條條大路通羅馬：開啟手機上的「地圖」（或Google Maps）應用程式，並找出一條從羅馬外通至羅馬內的道路。",
	"拍照留念：截圖。你不得在此裝置上截取螢幕截圖。",
	"誠意推介：在不使用「無痕模式」的前提下開啟YouTube，並讀出第一則出現的影片（除廣告外）的標題。",
	"天籟之音：運用Google Tuner，唱出一個Middle C (C4)。",
	"大獲全勝：在Google上搜尋「Tic Tac Toe」，並贏一場遊戲。",
	"網開一面：開啟YouTube的網頁版。",
	"百感交集：透過WhatsApp，向對手發送一個短信，當中按順序包含「最近使用」的Emoji。",
	"開卷有益：翻到書上的任何一頁，把書倒過來，然後從該頁讀出一句完整的句子。",
	"結結實實：打結，再解開結。",
	"知足常樂：拍下一張有五隻腳的照片。",
	"做個好夢：跟另一個人（除你的對手外）說晚安。",
	"手舞足蹈：依序觸摸你的頭、肩膀、膝蓋和腳趾。",
	"昏昏欲睡：打哈欠四次。",
	"人聲鼎沸：運用網上的分貝計，把你的噪音水平增加至125分貝以上。",
	"鴉雀無聲：運用網上的分貝計，把你的噪音水平降低至70分貝以下。",
	"横行直走：完全筆直地步行。您的步行必須包含至少7步，且一步比一步長。",
    "十五十六：開啟手機上的「測距儀」應用程式，並證明15cm尺子的長度的確是15cm。",
    "連綿不斷：開啟手機上的「測距儀」應用程式，並量度出六米的距離。",
    // Handicaps:
	"永恆之光：開啟手機的電筒功能。在遊戲結束前，你不得關掉此功能。",
	"指日可待：把你其中一隻拇指和其中一隻尾指貼在一起。兩隻手指不得在遊戲結束前分開。",
	"後會有期：把某物件放在至少5米外的地方。在遊戲結束前，你不得取回該物件。",
	"左右為難：把左手放入右側口袋，或把右手放入左側口袋。在遊戲結束前，手不能離開口袋。",
 ];

const skipPenalty = 30;

let bag = [];

setInterval(updateTimers, 10)

document.addEventListener('keydown', (event) => {
  if (event.key == ' ') {
      spacebar();
  }
}, false);

document.getElementById("skip1").addEventListener("click", skip1);
document.getElementById("skip2").addEventListener("click", skip2);


function updateTimers() {
    if (leftTime >= 0 && rightTime >= 0) {
        let places;
        
        if (leftRunning) {
            leftTime -= 0.01;
        } else if (rightRunning) {
            rightTime -= 0.01;
        }
        
        places = (leftTime < 10) ? 2 : 1;
        
        document.getElementById("player1_timerText").innerHTML = (Math.max(Math.round(leftTime * 10 ** places) / 10 ** places, 0.00)).toFixed(places);
        
        places = (rightTime < 10) ? 2 : 1;
        
        document.getElementById("player2_timerText").innerHTML = (Math.max(Math.round(rightTime * 10 ** places) / 10 ** places, 0.00)).toFixed(places);
    } else {
        leftTime = 0;
        rightTime = 0;
        leftRunning = false;
        rightRunning = false;
    }
    
}

function spacebar() {
    if (!leftRunning && !rightRunning) {
        leftRunning = true;
    } else if (leftRunning || rightRunning) {
        leftRunning = !leftRunning;
        rightRunning = !rightRunning;
    }
    if (leftRunning || rightRunning) {
        document.getElementById("task").innerHTML = getTask();
    }
}

function random_item(items) {
    return items[Math.floor(Math.random()*items.length)];
}

function getTask() {
    let result = "";
    let index;
    
    let i = 0;
    
    if (bag.length == 0) {
        bag = tasks.slice();
    }
        
    while (i < bag.length) {
        let matches = /[0-9] second/.exec(bag[i]);
        if (matches != null) {
            if (matches[0][0] > (leftRunning ? leftTime : rightTime)) {
                bag.splice(i, 1);
            }
        }

        i++;
    }
        
    result = random_item(bag);
    index = bag.indexOf(result);
    if (index > -1) {
        bag.splice(index, 1);
    }
    
    return result;
}

function skip1() {
    if (leftRunning) {
        spacebar();

        leftTime = Math.max(0, leftTime - skipPenalty);
        
        if (leftTime == 0) {
            leftRunning = false;
            rightRunning = false;
        }
    }
}

function skip2() {
    if (rightRunning) {
        spacebar();
        rightTime = Math.max(0, rightTime - skipPenalty);
        
        if (rightTime == 0) {
            leftRunning = false;
            rightRunning = false;
        }
    }
}