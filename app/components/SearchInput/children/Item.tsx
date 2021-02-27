import React from "react";
import { TouchableOpacity, Text } from "react-native";

export interface SearchInputItemState {
  value: string;
  onPress: CallableFunction;
}
export type SearchInputItemProps = SearchInputItemState;

export function SearchInputItemView(props: SearchInputItemProps): JSX.Element {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onPress();
      }}
    >
      <Text>{props.value}</Text>
    </TouchableOpacity>
  );
}

export const SearchInputItem: React.FC<SearchInputItemProps> = (props) => {
  return <SearchInputItemView {...props} />;
};
