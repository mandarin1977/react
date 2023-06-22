import React from "react";
import $ from "jquery";

class Footer extends React.Component {
    componentDidMount() {
$('header').mousedown(function (){
    console.log('snfma');
});
    }

    render(){
        return(
            <div className="Footer">
                <footer>
                    sdfafsd
                </footer>
            </div>
        );
    }
}


export default Footer;