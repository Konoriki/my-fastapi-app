document.getElementById("btn").addEventListener("click", async () => {
  const res = await fetch("/api");
  const data = await res.json();
  document.getElementById("output").textContent = data.message;
});
