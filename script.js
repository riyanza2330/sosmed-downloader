async function prosesDownload() {
    const urlInput = document.getElementById('videoUrl').value;
    const resultBox = document.getElementById('result');
    const downloadBtn = document.getElementById('downloadBtn');
    const btnProses = document.querySelector('button');

    if (!urlInput) {
        alert("Masukkan link dulu bro!");
        return;
    }

    btnProses.innerText = "Sabar, lagi proses...";

    try {
        // Kita gunakan API lain yang lebih stabil untuk Browser/CORS
        const apiUrl = `https://api.tiklydown.eu.org/api/download?url=${encodeURIComponent(urlInput)}`;
        
        // Menambahkan Proxy (cors-anywhere atau sejenisnya) seringkali dibatasi, 
        // Jadi kita coba pakai API yang support CORS secara native:
        const response = await fetch(`https://api.vreden.web.id/api/tiktok?url=${encodeURIComponent(urlInput)}`);
        const data = await response.json();

        if (data.status === 200 && data.result) {
            resultBox.style.display = "block";
            // Ambil link video tanpa watermark
            downloadBtn.href = data.result.video.no_watermark || data.result.video.main; 
            btnProses.innerText = "Download Lagi";
        } else {
            alert("Video tidak ditemukan atau API sedang limit.");
            btnProses.innerText = "Coba Lagi";
        }
    } catch (error) {
        console.error(error);
        // Jika masih error CORS, ini adalah fallback/pilihan terakhir
        alert("Terjadi kesalahan koneksi. Coba lagi dalam beberapa saat.");
        btnProses.innerText = "Download";
    }
}
