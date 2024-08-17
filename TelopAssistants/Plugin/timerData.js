
// GMT変換
let gmtTime=0;
if (document.documentElement.lang === "en") {
    gmtTime=1;
} else if (document.documentElement.lang === "ja") {
    gmtTime=9;
}
let logFlg;

/** ゲームリスト */
const nextGameGetListButton = document.getElementById('next-game-get-list');


/** 全体タイマー */
const allTime           = document.getElementById('all-time');
const allStartButton    = document.getElementById('all-start');
const allStopButton     = document.getElementById('all-stop');
const allResetButton    = document.getElementById('all-reset');
const outputLogText  = document.getElementById('output-log-text');
let currentTime;
let allStartTime=null;
let allStopTime = 0;
let allTimeoutID;
const set_direct_source_name_allTime   = document.getElementById('all-time-obs-source');
let allTime_timeWorkingFlg=false;//タイマー動作フラグ true：動作中 false：停止

/** 走者1 */
const time1             = document.getElementById('one-time');
const restartButton1    = document.getElementById('one-restart');
const stopButton1      = document.getElementById('one-stop');
let time1StartTime;
let time1StopTime = 0;
let time1TimeoutID;
const set_direct_source_name_1   = document.getElementById('one-time-obs-source');
let time1_timeWorkingFlg=false;//タイマー動作フラグ true：動作中 false：停止

// 走者2
const time2             = document.getElementById('two-time');
const restartButton2    = document.getElementById('two-time-restart');
const stopButton2       = document.getElementById('two-time-stop');
let time2StartTime;
let time2StopTime = 0;
let time2TimeoutID;
const set_direct_source_name_2   = document.getElementById('two-time-obs-source');
let time2_timeWorkingFlg=false;//タイマー動作フラグ true：動作中 false：停止


// 走者3
const time3             = document.getElementById('three-time');
const restartButton3    = document.getElementById('three-time-restart');
const stopButton3       = document.getElementById('three-time-stop');
let time3StartTime;
let time3StopTime = 0;
let time3TimeoutID;
const set_direct_source_name_3   = document.getElementById('three-time-obs-source');
let time3_timeWorkingFlg=false;//タイマー動作フラグ true：動作中 false：停止
