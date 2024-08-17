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
        if(logFlg){
            console.log('取得したデータ:', data);
        }
        return data;
    } catch (error) {
      // ネットワークエラーまたはデータ処理エラーの捕捉
        console.error('エラーが発生しました:', error);
    }
}

outputLogText.addEventListener('load', () => {
        logFlg=Boolean(outputLogText.value);
    }
)

outputLogText.addEventListener('change', () => {
        logFlg=Boolean(outputLogText.value);
    }
)