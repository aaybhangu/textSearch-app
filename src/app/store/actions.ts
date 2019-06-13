export const FilterItemsAction = FilterItemsArray => {
  return {
    type: "UPDATE_ARRAY",
    payload: FilterItemsArray
  };
};

export const SelectedItemsAction = SelectedItem => {
  return {
    type: "SELECTED_ITEM",
    payload: SelectedItem
  };
};

export const DeleteItemsAction = DeleteIndex => {
  return {
    type: "DELETE_ITEM",
    payload: DeleteIndex
  };
};
