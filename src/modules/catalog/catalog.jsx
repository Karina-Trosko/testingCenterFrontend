import React from 'react';
import { connect } from "react-redux";
import './catalog.scss';
import { getContent } from '../../selectors/tests';
import { Title, Subtitle, Button } from '../../components';

function getCatalogItemRender(item = {}) {
    switch (item.itemType) {
        case 'test':
            return (<CatalogTestItem item={item} />);
        case 'user':
            return (<CatalogUserItem item={item} />);
        default: return (<div></div>);
    }
};

function CatalogTestItem({ item = {} }) {
    return (
        <>
            <Title text={item.name} />
            <Subtitle text={item.description} />
            <Subtitle text={`Number of questions: ${item.numberOfQuestions}`} />
            <div className="catalog-buttons-group">
                {item.category ? <Button styleName="rounded" bc="#FF7100" text={item.category.name} additionalStyle={{ marginRight: '10px' }} /> : null}
                {item.type ? <Button styleName="rounded" bc="#CB0077" text={item.type.name} /> : null }
            </div>
        </>
    );
}

function CatalogUserItem({ item = {} }) {
    return (
        <>
            <Title text={`${item.surname} ${item.firstName} ${item.patronymic}`} />
            <Subtitle text={item.login} />
            <Subtitle text={item.contactInformation} />
        </>
    );
}

function CatalogItem({ item = {} }) {
    console.log('Item: ', item);
    return (
        <>
            <div className="catalog-item">
                <div className="catalog-item-content">
                    {getCatalogItemRender(item)}
                </div>
            </div>
            <div className="catalog-separator-block">
            <div className="catalog-separator"></div>
            </div>
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

const Catalog = ({ data = [] }) => {
    return (
        data.map(el => (<CatalogItem item={el} key={el.id} />))
    );
}
const MainCatalog = connect(makeMapStateToProps)(
    Catalog
);

export default MainCatalog;