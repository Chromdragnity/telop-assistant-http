window.onload =() =>{
    // 全体タイマー
    allStartButton.disabled = false;
    allStopButton.disabled  = true;
    allResetButton.disabled = false;
    allStartButton.value = "全タイマー開始"

    // 走者1タイマー
    restartButton1.disabled = true;
    stopButton1.disabled   = true;

    // 走者2タイマー
    restartButton2.disabled = true;
    stopButton2.disabled   = true;

    // 走者3タイマー
    restartButton3.disabled = true;
    stopButton3.disabled   = true;

    // 管理用
    set_direct_source_name_allTime.disabled = false;
    set_direct_source_name_1.disabled = false;
    set_direct_source_name_2.disabled = false;
    set_direct_source_name_3.disabled = false;
}

// リセット際のプロパティ
function resetStyle(){
    // 全体タイマー
    allStartButton.disabled = false;
    allStopButton.disabled  = true;
    allResetButton.disabled = false;
    allStartButton.value = "全タイマー開始"
    allTime.textContent = '00:00:00';

    // 走者1タイマー
    restartButton1.disabled = true;
    stopButton1.disabled   = true;
    allStartButton.value = "タイマー開始"
    time1.textContent   = '00:00:00';

    // 走者2タイマー
    restartButton2.disabled = true;
    stopButton2.disabled   = true;
    allStartButton.value = "タイマー開始"
    time2.textContent   = '00:00:00';

    // 走者3タイマー
    restartButton3.disabled = true;
    stopButton3.disabled   = true;
    allStartButton.value = "タイマー開始"
    time3.textContent   = '00:00:00';

    // 管理用
    set_direct_source_name_allTime.disabled = false;
    set_direct_source_name_1.disabled = false;
    set_direct_source_name_2.disabled = false;
    set_direct_source_name_3.disabled = false;
}


// タイマースタートストップ時のプロパティ
function startStopStyle(){
    // 全体タイマー
    if(allTime_timeWorkingFlg){
        // 全体タイマーが進んでいる場合
        allStartButton.disabled = true;
        allStopButton.disabled  = false;
        allResetButton.disabled = true;

        // 管理用
        set_direct_source_name_allTime.disabled = true;
        set_direct_source_name_1.disabled = true;
        set_direct_source_name_2.disabled = true;
        set_direct_source_name_3.disabled = true;
    }else{
        // 全体タイマーが止まっている場合
        allStartButton.disabled = false;
        allStopButton.disabled  = true;
        allResetButton.disabled = false;
        allStartButton.value = "全タイマー再開"
    }

    // 走者1タイマー
    if(time1_timeWorkingFlg){
        // 走者1タイマーが進んでいる場合
        restartButton1.disabled = true;
        stopButton1.disabled    = false;
    }else{
        // 走者1タイマーが止まっている場合
        restartButton1.disabled = false;
        stopButton1.disabled    = true;
    }

    // 走者2タイマー
    if(time2_timeWorkingFlg){
        // 走者2タイマーが進んでいる場合
        restartButton2.disabled = true;
        stopButton2.disabled    = false;
    }else{
        // 走者2タイマーが止まっている場合
        restartButton2.disabled = false;
        stopButton2.disabled    = true;
    }

    // 走者3タイマー
    if(time3_timeWorkingFlg){
        // 走者3タイマーが進んでいる場合
        restartButton3.disabled = true;
        stopButton3.disabled    = false;
    }else{
        // 走者1タイマーが止まっている場合
        restartButton3.disabled = false;
        stopButton3.disabled    = true;
    }

}