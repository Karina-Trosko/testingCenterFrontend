import React from 'react';
import { Input, ComboBox, Subtitle, Title, Button } from '../../components';
import { testApi } from '../../services/api';
import './addTest.scss';
import { AddTestContent } from './addContent';
import { Question } from '../questions/question';

export class AddTestForm extends React.Component {
    defaultValues = {
        name: '',
        numberOfQuestions: '',
        description: '',
        duration: '',
        categoryId: '',
        typeId: '',
        userId: '',
        questions: [],
        answer: '',
        result: '',
        results: [],
        answers: [],
    };
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            numberOfQuestions: '',
            description: '',
            duration: '',
            categoryId: '',
            typeId: '',
            userId: '',
            questions: [],
            answer: '',
            result: '',
            results: [],
            answers: [],
        };
    }

    inputHandler = (e) => {
        e.preventDefault();
        const { id, value } = e.currentTarget;
        this.setState({ [id]: value });
    };

    addQuestionHandler = (question) => {
        this.setState({ questions: [...this.state.questions, question] });
        console.log('QUEST: ', this.state.questions);
    };

    addResultHandler = () => {
        const { result, answer } = this.state;
        if (result && answer)
            this.setState({ results: [...this.state.results, { result, numberOfRightAnswers: answer }] });
        else {
            window.alert('All fields of result must be filled');
        }
    };

    addTestHandler = () => {
        const { name,
            numberOfQuestions,
            description,
            duration,
            categoryId=null,
            typeId=null,
            userId=null,
            questions,
            results } = this.state;
        const contentsLink = (new Date()).getTime();
        if(name && +numberOfQuestions>0 && description && +duration>=0 && categoryId && typeId && questions.length && results.length) {
        const postObj = {
            name,
            numberOfQuestions,
            description,
            contentsLink,
            duration,
            categoryId,
            typeId,
            userId,
            content: JSON.stringify({
                contentsLink,
                content: questions,
                resultLogic: results,
            })
        };
        console.log('OBJ: ', postObj);
        this.setState({ ...this.defaultValues });
        testApi.addTest(postObj);
        }
        else{
            window.alert('All fields must be filled');
        }
    };

    render() {
        return (
            <>
                <div className="add-test-form">
                    <Input labelText="Name: " idName="name" onChange={this.inputHandler} value={this.state.name} />
                    <Input labelText="Number of questions: " idName="numberOfQuestions" onChange={this.inputHandler} type="number" value={this.state.numberOfQuestions}/>
                    <Input labelText="Description: " idName="description" onChange={this.inputHandler} value={this.state.description}/>
                    <Input labelText="Duration: " idName="duration" onChange={this.inputHandler} type="number" value={this.state.duration}/>
                    <ComboBox loadDataFunction={testApi.getTypes} labelText="Types: " idName="typeId" onChange={this.inputHandler} value={this.state.typeId} />
                    <ComboBox loadDataFunction={testApi.getCategories} labelText="Categories: " idName="categoryId" onChange={this.inputHandler} value={this.state.categoryId}/>
                </div>
                <AddTestContent addQuestionHandler={this.addQuestionHandler} />
                <div style={{ margin: '50px', padding: '10px 50px', backgroundColor: 'white' }}>
                    <Title text="Test preview: " />
                    {this.state.questions.map((el, i) => (<Question question={`${i + 1}) ${el.question}`} variants={el.variants} key={i} />))}
                </div>
                <div style={{ margin: '50px', padding: '10px 50px', backgroundColor: 'white' }}>
                    <Title text="Result calculation logic: " />
                    <Input labelText="Result: " idName="result" onChange={this.inputHandler} withoutBoorder={true} value={this.state.result} />
                    <Input labelText="Number of right answers: " idName="answer" onChange={this.inputHandler} withoutBoorder={true} value={this.state.answer} />
                    <Button text="Add result" styleName="primary" onClick={this.addResultHandler} />
                    {this.state.results.map((el, i) => (<Subtitle text={`${el.result}: ${el.numberOfRightAnswers}`} key={i} />))}
                </div>
                <Button text="ADD TEST" onClick={this.addTestHandler} additionalStyle={{  marginBottom: '50px' }}/>
            </>
        );
    }
};