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

        const handleClick = () => {
          console.log("clicked");
          const blackBgDiv = document.createElement("div");
          blackBgDiv.style.backgroundColor = "black";
          blackBgDiv.style.opacity = "50%";
          blackBgDiv.style.position = "absolute";
          blackBgDiv.style.top = "0px";
          blackBgDiv.style.bottom = "0px";
          blackBgDiv.style.right = "0px";
          blackBgDiv.style.left = "0px";
          blackBgDiv.style.zIndex = "1000";
          blackBgDiv.style.display = "flex";
          blackBgDiv.style.flexDirection = "col";
          blackBgDiv.style.alignItems = "center";
          blackBgDiv.style.justifyContent = "center";

          const form = document.createElement("form");
          const input = document.createElement("input");
          const button = document.createElement("button");

          button.textContent = "Generate";
          input.placeholder = "Your prompt";
          input.type = "text";

          form.style.borderRadius = "15px";
          form.style.padding = "8px";
          form.style.backgroundColor = "#F9FAFB";
          form.style.display = "flex";
          form.style.flexDirection = "col";
          form.style.gap = "20px";
          form.style.zIndex = "2000";
          form.style.position = "absolute";
          form.style.top = "50%";
          form.style.left = "43%";

          input.style.width = "100%";
          input.style.padding = "4px";

          button.style.padding = "4px";
          button.style.backgroundColor = "blue";
          button.style.color = "white";

          form.appendChild(input);
          form.appendChild(button);

          document.body.appendChild(form);
          document.body.appendChild(blackBgDiv);

          const closeModal = (event: any) => {
            if (!form.contains(event.target)) {
              document.body.removeChild(blackBgDiv);
              document.body.removeChild(form);
              document.removeEventListener("click", closeModal);
            }
          };
          setTimeout(() => {
            document.addEventListener("click", closeModal);
          }, 0);
        };

        stickyIcon.addEventListener("click", handleClick);
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
  },
});
