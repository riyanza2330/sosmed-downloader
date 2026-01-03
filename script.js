function download() {
    const url = document.getElementById("url").value.trim();
    const status = document.getElementById("status");

    if (!url) {
        status.innerHTML = "❌ Masukkan link video dulu";
        return;
    }

    status.innerHTML = "⏳ Memproses...";

    let redirect = "";

    if (url.includes("tiktok.com")) {
        redirect = "https://snapsave.app/download?url=";
    } 
    else if (url.includes("instagram.com")) {
        redirect = "https://snapinsta.app/?url=";
    } 
    else if (url.includes("facebook.com") || url.includes("fb.watch")) {
        redirect = "https://fdown.net/?url=";
    } 
    else if (url.includes("twitter.com") || url.includes("x.com")) {
        redirect = "https://ssstwitter.com/?url=";
    } 
    else {
        status.innerHTML = "❌ Platform tidak didukung";
        return;
    }

    status.innerHTML = "✅ Redirect ke halaman download...";
    window.open(redirect + encodeURIComponent(url), "_blank");
}
function download() {
  const url = document.getElementById("url").value.trim();
  const status = document.getElementById("status");

  if (!url) {
    status.innerHTML = "❌ Masukkan link video";
    return;
  }

  let target = "";

  if (url.includes("tiktok.com")) {
    target = "https://snapsave.app/download?url=";
  } else if (url.includes("instagram.com")) {
    target = "https://snapinsta.app/?url=";
  } else if (url.includes("facebook.com") || url.includes("fb.watch")) {
    target = "https://fdown.net/?url=";
  } else if (url.includes("twitter.com") || url.includes("x.com")) {
    target = "https://ssstwitter.com/?url=";
  } else {
    status.innerHTML = "❌ Platform tidak didukung";
    return;
  }

  status.innerHTML = "✅ Mengarahkan ke download...";
  window.open(target + encodeURIComponent(url), "_blank");
}
