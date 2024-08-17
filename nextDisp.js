// 待機画面メッセージ用
// 
nextGameGetListButton.addEventListener('click', async () => {
    let requestData={
        position : 1
    };
    const query = new URLSearchParams(requestData);
    const res = await fetchData(`get_dataset?${query}` ,requestData);
    let data = JSON.parse(res.Item)
    console.log(res.DatasetLength)
});