// 時間を表示する関数
async function time1displayTime() {
    const h = String(currentTime.getHours()-gmtTime).padStart(2, '0');
    const m = String(currentTime.getMinutes()).padStart(2, '0');
    const s = String(currentTime.getSeconds()).padStart(2, '0');
    const ms = String(currentTime.getMilliseconds()).padStart(3, '0');
    time1.textContent = `${h}:${m}:${s}`;
    time1TimeoutID = setTimeout(time1displayTime, 10);

    let requestData={
        enable : true
        ,sourceName : set_direct_source_name_1.value
        ,visible : true
        ,text : `${h}:${m}:${s}`
    };
    const query = new URLSearchParams(requestData);
    const res = await fetchData(`set_direct?${query}` ,requestData);
}

// タイマー再開がクリックされたら時間を進める
restartButton1.addEventListener('click', () => {
    start1()
});

function start1(){
    time1displayTime();
    time1_timeWorkingFlg=true;
    if(!allTime_timeWorkingFlg){
        allDisplayTime();
        allTime_timeWorkingFlg=true;
    }
    startStopStyle();
}

// ストップボタンがクリックされたら時間を止める
stopButton1.addEventListener('click', function() {
    stop1()
});

function stop1(){
    clearTimeout(time1TimeoutID);
    time1_timeWorkingFlg=false;
    if(allTime_timeWorkingFlg && !time1_timeWorkingFlg && !time2_timeWorkingFlg && !time3_timeWorkingFlg){
        allStop()
    }
    startStopStyle();
}


set_direct_source_name_1.addEventListener('change', async () =>{
    let requestData=null;
    const query = new URLSearchParams(requestData);
    const res = await fetchData(`check_source` ,requestData);
}
)
