import React from 'react';
import { connect } from "react-redux";
import './catalog.scss';
import { getContent } from '../../selectors/tests';
import { Title, Subtitle, Button, HorizontalSeparator, VerticalSeparator } from '../../components';

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
            <div className="catalog-item" key={item.id}>
                <div className="catalog-item-content">
                    <Title text={item.name} />
                    <Subtitle text={item.description} />
                    <Subtitle text={`Number of questions: ${item.numberOfQuestions}`} />
                    <div className="catalog-buttons-group">
                        {item.category ? <Button styleName="rounded" bc="#FF7100" text={item.category.name} additionalStyle={{ marginRight: '10px' }} /> : null}
                        {item.type ? <Button styleName="rounded" bc="#CB0077" text={item.type.name} /> : null}
                    </div>
                </div>
                <div style={{ display: 'flex', marginLeft: 'auto' }}>
                    <div className="catalog-item-menu">
                        <Button text="Pass" />
                        <Button text="Edit" />
                        <Button text="Delete" />
                    </div>
                </div>
            </div>
            <HorizontalSeparator />
        </>
    );
}

function CatalogUserItem({ item = {} }) {
    return (
        <>
            <div className="catalog-item" key={item.id}>
                <div className="catalog-item-content">
                    <Title text={`${item.surname} ${item.firstName} ${item.patronymic}`} />
                    <Subtitle text={item.login} />
                    <Subtitle text={item.contactInformation} />
                </div>
                <div style={{ display: 'flex', marginLeft: 'auto' }}>
                    <div className="catalog-item-menu">
                        <Button text="Edit" />
                        <Button text="Delete" />
                    </div>
                </div>
            </div>
            <HorizontalSeparator />
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
        data.map(el => (getCatalogItemRender(el)))
    );
}
const MainCatalog = connect(makeMapStateToProps)(
    Catalog
);

export default MainCatalog;