import { Component } from "react/cjs/react.production.min";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";


import decoration from '../../resources/img/vision.png';
//from str 27 to state from state to 28
class App extends Component{
    state = {
        selectedChar: null
    }
//state up
    onCharSelected =(id) =>{
        this.setState({
            selectedChar: id
        })
    }
    render() {
        return (
            <div className="app">
                <AppHeader/>
                <main>
                    <RandomChar/>
                    <div className="char__content">
                        <CharList onCharSelected={this.onCharSelected}/>
                        <CharInfo charID={this.state.selectedChar}/>
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision"/>
                </main>
            </div>
        )
    }
}

export default App;