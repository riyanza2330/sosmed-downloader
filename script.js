function download() {
  const url = document.getElementById("url").value.trim();
  const status = document.getElementById("status");

  if (!url) {
    status.innerHTML = "❌ Masukkan link video";
    return;
  }

  let target = "";

  // TikTok
  if (url.includes("tiktok.com")) {
    target = "https://snapsave.app/";
  }
  // Instagram
  else if (url.includes("instagram.com")) {
    target = "https://snapinsta.app/";
  }
  // Facebook
  else if (url.includes("facebook.com") || url.includes("fb.watch")) {
    target = "https://fdown.net/";
  }
  // Twitter / X
  else if (url.includes("twitter.com
