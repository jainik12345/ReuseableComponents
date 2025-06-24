import React, { useState } from "react";
import Popup from "./Popup";

const Demo = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex p-24  flex-col items-center justify-center gap-4  ">
      <button
        onClick={() => setOpen(true)}
        className="btn cursor-pointer bg-amber-600 hover:bg-amber-500 duration-600 px-8 py-3 rounded-xl btn-primary"
      >
        Show Popup
      </button>
      <Popup
        open={open}
        onClose={() => setOpen(false)}
        message="Data Submitted Successfully"
        bgColor="bg-blue-600"
        duration={2500}
      />
    </div>
  );
};

export default Demo;
