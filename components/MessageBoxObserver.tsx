import { useState, useEffect } from "react";

export const MessageBoxObserver = () => {
  const [messageBox, setMessageBox] = useState<Element | null>(null);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const messagebox = document.getElementsByClassName(
        "msg-form__contenteditable",
      )[0];
      if (messagebox) {
        console.log("messagebox found");
        if (!messagebox.querySelector(".deepanshu-text")) {
          (messagebox as HTMLElement).style.position = "relative";

          const newDiv = document.createElement("div");
          newDiv.className = "deepanshu-text";

          const Icon = document.createElement("img");
          Icon.src = chrome.runtime.getURL("/icon/ai-icon.svg");
          Icon.height = 32;
          Icon.width = 32;
          Icon.style.position = "absolute";
          Icon.style.bottom = "3px";
          Icon.style.right = "5px";

          newDiv.appendChild(Icon);
          messagebox.appendChild(newDiv);
        }
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
};
