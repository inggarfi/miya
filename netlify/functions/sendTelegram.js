const fetch = require('node-fetch');

exports.handler = async (event, context) => {
    const tokenBot = process.env.TOKEN_BOT;  // Mengambil variabel environment
    const chatId = process.env.CHAT_ID;

    const domain = event.queryStringParameters.domain;
    const hostname = event.queryStringParameters.hostname;
    const pathname = event.queryStringParameters.pathname;

    const textData = `<b>XSS+Alert+in+${domain}</b>%0d%0a` +
                     `<b>-+URL+Target+-</b>%0d%0a<pre>${hostname}${pathname}</pre>`;

    const url = `https://api.telegram.org/bot${tokenBot}/sendMessage?chat_id=${chatId}&text=${textData}&parse_mode=html`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Pesan terkirim!', data }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Terjadi kesalahan', error }),
        };
    }
};
