import React from 'react';
import { connect } from "react-redux";
import './catalog.scss';
import { getContent } from '../../selectors/tests';
import { Title, Subtitle, Button, HorizontalSeparator, VerticalSeparator } from '../../components';
import { testApi, userApi } from '../../services/api';
import { getisAuth, getisAdmin } from '../../selectors/user';

function getCatalogItemRender(item = {}, isAdmin= false, isAuth=false) {
    switch (item.itemType) {
        case 'test':
            return (<CatalogTestItem item={item} key={item.id} isAdmin={isAdmin} isAuth={isAuth}/>);
        case 'user':
            return (<CatalogUserItem item={item} key={item.id} />);
        default: return (<div></div>);
    }
};

function CatalogTestItem({ item = {}, isAdmin, isAuth }) {
    return (
        <>
            <div className="catalog-item">
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
                        {isAuth ? <Button text="Pass" />: null}
                        {/* {isAdmin ? <Button text="Edit" /> : null} */}
                        {isAdmin ? <Button text="Delete" onClick={
                            () => {
                                const answ = window.confirm("Are you shure you want to delete it?");
                                if (answ) {
                                    testApi.deleteTest(item.id);
                                }
                            }}
                        /> : null}
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
                        {/* <Button text="Edit" /> */}
                        <Button text="Delete" onClick={
                            () => {
                                const answ = window.confirm("Are you shure you want to delete it?");
                                if (answ) {
                                    userApi.deleteUser(item.id);
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
            <HorizontalSeparator />
        </>
    );
}

const makeMapStateToProps = () => {
    const content = getContent();
    const isAdmin = getisAdmin();
    const isAuth = getisAuth();
    const mapStateToProps = (state) => {
        return {
            data: content(state),
            isAdmin: isAdmin(state),
            isAuth: isAuth(state),
        };
    };
    return mapStateToProps;
};

const Catalog = ({ data = [], isAdmin=false, isAuth=false }) => {
    return (
        data.map(el => (getCatalogItemRender(el, isAdmin,isAuth)))
    );
}
const MainCatalog = connect(makeMapStateToProps)(
    Catalog
);

export default MainCatalog;