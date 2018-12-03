import React, {Component} from 'react';
import Layout from "../../hocs/Layout/Layout";
import BurgerBuilder from "../BurgerBuilder/BurgerBuilder";

class App extends Component {
    render() {
        return (
            <Layout>
                <BurgerBuilder/>
            </Layout>
        );
    }
}

export default App;
