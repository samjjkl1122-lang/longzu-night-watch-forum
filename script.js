const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");
const rows = document.querySelectorAll(".thread-row");
const form = document.querySelector(".contact-card");
const statusLine = document.querySelector(".form-status");

menuButton?.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

rows.forEach((row) => {
  row.addEventListener("click", () => {
    rows.forEach((item) => item.classList.remove("is-active"));
    row.classList.add("is-active");
  });

  row.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      row.click();
    }
  });
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = new FormData(form).get("contact");
  statusLine.textContent = email
    ? "信号已记录在本地演示状态。"
    : "请输入一个邮箱地址。";
});
