document.addEventListener("DOMContentLoaded", () => {
  // Create the fade-in overlay for the page load
  const overlay = document.createElement("div");
  overlay.className = "page-transition-overlay";
  document.body.appendChild(overlay);

  // Fade it out
  requestAnimationFrame(() => {
    overlay.classList.add("hidden");
  });
  
  // Remove it after fade finishes
  setTimeout(() => {
    if (overlay.parentNode) {
      overlay.parentNode.removeChild(overlay);
    }
  }, 600);

  // Intercept links using event delegation (more reliable)
  document.addEventListener("click", (e) => {
    const link = e.target.closest("a[href]");
    
    if (link && link.hostname === window.location.hostname && !link.hash && !link.target) {
      // Don't intercept if modifier keys are pressed
      if (e.ctrlKey || e.metaKey || e.shiftKey) return;
      
      e.preventDefault();
      const href = link.href;

      // Create the klecks (blob)
      const blob = document.createElement("div");
      blob.className = "click-blob";
      
      // Position at click coordinates
      blob.style.left = e.clientX + "px";
      blob.style.top = e.clientY + "px";
      document.body.appendChild(blob);

      // Force reflow
      blob.getBoundingClientRect();

      // Expand it
      requestAnimationFrame(() => {
        blob.classList.add("expand");
      });

      // Navigate after expansion
      setTimeout(() => {
        window.location.href = href;
      }, 550); // Navigate slightly before animation fully finishes so it feels snappy
    }
  });
});
