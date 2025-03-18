function telegramSend(domain, hostname, pathname) {
    const url = `/.netlify/functions/sendTelegram?domain=${domain}&hostname=${hostname}&pathname=${pathname}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log("Pesan terkirim:", data);
        })
        .catch(error => {
            console.error("Terjadi kesalahan:", error);
        });
}

// Contoh pemanggilan fungsi
telegramSend(document.domain, document.location.hostname, document.location.pathname);
