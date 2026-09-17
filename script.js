const openBtn = document.getElementById("openBtn");
const messagePage = document.getElementById("messagePage");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const terminal = document.getElementById("terminal");
const typedText = document.getElementById("typedText");
const ending = document.getElementById("ending");

openBtn?.addEventListener("click", () => {
  document.getElementById("intro")?.classList.add("hidden");
  messagePage?.classList.remove("hidden");
});

noBtn?.addEventListener("click", () => {
  noBtn.textContent = "yakin nggak? 😭";
});

yesBtn?.addEventListener("click", async () => {
  messagePage?.classList.add("hidden");
  terminal?.classList.remove("hidden");
  await runTerminal();
});

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function runTerminal() {
  const boot = ["READY....", "1", "2", "3", "GO!..."];

  for (const line of boot) {
    typedText.textContent = line;
    await sleep(600);
  }

  const lines = [
    "Okay... kamu pilih YESS. 😭",
    "",
    "Jujur, aku cuma pengen bilang",
    "kalau aku seneng kamu mau ketemu.",
    "",
    "Jadi jangan PHP-in aku yaa.",
    "See you soon, okay? ♡"
  ];

  typedText.textContent = "";

  for (const line of lines) {
    for (const char of line) {
      typedText.textContent += char;
      await sleep(45);
    }
    typedText.textContent += "\n";
    await sleep(300);
  }

  ending?.classList.remove("hidden");
}
