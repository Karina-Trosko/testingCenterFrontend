import React from 'react';
import { connect } from "react-redux";
import './catalog.scss';
import { getContent } from '../../selectors/tests';

function CatalogItem(item) {
    return (
        <div className="header"></div>
    );
}

const makeMapStateToProps = () => {
    const content = getContent();
    const mapStateToProps = (state) => {
      return {
        data: content(state)
      };
    };
    return mapStateToProps;
  };
  
const Catalog = ({ data }) => {
    //console.log('data: ',(data && data[0].description) || 'hhhhh');
    return (
<div>{(data && data[0].description) || 'hhhhh'}</div>
    );
}
const MainCatalog = connect(makeMapStateToProps)(
    Catalog
);

export default MainCatalog;