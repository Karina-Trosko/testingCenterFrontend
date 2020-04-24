import { createSelector } from "reselect";

const getCatalogContent = (state) => state.catalogContent;

export const getContent = () => {
    return createSelector(
      [getCatalogContent],
      (content) => {
        return content;
      }
    );
  };