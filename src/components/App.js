import React, { Component } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Main from 'components/Main';
import TeamComm from 'components/TeamComm';
import About from 'components/About';
import { Route, Switch } from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <div>
                <Header />
                     <Switch>
                        <Route exact path="/" component={Main}/>
                        <Route path="/about" component={About} />
                        <Route path="/teamcomm" component={TeamComm} />
                     </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;
