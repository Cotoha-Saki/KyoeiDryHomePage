let Time1Main = [`本店\n`];
let TimeAM10_PM19 = [`鴻巣東店　` + `鴻巣西口店　` + `ビチューズ店　\n` + `北鴻巣店　` + `人形町店　` + `北鴻巣西口店　\n` + `日進店　` + `与野店　` + `上尾東口店　\n` + `中妻店　` + `春日部店　` + `桶川朝日店　\n` + `北本店　` + `鷲宮中央店　` + `新座店　\n` + `幸手店　` + `新白岡店　`];
let TimePM14 = [`北鴻巣西口店`];
let TimeAM930 = [`おおしま店`];
let TimeAM10_PM1830 = [`美女木店　` + `みどり台店　` + `吉野町店　\n`];
let TimeAM8_PM1830 = [`熊谷上之店　\n`];
let TimeAM8_PM20 = [`久下店　`];
let hour = null; // 空の変数を宣言
let min = null; // 空の変数を宣言
let day = null;
let day2 = null;
let Mon = [`北鴻巣西口店`, `幸手店`, `みどりの台店`, `久下店`];
let Tue = [];
let Wed = [`北鴻巣西口店`, `おおしま点`, `上尾東口店`, `熊谷上之店`];
let Thu = [`本店`, `鴻巣東口店`, `鴻巣西口店`, `ビチューズ店`, `北鴻巣店`, `人形町店`, `北鴻巣西口店`, `日進店`, `与野店`, `与野店`, `中妻店`, `春日部店`, `桶川朝日店`, `北本店`, `美女木店`, `鷲宮中央店`, '新座店', `新白岡店`];
let Fri = [];
let Sat = [];
let Sun = [`本店`, `熊谷上之店`];


today = new Date(); // today変数にnew Dateオブジェクトを代入
hour = today.getHours(); // todayから時刻を取り出してhour変数に代入
min = today.getMinutes();  // todayから時刻を取り出してmin変数に代入
day = today.setDate(4);
// 営業中の店舗
if (9 <= hour && hour < 23) {
    if (9 <= hour && hour < 23) {
    
    } else {
        console.log(8436592863492836492693465298465) 
    }
    setTimeout(() => {
        document.getElementById('BusinessHours1').innerText = `現在営業中の店舗`;
        console.log(`営業時間を更新しました`);
    }, new Date().setHours(9, 0, 0, 0) - new Date());
    setTimeout(() => {
        document.getElementById('BusinessHours2').innerText = `${Time1Main}`;
        console.log(`営業時間を更新しました`);
    }, new Date().setHours(9, 0, 0, 0) - new Date());
    setTimeout(() => {
        document.getElementById('BusinessHours2').innerText = `${Time1Main + TimeAM930}`;
        console.log(`営業時間を更新しました`);
    }, new Date().setHours(9, 30, 0, 0) - new Date());
    setTimeout(() => {
        document.getElementById('BusinessHours2').innerText = `${TimeAM10_PM1830 + TimeAM10_PM19 + TimeAM8_PM1830 + TimeAM8_PM20 + Time1Main}`;
        console.log(`営業時間を更新しました`);
    }, new Date().setHours(10, 0, 0, 0) - new Date());
    setTimeout(() => {
        document.getElementById('BusinessHours2').innerText = `${TimeAM10_PM1830 + TimeAM10_PM19 + TimeAM8_PM1830}`;
        console.log(`営業時間を更新しました`);
    }, new Date().setHours(21, 40, 5, 0) - new Date());
    /* setTimeout(() => {
        document.getElementById('BusinessHours1').innerText = `全店舗の営業が終了しました`;
        console.log(`営業時間を新しました`);
    }, new Date().setHours(21, 40, 10, 0) - new Date());
    setTimeout(() => {
        document.getElementById('BusinessHours2').innerText = ``;
        console.log(`営業時間を更新しました`);
    }, new Date().setHours(20, 0, 15, 0) - new Date()); */
}

function BusinessHours() {
    setTimeout(() => {
        document.getElementById('BusinessHours1').innerText = `現在営業中の店舗`;
        console.log(`営業時間を更新しました`);
    }, new Date().setHours(9, 0, 0, 0) - new Date());
    setTimeout(() => {
        document.getElementById('BusinessHours2').innerText = `${Time1Main}`;
        console.log(`営業時間を更新しました`);
    }, new Date().setHours(9, 0, 0, 0) - new Date());
    setTimeout(() => {
        document.getElementById('BusinessHours2').innerText = `${TimeAM10_PM1830 + TimeAM10_PM19 + TimeAM8_PM1830 + TimeAM8_PM20 + Time1Main}`;
        console.log(`営業時間を更新しました`);
    }, new Date().setHours(10, 0, 0, 0) - new Date());
    setTimeout(() => {
        document.getElementById('BusinessHours1-3').innerText = `${TimeAM10_PM1830 + TimeAM10_PM19 + TimeAM8_PM1830}`
        console.log(`営業時間を更新しxfhtdzrghzhdました`);
    }, new Date().setHours(21, 40, 5, 0) - new Date());
    setTimeout(() => {
        document.getElementById('BusinessHours1').innerText = `全店舗の営業が終了しました`;
        console.log(`営業時間を新しました`);
    }, new Date().setHours(20, 0, 0, 0) - new Date());
    setTimeout(() => {
        document.getElementById('BusinessHours1-3').innerText = ``
        console.log(`営業時間を更新しました`);
    }, new Date().setHours(20, 0, 0, 0) - new Date());
}



if (9 <= hour && hour < 18) {
    // 営業終了時間30分前から10分ごとにお知らせ
    setTimeout(() => {
        document.getElementById('RemainingBusinessHours').innerText = `以下の店舗は残り30分で営業が終了します`;
        console.log(`残りの営業時間を更新しました`);
        document.getElementById(`RemainingBusinessHours2`).innerText = `${Time1Main}`
    }, new Date().setHours(17, 30, 0, 0) - new Date());

    setTimeout(() => {
        document.getElementById(`RemainingBusinessHours`).innerText = `以下の店舗は残り20分で営業が終了します`;
        console.log(`残りの営業時間を更新しました`);
    }, new Date().setHours(17, 40, 0, 0) - new Date());
    setTimeout(() => {
        document.getElementById('RemainingBusinessHours').innerText = `以下の店舗は残り10分で営業が終了します`;
        console.log(`残りの営業時間を更新しました`);
    }, new Date().setHours(17, 50, 0, 0) - new Date());
    setTimeout(() => {
        document.getElementById('RemainingBusinessHours').innerText = ``;
        document.getElementById('RemainingBusinessHours2').innerText = ``;
        console.log(`残りの営業時間を更新しました`);
    }, new Date().setHours(18, 0, 0, 0) - new Date());
}

if (new Date().getDate(4) !== new Date().getDate()) {
    setTimeout(() => {
        console.log(Thu);
    }, new Date().setHours(22, 0, 0, 0) - new Date());
} else {
    document.getElementById('BusinessHours2').innerText = `${Time1Main}`;
    document.getElementById('BusinessHours2').innerText = `d`;
    console.log(`営業時間を更新sahdfliuhabwuebskiubkufblaksuebfしました`);
}


if (new Date().setFullYear(2024) === new Date().setFullYear(2024)) {
    document.getElementById('RegularHoliday').innerText = `定休日一覧（9月13日時点）\n ${TimeAM8_PM20}は第3日曜日が定休日になります。`;
} else {
    console.log(123456789)
}
//定休日
setTimeout(() => {

}, new Date().setFullYear(2023) - new Date());