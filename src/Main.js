import React from "react";
import $ from "jquery";

class Main extends React.Component {
    componentDidMount() {
$('header').mousedown(function (){
    console.log('snfma');
});
    }

    render(){
        return(
            <div className="Main">
                fsdf
            </div>
        );
    }
}


export default Main;