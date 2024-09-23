import ReactDOM from "react-dom/client";
import App from "@/components/app";

export default defineContentScript({
  matches: ["*://*/*"],
  cssInjectionMode: "ui",

  async main(ctx) {
    const ui = await createShadowRootUi(ctx, {
      name: "linkedin-ai",
      position: "inline",
      onMount: (container) => {
        const appContainer = document.createElement("div");
        appContainer.id = "ai-reply-container";
        container.appendChild(appContainer);

        const root = ReactDOM.createRoot(appContainer);
        root.render(<App />);
        return root;
      },
      onRemove: (root) => {
        root?.unmount();
      },
    });

    ui.mount();
  },
});
