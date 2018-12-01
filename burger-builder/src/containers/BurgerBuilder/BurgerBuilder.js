import React, {Component} from 'react';
import Burger from "../../components/Burger/Burger";


class BurgerBuilder extends Component {

    render() {
        return (
            <>
                <div>Build Controls</div>
                <Burger/>
            </>
        );
    }
}

export default BurgerBuilder;