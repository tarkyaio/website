fetch("https://api.github.com/repos/tarkyaio/tarka/releases/latest")
  .then(r => r.ok ? r.json() : null)
  .then(data => {
    if (data?.tag_name) {
      document.querySelectorAll(".v-tag").forEach(el => {
        el.textContent = data.tag_name;
      });
    }
  })
  .catch(() => {});
