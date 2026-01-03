function download() {
    const url = document.getElementById("url").value;
    const result = document.getElementById("result");

    if (url === "") {
        result.innerHTML = "Masukkan URL dulu bro!";
        return;
    }

    result.innerHTML = "Processing...";

    fetch(`https://api.tikmate.app/api/lookup?url=${encodeURIComponent(url)}`)
        .then(res => res.json())
        .then(data => {
            if (data && data.token) {
                const video = `https://tikmate.app/download/${data.token}/720`;
                result.innerHTML = `
                    <a href="${video}" target="_blank">Download Video</a>
                `;
            } else {
                result.innerHTML = "Gagal ambil video 😥";
            }
        })
        .catch(() => {
            result.innerHTML = "API error / Link tidak valid";
        });
}
