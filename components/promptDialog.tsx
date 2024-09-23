interface PromptDialogProps {
  openDialog: boolean;
  TogglePromptDialog: (isOpen: boolean) => void;
}
export const PromptDialog = ({
  openDialog,
  TogglePromptDialog,
}: PromptDialogProps) => {
  const dialogRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (
  //       dialogRef.current &&
  //       !dialogRef.current.contains(event.target as Node)
  //     ) {
  //       TogglePromptDialog(false);
  //     }
  //   };
  //
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  if (!openDialog) return null;
  return (
    <div className="flex items-center justify-center h-full">
      <div className="bg-black opacity-50 fixed top-0 bottom-0 left-0 right-0 z-[1000]" />
      <div
        ref={dialogRef}
        className="bg-[#F9FAFB] w-[60vh] flex p-5 flex-col items-end justify-end z-[1001] fixed top-1/2 left-[48%] transform -translate-x-1/2 -translate-y-1/2  rounded-lg shadow-lg"
      >
        <InputForm />
      </div>
    </div>
  );
};
