// 時間を表示する関数
async function time2displayTime() {
    const h = String(currentTime.getHours()-gmtTime).padStart(2, '0');
    const m = String(currentTime.getMinutes()).padStart(2, '0');
    const s = String(currentTime.getSeconds()).padStart(2, '0');
    const ms = String(currentTime.getMilliseconds()).padStart(3, '0');
    time2.textContent = `${h}:${m}:${s}`;
    time2TimeoutID = setTimeout(time2displayTime, 10);

    let requestData={
        enable : true
        ,sourceName : set_direct_source_name_2.value
        ,visible : true
        ,text : `${h}:${m}:${s}`
    };
    const query = new URLSearchParams(requestData);
    const res = await fetchData(`set_direct?${query}` ,requestData);
}

// タイマー再開がクリックされたら時間を進める
restartButton2.addEventListener('click', () => {
    start2()
});

function start2(){
    time2displayTime();
    time2_timeWorkingFlg=true;
    if(!allTime_timeWorkingFlg ){
        allDisplayTime();
        allTime_timeWorkingFlg=true;
    }
    startStopStyle();
}

// ストップボタンがクリックされたら時間を止める
stopButton2.addEventListener('click', function() {
    stop2()
});

function stop2(){
    clearTimeout(time2TimeoutID);
    time2_timeWorkingFlg=false;
    if(allTime_timeWorkingFlg && !time1_timeWorkingFlg && !time2_timeWorkingFlg && !time3_timeWorkingFlg){
        allStop()
    }
    startStopStyle();
}

set_direct_source_name_2.addEventListener('change', async () =>{
    let requestData=null;
    const query = new URLSearchParams(requestData);
    const res = await fetchData(`check_source` ,requestData);
}
)
