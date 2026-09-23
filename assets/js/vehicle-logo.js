// Live search filter for the brand logo grid
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("brand-search");
  const items = document.querySelectorAll(".logo-item");
  const emptyState = document.getElementById("brand-empty");
  const countEl = document.getElementById("brand-count");
  const total = items.length;

  function setCount(n) {
    if (countEl) countEl.textContent = n === total ? `${total} brands` : `${n} of ${total}`;
  }
  setCount(total);

  function applyBrandFilters() {
    const query = (searchInput ? searchInput.value : "").trim().toLowerCase();
    let visibleCount = 0;

    items.forEach((item) => {
      const name = (item.dataset.name || "").toLowerCase();
      const visible = !query || name.includes(query);
      item.classList.toggle("hidden", !visible);
      if (visible) visibleCount++;
    });

    setCount(visibleCount);
    if (emptyState) emptyState.classList.toggle("hidden", visibleCount !== 0);
  }

  if (searchInput) {
    searchInput.addEventListener("input", applyBrandFilters);
  }
});
