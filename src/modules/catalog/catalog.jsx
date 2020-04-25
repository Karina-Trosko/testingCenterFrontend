import React from 'react';
import { connect } from "react-redux";
import './catalog.scss';
import { getContent } from '../../selectors/tests';
import { Title, Subtitle, Button } from '../../components';

function CatalogItem({ item={} }) {
    console.log('ITEM: ',item);
    return (
        <>
        <div className="catalog-item">
            <div className="catalog-item-content">
                <Title text={item.name}/>
                <Subtitle text={item.description} />
                <Subtitle text={`Number of questions: ${item.numberOfQuestions}`} />
                <div className="catalog-buttons-group">
                    <Button styleName="rounded" bc="#FF7100" text="Category" additionalStyle={{ marginRight: '10px' }}/>
                    <Button styleName="rounded" bc="#CB0077" text="type"/>
                </div>
            </div>
        </div>
        <div className="catalog-separator"></div>
        </>
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
  
const Catalog = ({ data=[] }) => {
    //console.log('data: ',(data && data[0].description) || 'hhhhh');
    return (
        data.map(el => (<CatalogItem item={el} key={el.id}/>))
    );
}
const MainCatalog = connect(makeMapStateToProps)(
    Catalog
);

export default MainCatalog;