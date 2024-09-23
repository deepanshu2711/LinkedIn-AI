import "../assets/main.css";
import { MessageBoxObserver } from "./MessageBoxObserver";
import { useState } from "react";
import { PromptDialog } from "./promptDialog";
const App = () => {
  const [openPromptDialog, setOpenPromptDialog] = useState(false);

  const handleClick = (isOpen: boolean) => {
    setOpenPromptDialog(isOpen);
  };

  console.log(openPromptDialog);

  return (
    <>
      <MessageBoxObserver handleIconClick={handleClick} />
      <PromptDialog
        openDialog={openPromptDialog}
        TogglePromptDialog={handleClick}
      />
    </>
  );
};

export default App;
