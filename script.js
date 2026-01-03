async function mulaiDownload() {
    const urlInput = document.getElementById('videoUrl').value;
    const btn = document.getElementById('btnAction');
    const loader = document.getElementById('loader');
    const resultBox = document.getElementById('result');
    const downloadBtn = document.getElementById('downloadBtn');

    if (!urlInput) return alert("Tempel link video TikTok dulu bro!");

    // Set UI saat proses
    loader.classList.remove('hidden');
    resultBox.classList.add('hidden');
    btn.disabled = true;
    btn.innerText = "Memproses...";

    try {
        // SOLUSI UTAMA: Gunakan Proxy untuk menembus CORS Error yang ada di screenshot-mu
        const targetApi = `https://api.tiklydown.eu.org/api/download?url=${encodeURIComponent(urlInput)}`;
        const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(targetApi)}`;

        const response = await fetch(proxyUrl);
        
        if (!response.ok) throw new Error("Server API tidak merespon");
        
        const data = await response.json();

        if (data.status === 200) {
            // Berhasil! Munculkan hasilnya
            loader.classList.add('hidden');
            resultBox.classList.remove('hidden');
            
            // Ambil link video tanpa watermark
            const videoLink = data.result.video.no_watermark || data.result.video.main;
            downloadBtn.href = videoLink;
            
            btn.innerText = "Selesai!";
        } else {
            alert("Video tidak ditemukan. Coba link TikTok yang lain.");
        }
    } catch (error) {
        console.error("Error Detail:", error);
        alert("Gagal koneksi. Coba matikan AdBlock/Brave Shield atau gunakan Chrome biasa.");
    } finally {
        loader.classList.add('hidden');
        btn.disabled = false;
        btn.innerText = "Download Lagi";
    }
}
async function mulaiDownload() {
    const url = document.getElementById('videoUrl').value;
    const btn = document.getElementById('btnAction');
    const result = document.getElementById('result');
    const loader = document.getElementById('loader');

    if (!url) return alert("Tempel link video TikTok dulu bro!");

    loader.classList.remove('hidden');
    result.classList.add('hidden');
    btn.disabled = true;
    btn.innerText = "Memproses...";

    try {
        const proxy = "https://corsproxy.io/?";
        const apiTarget = https://api.tiklydown.eu.org/api/download?url=${encodeURIComponent(url)};
        
        const response = await fetch(proxy + encodeURIComponent(apiTarget));
        const data = await response.json();

        if (data.sta…
