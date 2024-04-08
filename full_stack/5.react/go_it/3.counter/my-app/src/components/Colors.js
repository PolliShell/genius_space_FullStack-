import React from "react";

export class Colors extends React.Component{
constructor() {
    super();
    // this.state={
    //     color:""
    // }
    this.buttonRef = React.createRef();
}
    setColor=()=>{
        this.buttonRef.current.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
    }
    render() {
    return(
        <div>
<div  ref={this.buttonRef} style={{ width: 200, height: 100, backgroundColor: '#000001' }}></div>
            <button onClick={this.setColor}>Change color</button>
        </div>

    )
    }
}