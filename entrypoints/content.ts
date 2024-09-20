export default defineContentScript({
  matches: ["https://www.linkedin.com/*"],

  main() {
    const observer = new MutationObserver(() => {
      const messageBox = document.getElementsByClassName(
        "msg-form__contenteditable",
      )[0];

      if (messageBox && !messageBox.querySelector(".sticky-icon")) {
        const stickyDiv = document.createElement("div");
        const stickyIcon = document.createElement("img");

        stickyIcon.src = chrome.runtime.getURL("/icon/ai-icon.svg");
        stickyIcon.alt = "Icon";
        stickyIcon.height = 32;
        stickyIcon.width = 32;
        stickyIcon.classList.add("sticky-icon");

        stickyDiv.style.position = "absolute";
        stickyDiv.style.bottom = "0px";
        stickyDiv.style.right = "6px";
        stickyDiv.style.zIndex = "1000";
        stickyDiv.style.cursor = "pointer";

        stickyDiv.appendChild(stickyIcon);
        messageBox.appendChild(stickyDiv);
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
  },
});
