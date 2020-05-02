import React from 'react';
import { Input, Subtitle, Button } from '../../components';

export class AddTestContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            variant: '',
            answer: ''
        };
        this.variants = [];
        this.answers = [];
    }

    addVariantHandler = () => {
        this.variants.push(this.state.variant);
        this.setState({ variant: '' });
    };

    addAnswerHandler = () => {
        this.answers.push(this.state.answer);
        this.setState({ answer: '' });
    };

    addQuestionHandler = () => {
        if (this.state.question && this.variants.length && this.answers.length) {
            this.props.addQuestionHandler({
                question: this.state.question,
                variants: this.variants,
                answers: this.answers
            });
            this.setState({ question: '' });
            this.variants = [];
            this.answers = [];
        }
        else {
            window.alert('All fields of question must be filled');
        }
    };

    inputHandler = (e) => {
        e.preventDefault();
        const { id, value } = e.currentTarget;
        this.setState({ [id]: value });
    };

    render() {
        console.log('STATE: ', this.state);
        const { question, variant, answer } = this.state;
        return (
            <div className="add-test-content" style={{ paddingBottom: '10px' }}>
                <Input labelText="Question: " withoutBoorder={true} idName="question" onChange={this.inputHandler} value={question} />
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Input labelText="Variants: " withoutBoorder={true} idName="variant" onChange={this.inputHandler} value={variant} />
                    <Button text="+" styleName="circle" onClick={this.addVariantHandler} />
                </div>
                <div>
                    {this.variants.map((el, ind) => (<Subtitle key={ind} text={`${ind + 1}) ${el}`} />))}

                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '10px' }}>
                    <Input labelText="Answer: " withoutBoorder={true} idName="answer" onChange={this.inputHandler} value={answer} />
                    <Button text="+" styleName="circle" onClick={this.addAnswerHandler} />
                </div>
                <div>
                    {this.answers.map((el, ind) => (<Subtitle key={ind} text={el} />))}
                </div>
                <Button text="Add question" styleName="primary" onClick={this.addQuestionHandler} />
            </div>
        );
    }
}