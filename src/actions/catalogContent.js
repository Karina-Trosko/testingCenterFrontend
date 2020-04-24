import { CHANGE_CATALOG_CONTENT } from './constants';

export const changecatalogContent = (catalogContent) => dispatch => dispatch({
        type: CHANGE_CATALOG_CONTENT,
        catalogContent,
    }
);