async function mulaiProses() {
    const url = document.getElementById('videoUrl').value;
    const btn = document.getElementById('btnAction');
    const loader = document.getElementById('loader');
    const resultBox = document.getElementById('result');
    const downloadBtn = document.getElementById('downloadBtn');

    if (!url) return alert("Masukkan link dulu!");

    // UI Reset
    loader.classList.remove('hidden');
    resultBox.classList.add('hidden');
    btn.disabled = true;
    btn.innerText = "Loading...";

    try {
        // Kita gunakan Tiklydown API melalui Proxy untuk menghindari CORS error
        const apiUrl = `https://api.tiklydown.eu.org/api/download?url=${encodeURIComponent(url)}`;
        const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(apiUrl)}`;

        const response = await fetch(proxyUrl);
        const data = await response.json();

        if (data.status === 200) {
            // Tampilkan hasil
            resultBox.classList.remove('hidden');
            // Ambil link video tanpa watermark (TikTok) atau link video utama (FB/IG)
            downloadBtn.href = data.video?.noWatermark || data.url || data.result?.video;
            btn.innerText = "Selesai!";
        } else {
            alert("Video tidak ditemukan atau link tidak didukung.");
        }
    } catch (e) {
        console.error(e);
        alert("Terjadi masalah koneksi ke server.");
    } finally {
        loader.classList.add('hidden');
        btn.disabled = false;
        btn.innerText = "Ambil Video Lagi";
    }
}
