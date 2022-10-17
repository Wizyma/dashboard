import { useAtom } from "jotai";

import { searchAtom } from "../../../store";

export function useSearchAtom() {
  const [searchValue, setSearchValue] = useAtom(searchAtom);

  const onSearchChange = (nextValue?: string) => {
    if (!nextValue) {
      return setSearchValue(null);
    }
    return setSearchValue(nextValue);
  };

  return {
    searchValue,
    onSearchChange,
  };
}
