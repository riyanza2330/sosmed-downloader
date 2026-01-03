async function prosesDownload() {
    const urlInput = document.getElementById('videoUrl').value;
    const resultBox = document.getElementById('result');
    const downloadBtn = document.getElementById('downloadBtn');
    const btnProses = document.querySelector('button');

    if (!urlInput) return alert("Masukkan link dulu!");

    btnProses.innerText = "Sabar, lagi proses...";

    try {
        // Kita gunakan API Tiklydown melalui proxy corsproxy.io
        const apiUrl = `https://api.tiklydown.eu.org/api/download?url=${encodeURIComponent(urlInput)}`;
        const response = await fetch(`https://corsproxy.io/?${encodeURIComponent(apiUrl)}`);
        const data = await response.json();

        // Logika pembacaan data (sesuaikan dengan respon API)
        if (data.status === 200 || data.url || data.result) {
            resultBox.style.display = "block";
            // Ambil link video (Tiklydown biasanya ada di data.video.noWatermark atau data.url)
            const finalLink = data.video?.noWatermark || data.url || data.result?.video;
            
            downloadBtn.href = finalLink;
            btnProses.innerText = "Download Lagi";
        } else {
            alert("Video tidak ditemukan. Coba link lain.");
            btnProses.innerText = "Download";
        }
    } catch (error) {
        console.error("Error Detail:", error);
        alert("Gagal mengambil data. Coba lagi atau gunakan browser lain.");
        btnProses.innerText = "Download";
    }
}
