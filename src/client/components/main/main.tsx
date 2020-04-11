import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getWords, deleteWords, IWord, IRootState } from './../../actions/greActions';


interface IMainProps {
    words: IWord[];
    getWords: () => void;
}

class Mainc extends Component<IMainProps> {
    constructor(props: any) {
        super(props);
        console.log("ctor ran");
    }

    test = () => {

    }

    render() {
        return (
            <div>
                <button onClick={this.test} >Test</button>
                Hello
            </div>
        )
    }
}

const mapStateToProps = (state: IRootState) => {
    return {
        words: state.gre.words
    }
};

const mapDispatchToProps = {
    getWords,
    deleteWords
}

export default connect(mapStateToProps, mapDispatchToProps)(Mainc)
