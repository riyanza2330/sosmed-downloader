async function prosesDownload() {
    const url = document.getElementById('videoUrl').value;
    const resultBox = document.getElementById('result');
    const downloadBtn = document.getElementById('downloadBtn');

    if (!url) {
        alert("Masukkan link dulu bro!");
        return;
    }

    // Tampilkan status loading
    document.querySelector('button').innerText = "Sabar, lagi proses...";

    try {
        // Kita pakai API publik (RapidAPI atau sejenisnya) 
        // Contoh ini pakai API pihak ketiga gratisan untuk demo:
        const response = await fetch(`https://api.tiklydown.eu.org/api/download?url=${encodeURIComponent(url)}`);
        const data = await response.json();

        if (data.status === true || data.url) {
            // Jika berhasil, tampilkan tombol download
            resultBox.style.display = "block";
            // Sesuaikan 'data.url' dengan struktur respon API yang dipakai
            downloadBtn.href = data.video || data.url; 
            document.querySelector('button').innerText = "Download Lagi";
        } else {
            alert("Video nggak ketemu atau link salah.");
        }
    } catch (error) {
        console.error(error);
        alert("Waduh, ada masalah koneksi ke API.");
        document.querySelector('button').innerText = "Download";
    }
}
