// Ganti baris fetch yang lama dengan yang ini:
const apiUrl = `https://api.vreden.web.id/api/tiktok?url=${encodeURIComponent(url)}`;

try {
    const response = await fetch(apiUrl);
    const result = await response.json();

    // Cek struktur datanya (tergantung API yang dipakai)
    if (result.status === 200 || result.result) {
        resultBox.style.display = "block";
        // Jika pakai API Vreden, biasanya link videonya ada di result.data.video atau sejenisnya
        downloadBtn.href = result.result.video || result.result.data.video; 
        document.querySelector('button').innerText = "Download Lagi";
    } else {
        alert("Video tidak ditemukan. Coba link lain bro.");
        document.querySelector('button').innerText = "Download";
    }
} catch (error) {
    // ... kode error kamu
}
