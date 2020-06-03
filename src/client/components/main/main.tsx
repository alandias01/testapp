import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MaterialLayout } from '../material/layout';
import GreContainer from '../grewords/greContainer';

enum pages {
    MAIN,
    GRE,
    MATERIALLAYOUT
}

interface IMaincProps {

}

interface IMaincState {
    currentPage: pages;
}

class Mainc extends Component<IMaincProps, IMaincState> {
    constructor(props: any) {
        super(props);
        this.state = { currentPage: pages.MAIN };
    }

    getpage = (en: any) => {
        switch (en) {
            case pages.GRE:
                return <GreContainer />;
            case pages.MATERIALLAYOUT:
                return <MaterialLayout />;

            default:
                return <Mainc />;
        }
    }

    mainPage = () => {
        return (
            <div>
                <button onClick={() => this.setState({ currentPage: pages.GRE })}> Gre</ button>
                <button onClick={() => this.setState({ currentPage: pages.MATERIALLAYOUT })}> Layout</ button>
            </div>
        )
    };

    showpage = () => this.state.currentPage === pages.MAIN ? this.mainPage() : this.getpage(this.state.currentPage);

    render() {

        return (
            <div>
                {this.showpage()}
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        words: state.gre.words
    }
};

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Mainc)
