// 時間を表示する関数
async function time3displayTime() {
    const h = String(currentTime.getHours()-gmtTime).padStart(2, '0');
    const m = String(currentTime.getMinutes()).padStart(2, '0');
    const s = String(currentTime.getSeconds()).padStart(2, '0');
    const ms = String(currentTime.getMilliseconds()).padStart(3, '0');
    time3.textContent = `${h}:${m}:${s}`;
    time3TimeoutID = setTimeout(time3displayTime, 10);

    let requestData={
        enable : true
        ,sourceName : set_direct_source_name_3.value
        ,visible : true
        ,text : `${h}:${m}:${s}`
    };
    const query = new URLSearchParams(requestData);
    const res = await fetchData(`set_direct?${query}` ,requestData);
}

// タイマー再開がクリックされたら時間を進める
restartButton3.addEventListener('click', () => {
    start3()
});

function start3(){
    time3displayTime();
    time3_timeWorkingFlg=true;
    if(!allTime_timeWorkingFlg){
        allDisplayTime();
        allTime_timeWorkingFlg=true;
    }
    startStopStyle();
}

// ストップボタンがクリックされたら時間を止める
stopButton3.addEventListener('click', function() {
    stop3()
});

function stop3(){
    clearTimeout(time3TimeoutID);
    time3_timeWorkingFlg=false;
    if(allTime_timeWorkingFlg && !time1_timeWorkingFlg && !time2_timeWorkingFlg && !time3_timeWorkingFlg){
        allStop()
    }
    startStopStyle();
}

set_direct_source_name_3.addEventListener('change', async () =>{
    let requestData=null;
    const query = new URLSearchParams(requestData);
    const res = await fetchData(`check_source` ,requestData);
}
)
