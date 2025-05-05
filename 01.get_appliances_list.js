 
const axios = require('axios');

// Nature Remo　APIを動作させる関数を定義
async function getAppliances() {
    const token = '<3-1.アクセストークンを取得する で取得したトークン>'; // トークンを設定

    try {
        // リクエストを送信し、レスポンスを取得
        const response = await axios.get('https://api.nature.global/1/appliances', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'accept': 'application/json',
            },
        });
        
        // レスポンスのデータを出力
        console.log('Response data:', response.data);
    } catch (error) {
        // エラーが発生した場合
        console.error('Error:', error.message);
    }
}

// 関数を呼び出し
getAppliances();

