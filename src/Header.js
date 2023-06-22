import React from "react";
import $ from "jquery";
import './css/Header.css';

class Header extends React.Component {
    componentDidMount() {
$('header').mousedown(function (){
    console.log('snfma');
});
    }

    render(){
        return(
            <div className="header">
                <header>
                    safasdfadsf
                </header>
            </div>
        );
    }
}


export default Header;