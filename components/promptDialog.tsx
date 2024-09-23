interface PromptDialogProps {
  openDialog: boolean;
  TogglePromptDialog: (isOpen: boolean) => void;
}
export const PromptDialog = ({
  openDialog,
  TogglePromptDialog,
}: PromptDialogProps) => {
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node)
      ) {
        TogglePromptDialog(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  console.log(chrome.runtime.getURL("/icon/generate-icon.svg"));

  if (!openDialog) return null;
  return (
    <div className="flex items-center justify-center h-full">
      <div className="bg-black opacity-50 fixed top-0 bottom-0 left-0 right-0 z-[1000]" />

      <div
        ref={dialogRef}
        className="bg-[#F9FAFB] w-[55vh] flex p-5 flex-col items-end justify-end z-[1001] fixed top-1/2 left-[48%] transform -translate-x-1/2 -translate-y-1/2  rounded-lg shadow-lg"
      >
        <input
          type="text"
          placeholder="Your prompt"
          className="mb-4 p-2 border  w-full"
        />
        <button className="bg-[#3B82F6] text-white flex items-center gap-[10px]  font-semibold p-2 rounded-md">
          <img
            src={chrome.runtime.getURL("/icon/generate-icon.svg")}
            className="h-[18px] w-[18px]"
            height={18}
            width={18}
            alt="generate-icon"
          />
          <p>Generate</p>
        </button>
      </div>
    </div>
  );
};
