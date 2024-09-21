import { useState, useEffect } from "react";
import "../assets/main.css";

const App = () => {
  const [messageBox, setMessageBox] = useState<Element | null>(null);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const messagebox = document.getElementsByClassName(
        "msg-form__contenteditable",
      )[0];
      if (messagebox) {
        console.log("messagebox found");
        if (!messagebox.querySelector(".deepanshu-text")) {
          const newDiv = document.createElement("div");
          newDiv.className = "deepanshu-text";
          const ptag = document.createElement("p");
          ptag.textContent = "Deepanshu";
          newDiv.appendChild(ptag);
          messagebox.appendChild(newDiv);
        }
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
};

export default App;
