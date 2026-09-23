function viewMoreDetails(modelName) {
<<<<<<< HEAD
    // Lightweight, non-blocking toast instead of a jarring browser alert()
    let toast = document.getElementById("vi-toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "vi-toast";
        toast.style.position = "fixed";
        toast.style.bottom = "90px";
        toast.style.right = "22px";
        toast.style.zIndex = "1200";
        toast.style.background = "var(--surface, #151c30)";
        toast.style.border = "1px solid var(--border, rgba(255,255,255,.1))";
        toast.style.color = "var(--text, #fff)";
        toast.style.padding = "14px 18px";
        toast.style.borderRadius = "12px";
        toast.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";
        toast.style.fontFamily = "Inter, sans-serif";
        toast.style.fontSize = "14px";
        toast.style.maxWidth = "280px";
        toast.style.transition = "opacity .25s ease, transform .25s ease";
        document.body.appendChild(toast);
    }
    toast.innerHTML = `<strong>${modelName}</strong><br><span style="color:#aab3cc">Full specs coming soon — try the Compare or Filters page for details in the meantime.</span>`;
    toast.style.opacity = "1";
    toast.style.transform = "translateY(0)";
    clearTimeout(window.__viToastTimer);
    window.__viToastTimer = setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(10px)";
    }, 3200);
=======
    alert(`More information about ${modelName} will be shown here!`);
>>>>>>> 719d12311b1dd87b6fa2ca6545da46a16b7ab17b
}
