import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getWords, deleteWords, IWord } from './../../actions/greActions';
import axios from 'axios';

const api = {
    getWords: () => axios.get("http://localhost:3001/api/words/getall")
}

const ListItem = (props: any) => <li>{props.value}</li>;

interface IGreContainerProps {
    words: IWord[];
    getWords: () => void;
    deleteWords: (words: IWord[]) => void;
}

interface IGreContainerState {
    axdata: IWord[];
}

export class GreContainer extends Component<IGreContainerProps, IGreContainerState> {
    constructor(props: any) {
        super(props);
        this.state = {
            axdata: []
        }
        console.log("ctor ran");
    }

    test = () => {
        this.props.getWords();
    }

    componentDidMount = async () => {

        let response = await api.getWords();
        const { data } = response;
        this.setState({ axdata: data });
    }

    ListData = () => {
        const items = this.state.axdata.map(x => <ListItem key={x._id} value={x.word} />);
        return items;
    }

    render() {

        let data = <ul> {this.props.words.length > 0 && this.props.words.map(x => <li>{x.word}</li>)}</ul>;

        return (
            <div>
                <button onClick={this.test} >Test</button>
                {this.props.words.length > 0 && this.props.words[0].word}
                {data}
                <br />
                <ul>
                    {this.ListData()}
                </ul>
            </div >
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        words: state.gre.words
    }
};

const mapDispatchToProps = {
    getWords,
    deleteWords
}

export default connect(mapStateToProps, mapDispatchToProps)(GreContainer)
