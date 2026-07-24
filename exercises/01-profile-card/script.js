const button = document.querySelector("#toggle");
const more = document.querySelector("#more");

button?.addEventListener("click", () => {
  const willShow = more?.hasAttribute("hidden");
  more?.toggleAttribute("hidden");
  button.textContent = willShow ? "閉じる" : "もっと見る";
});
