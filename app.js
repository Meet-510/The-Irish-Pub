// the hamburger for phone view

const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const body = document.querySelector("body");
const hLinks = document.querySelectorAll("#hLink");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  hamburger.classList.toggle("bg-white");
});

hLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    hamburger.classList.toggle("bg-white");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");

  // Create popup elements
  const popup = document.createElement("div");
  popup.id = "age-popup";
  popup.className =
    "fixed inset-0 bg-[rgba(0,0,0,0.2)] flex justify-center items-center z-50";

  const popupContent = `
    <div class="bg-black text-white p-8 rounded-lg w-11/12 lg:w-2/5 shadow-lg">
      <h1 class="text-2xl font-bold mb-6 text-center">Are you 18 or older?</h1>
      <div class="flex gap-8 justify-center">
        <button id="age-yes" class="bg-black text-white mx-5 rounded">Yes</button>
        <button id="age-no" class="bg-black text-white  mx-5rounded">No</button>
      </div>
    </div>
  `;

  popup.innerHTML = popupContent;
  body.appendChild(popup);

  document.querySelector("#age-yes").addEventListener("click", () => {
    popup.remove();
  });

  document.querySelector("#age-no").addEventListener("click", () => {
    popup.innerHTML = `
      <div class="bg-black text-white p-6 rounded-lg text-center shadow-lg">
        <h1 class="text-2xl font-bold mb-4">You are not allowed to access this website. Watch cartoon insted</h1>
      </div>
    `;
    setTimeout(() => {
      popup.remove();
      window.location.href = "https://www.cartoonnetwork.ca/";
    }, 3000);
  });
});
