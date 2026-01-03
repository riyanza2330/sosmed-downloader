async function mulaiDownload() {
    const url = document.getElementById('videoUrl').value;
    const btn = document.getElementById('btnAction');
    const result = document.getElementById('result');
    const loader = document.getElementById('loader');

    if (!url) return alert("Tempel link video TikTok dulu bro!");

    // UI Loading
    loader.classList.remove('hidden');
    result.classList.add('hidden');
    btn.disabled = true;

    try {
        // Solusi CORS Error: Gunakan Proxy
        const proxy = "https://corsproxy.io/?";
        const apiTarget = `https://api.tiklydown.eu.org/api/download?url=${encodeURIComponent(url)}`;
        
        const response = await fetch(proxy + encodeURIComponent(apiTarget));
        const data = await response.json();

        if (data.status === 200) {
            loader.classList.add('hidden');
            result.classList.remove('hidden');
            
            // Ambil link video (biasanya TikTok tanpa WM ada di noWatermark)
            const videoLink = data.result.video.no_watermark || data.result.video.main;
            document.getElementById('downloadBtn').href = videoLink;
            document.getElementById('downloadBtnHD').href = videoLink; // Sama untuk demo
            
            btn.disabled = false;
        } else {
            throw new Error("API Error");
        }
    } catch (error) {
        console.error(error);
        alert("Gagal memproses link. Pastikan link TikTok valid!");
        loader.classList.add('hidden');
        btn.disabled = false;
    }
}
