import React, {MouseEvent} from 'react';
import './App.css';
import {Button} from "./components/Button";

function App() {

    // const myFirstSubscriber = () => {
    //     console.log("Hello! I'm Yana.")
    // }
    //
    // const mySecondSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log("Hello! I'm Daniel.")
    // }

    // const onClickHandler = (name:string)=> {
    //     console.log(name)
    // }

    // const foo1 = () => {
    //     console.log(100200)
    // }
    //
    // const foo2 = (num: number) => {
    //     console.log(num)
    // }

    const Button1Foo = (name: string, age: number, address: string) => {
        console.log(name, age, address)

    }

    const Button2Foo = (name: string) => {
        console.log(name)
    }

    const Button3Foo = () => {
        console.log("Just a button")
    }

    return (
        <div className="App">

            {/*onClickEvent*/}

            {/*<button onClick={(event) => {*/}
            {/*    console.log("Hello")*/}
            {/*}}>MyYouTubeChannel-1*/}
            {/*</button>*/}

            {/*<button onClick={myFirstSubscriber}>MyYouTubeChannel-1*/}
            {/*</button>*/}

            {/*<button onClick={foo1}>1</button>*/}
            {/*<button onClick={() => foo2(100200)}>2</button>*/}

            {/*<button onClick={(event) => onClickHandler("Yana")}>MyYouTubeChannel-1*/}
            {/*</button>*/}

            {/*<button onClick={(event) => onClickHandler("Daniel")}>MyYouTubeChannel-2*/}
            {/*</button>*/}

            {/*Universal Button*/}

            {/*ссылка на функцию не может ничего передать, может пережать только другая функция*/}

            <Button name={"MyYouTubeChannel-1"} callBack={()=> Button1Foo("Yana", 35, "Vilnius")}/>
            <Button name={"MyYouTubeChannel-2"} callBack={()=> Button2Foo("Daniel")}/>
            <Button name={"Just a button"} callBack={Button3Foo}/>
            
        </div>
    );
}

export default App;
