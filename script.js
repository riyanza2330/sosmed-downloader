function download() {
    const url = document.getElementById("url").value.trim();

    if (!url) {
        alert("Masukkan link video dulu bro!");
        return;
    }

    // Auto detect platform
    let target = "";

    if (url.includes("tiktok.com")) {
        target = "https://snapsave.app/download?url=";
    } 
    else if (url.includes("instagram.com")) {
        target = "https://snapinsta.app/?url=";
    } 
    else if (url.includes("facebook.com") || url.includes("fb.watch")) {
        target = "https://fdown.net/?url=";
    } 
    else if (url.includes("twitter.com") || url.includes("x.com")) {
        target = "https://ssstwitter.com/?url=";
    } 
    else {
        alert("Platform belum didukung bro 😅");
        return;
    }

    window.open(target + encodeURIComponent(url), "_blank");
}
