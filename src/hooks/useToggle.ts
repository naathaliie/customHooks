import { useState } from "react";

export const useToggle = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  //Ändra på toggle mellan dess två värden true/false
const changeToggle = () => {
  setToggle(!toggle);
};

  /*     Det som skall "gå att använda globalt" returneras, alltså det vi skall kunna destructa ut från useToggle.
       Returnerar vi en [] så behlver den typas upp, i annat fall kan du använda ett {}*/
  return { toggle, changeToggle }
};
/* Jontis */