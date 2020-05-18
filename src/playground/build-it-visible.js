
class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.toggleVisibility =  this.toggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }
    toggleVisibility(){
        this.setState((prevState)=>{
            return {
                visibility:!prevState.visibility
            }
        })
    }
    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisibility}>{this.state.visibility?'show details':'hide details'}</button>
                {this.state.visibility && <p>Hey, these are some details you can now see!</p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle/>,document.getElementById('app'))


//----------------------------------------------------------------------------------------- OLD CODE----------------------------------------------------------------------------------
// let buttonClicked = false

// const toggleVisibility = ()=>{
//     buttonClicked = !buttonClicked
//     render()
// }

// const appRoot = document.getElementById('app')


// const render = ()=>{
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>{buttonClicked?'hide details':'show details'}</button>
//             {buttonClicked && <p>Hey, these are some details you can now see!</p>}
//         </div>
//     )

//     ReactDOM.render(template,appRoot)
// }

// render()