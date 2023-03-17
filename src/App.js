import React from "react";
import logo from "./omnexis.png";
import "./App.css"
// Functional Component
// function App() {
    // return (
        // <div className="App">
            {/* <header> */}
                {/* <h1>Functional React Component</h1> */}
                {/* <p>This is an example of functional React Componet</p> */}
                {/* <img src={logo} width="200" height="200" className="App-logo"></img> */}
            {/* </header> */}
        {/* </div> */}
    // );
// }
// Class based Component
class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            newItem: "",
            list: []
        }
    }
    addItem(todoValue){
        if(todoValue!=="") {
            const newItem = {
                id:Date.now(),
                value:todoValue,
                isDone:false
            };
            const list = [...this.state.list];
            list.push(newItem);

            this.setState({
                list:list,
                newItem:""
            });
        }
    }
    deleteItem(id) {
        const list = [...this.state.list];
        const updatedlist = list.filter(item => item.id!==id);
        this.setState({list:updatedlist})
    }
    updateInput(input) {
        this.setState({newItem:input});

    }
    render() {
        return(
            <div>
                <img src={logo} width="200" height="200" className="logo"></img>
                <h1 className="app-title">Omnexis Tasks</h1>
                <div className="container">
                    Add an Item....
                    <br/>
                    <input type="text" className="input-text" placeholder="Write a Todo" required value={this.state.newItem} onChange={e=>this.updateInput(e.target.value)}/>
                    <button className="add-btn" onClick={()=> this.addItem(this.state.newItem)} disabled={!this.state.newItem.length}>Add Todo</button>
                    <div className="list">
                        <ul>
                            {this.state.list.map(item=>{
                                return(<li key={item.id}>
                                    <input type="checkbox" name="idDone" checked={item.isDone} onChange={()=>{}}/>
                                    {item.value}
                                    <button className="btn" onClick={()=>this.deleteItem(item.id)}>Delete</button>
                                </li>);
                            })}
                            <li>
                                <input type="checkbox" name="" id=""/>
                                Meditate
                                <button className="btn">Delete</button>
                            </li>
                        </ul>
                    </div>
                </div> 
            </div>
        )
    }
}
export default App;