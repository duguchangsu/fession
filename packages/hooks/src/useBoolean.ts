import { useState } from "react";

export const useBoolean = (): [boolean, () => void] => {
  const [bool, setBool] = useState<boolean>(false);

  const toggle = (): void => {
    setBool(!bool);
  };

  return [bool, toggle];
};
