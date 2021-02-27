import React from "react";

import { SearchInputView } from "./SearchInputView";

export interface SearchInputState {
  placeholder?: string;
  data: Array<string>;
  value?: string;
  onChangeText: CallableFunction;
}

export type SearchInputProps = SearchInputState;

export const SearchInput: React.FC<SearchInputProps> = (props) => {
  return <SearchInputView {...props} />;
};
