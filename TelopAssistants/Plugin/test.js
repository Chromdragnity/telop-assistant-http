const get_dataset_button  = document.getElementById('get_dataset_button');
const set_direct_button  = document.getElementById('set_direct_button');

get_dataset_button.addEventListener('click', async () => {
    let requestData={position: document.getElementById('get_dataset_text').value};
    const query = new URLSearchParams(requestData);
    requestData=null;
    const res = await fetchData(`get_dataset?${query}` ,requestData);
});

set_direct_button.addEventListener('click', async () => {
    let requestData={
        enable : true
        ,sourceName : document.getElementById('set_direct_source_name').value
        ,visible : true
        ,text : document.getElementById('set_direct_text').value
    };
    const query = new URLSearchParams(requestData);
    requestData=null;
    const res = await fetchData(`set_direct?${query}` ,requestData);
});


async function fetchData(url ,requestData) {
    try {
        // fetchリクエストを送信
        const response = await fetch(url,requestData);
        // HTTPレスポンスステータスをチェック
        if (!response.ok) {
            throw new Error(`サーバーからの応答が異常です: ${response.status}`);
        }
        // JSONとしてレスポンスをパース
        const data = await response.json();
        // console.log('取得したデータ:', data);

    } catch (error) {
        // ネットワークエラーまたはデータ処理エラーの捕捉
        console.error('エラーが発生しました:', error);
    }
}