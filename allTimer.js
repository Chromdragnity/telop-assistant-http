
// 時間を表示する関数
async function allDisplayTime() {
    currentTime = new Date(Date.now() - allStartTime + allStopTime);
    const h = String(currentTime.getHours()-gmtTime).padStart(2, '0');
    const m = String(currentTime.getMinutes()).padStart(2, '0');
    const s = String(currentTime.getSeconds()).padStart(2, '0');
    const ms = String(currentTime.getMilliseconds()).padStart(3, '0');
    allTime.textContent = `${h}:${m}:${s}`;
    allTimeoutID = setTimeout(allDisplayTime, 10);
    let requestData={
        enable : true
        ,sourceName : set_direct_source_name_allTime.value
        ,visible : true
        ,text : `${h}:${m}:${s}`
    };
    const query = new URLSearchParams(requestData);
    const res = await fetchData(`set_direct?${query}` ,requestData);
    // console.log(`allDisplayTime()allTimeoutID:${allTimeoutID}`)
}

// スタートボタンがクリックされたら時間を進める
allStartButton.addEventListener('click', () => {
    allStart()
});

function allStart(){
    allStartTime = Date.now();
    allDisplayTime();
    allTime_timeWorkingFlg=true;
    if(!time1_timeWorkingFlg){
        start1();
        time1_timeWorkingFlg=true;
    }
    if(!time2_timeWorkingFlg){
        start2();
        time2_timeWorkingFlg=true;
    }
    if(!time3_timeWorkingFlg){
        start3();
        time3_timeWorkingFlg=true;
    }
    startStopStyle();
}

// ストップボタンがクリックされたら時間を止める
allStopButton.addEventListener('click', function() {
    allStop()
});

function allStop(){
    clearTimeout(allTimeoutID);
    allStopTime += (Date.now() - allStartTime);
    if(time1_timeWorkingFlg){
        stop1()
    }
    if(time2_timeWorkingFlg){
        stop2()
    }
    if(time3_timeWorkingFlg){
        stop3()
    }
    allTime_timeWorkingFlg=false;
    startStopStyle();
}

// リセットボタンがクリックされたら時間を0に戻す
allResetButton.addEventListener('click', function() {
    resetStyle();
    allStopTime = 0;
});


set_direct_source_name_allTime.addEventListener('change', async () =>{
    let requestData=null;
    const query = new URLSearchParams(requestData);
    const res = await fetchData(`check_source` ,requestData);
}
)
