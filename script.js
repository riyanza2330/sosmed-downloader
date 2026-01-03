function download() {
  const url = document.getElementById("url").value.trim();
  const status = document.getElementById("status");

  if (!url) {
    status.innerHTML = "❌ Masukkan link video dulu";
    return;
  }

  let target = "";

  if (url.includes("tiktok.com")) {
    target = "https://snapsave.app";
  } 
  else if (url.includes("instagram.com")) {
    target = "https://snapinsta.app";
  } 
  else if (url.includes("facebook.com") || url.includes("fb.watch")) {
    target = "https://fdown.net";
  } 
  else if (url.includes("twitter.com") || url.includes("x.com")) {
    target = "https://ssstwitter.com";
  } 
  else {
    status.innerHTML = "❌ Platform tidak didukung";
    return;
  }

  status.innerHTML = `
    ✅ Halaman downloader dibuka.<br>
    👉 Paste ulang link di sana lalu klik Download
  `;

  window.open(target, "_blank");
}
