import { useState } from "react";

export const useToggle = () => {
  const [toggle, setToggle] = useState<boolean>(false);

const changeToggle =

  /*     Det som skall "exporteras" returneras, alltså det vi skall kunna destructa ut från useToggle.
       Returnerar vi en [] så behlver den typas upp, i annat fall kan du använda ett {}*/
  return { toggle };
};
