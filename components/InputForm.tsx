import { FormEvent } from "react";

type Message = {
  text: string;
  from: "user" | "model";
};

export const InputForm = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);

  const handleGenerateOutput = (e: FormEvent) => {
    e.preventDefault();
    setMessages([
      { text: prompt, from: "user" },
      {
        text: "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.",
        from: "model",
      },
    ]);

    setPrompt("");
  };

  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-col w-full gap-4 mb-5">
        {messages &&
          messages.length > 0 &&
          messages.map((message) => (
            <div
              className={` rounded-lg w-full flex items-center ${message.from === "model" ? "justify-start" : "justify-end"}`}
            >
              <p
                className={`${message.from === "model" ? "bg-[#DBEAFE]" : " bg-gray-100"} flex items-center p-2 max-w-[70%] border rounded-lg text-gray-500`}
              >
                {message.text}
              </p>
            </div>
          ))}
      </div>

      <form>
        <input
          type="text"
          placeholder="Your prompt"
          className="mb-4 p-2 border  w-full"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        {messages && messages.length === 0 ? (
          <div className="flex items-end justify-end">
            <button
              onClick={handleGenerateOutput}
              className="bg-[#3B82F6] text-white flex  items-center gap-[10px] py-1  font-medium px-3 rounded-md"
            >
              <img
                src={chrome.runtime.getURL("/icon/generate-icon.svg")}
                className="h-[15px] w-[15px]"
                height={18}
                width={18}
                alt="generate-icon"
              />
              <p>Generate</p>
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-end gap-4">
            <button
              onClick={handleGenerateOutput}
              className="bg-transparent border text-gray-500 flex items-center gap-[10px] py-1  font-medium px-3 rounded-md"
            >
              <img
                src={chrome.runtime.getURL("/icon/insert-icon.svg")}
                className="h-[12px] w-[12px]"
                height={18}
                width={18}
                alt="generate-icon"
              />
              <p>Insert</p>
            </button>
            <button
              onClick={handleGenerateOutput}
              className="bg-[#3B82F6] text-white border flex items-center gap-[10px] py-1 font-medium px-3 rounded-md"
            >
              <img
                src={chrome.runtime.getURL("/icon/regenerate-icon.svg")}
                className="h-[15px] w-[15px]"
                height={18}
                width={18}
                alt="generate-icon"
              />
              <p>Regenerate</p>
            </button>
          </div>
        )}
      </form>
    </div>
  );
};
