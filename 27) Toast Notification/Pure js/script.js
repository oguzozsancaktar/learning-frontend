const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
];

button.addEventListener("click", () => createNotification());

function createNotification() {
  const message = messages[Math.floor(Math.random() * messages.length)];

  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.innerText = message;

  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}
