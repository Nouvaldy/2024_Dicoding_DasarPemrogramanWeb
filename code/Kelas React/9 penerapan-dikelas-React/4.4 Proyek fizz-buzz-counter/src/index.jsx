import React from 'react';
import { createRoot } from 'react-dom/client';

function CounterDisplay({ count }) {
    if (count === 0) {
        return <p>{count}</p>;
    }

    if (count % 3 === 0 && count % 5 === 0) {
        return <p>FizzBuzz</p>;
    }

    if (count % 3 === 0) {
        return <p>Fizz</p>;
    }

    if (count % 5 === 0) {
        return <p>Buzz</p>;
    }

    return <p>{count}</p>;
}

function IncreaseButton({ increase }) {
    return (
        <div>
            <button onClick={increase}>+1</button>
        </div>
    );
}

function ResetButton({ reset }) {
    return (
        <div>
            <button onClick={reset}>reset</button>
        </div>
    );
}

//Extends artinya CounterApp adalah sub-class dari React.Component
class CounterApp extends React.Component {

    //Constructor buat menginisialisasi properti
    constructor(props) {

        // Memanggil semua properti2 super-class
        super(props);

        // inisialisasi nilai count di dalam this.state
        this.state = {
            count:0
        };

        //binding event handler
        this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
        this.onResetEventHandler = this.onResetEventHandler.bind(this);
    }

    //Event handler increse
    onIncreaseEventHandler() {
        this.setState((previousState) => {
            return {
                count: previousState.count + 1
            };
        });
    }

    //Event handler reset
    onResetEventHandler() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }
    
    //return harus di dalam method render
    render() {
        return (
        <div>
            <IncreaseButton increase={this.onIncreaseEventHandler}/>
            <CounterDisplay count={this.state.count}/>
            <ResetButton reset={this.onResetEventHandler}/>
        </div>
        );
    }
}
 
const root = createRoot(document.getElementById('root'));
root.render(<CounterApp />);