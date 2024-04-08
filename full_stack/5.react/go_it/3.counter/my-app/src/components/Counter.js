import React from 'react';

export class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 0
        };

        // // Привязываем методы к текущему экземпляру
        // this.decreaseTheValueByOne = this.decreaseTheValueByOne.bind(this);
        // this.increaseTheValueByOne = this.increaseTheValueByOne.bind(this);
    }

    decreaseTheValueByOne=()=> {
        this.setState({ value: this.state.value - 1 });
    }

    increaseTheValueByOne=()=> {
        this.setState({ value: this.state.value + 1 });
    }

    render() {
        return (
            <div>
                <button onClick={this.increaseTheValueByOne}>+1</button>
                <button onClick={this.decreaseTheValueByOne}>-1</button>
                <p>Текущее значение: {this.state.value}</p>
            </div>
        );
    }
}
