console.log('App.js is running')

const app = {
    title: 'Indecision App',
    subtitle: 'Put your hands in the hands of a computer',
    options: ['One', 'Two']
}

const onFormSubmit= (e)=>{
    e.preventDefault(); //stops full page refresh on formsubmit
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option)
        e.target.elements.option.value = ''
        renderApp()
    }
}

const removeAll = ()=>{
    app.options = []
    renderApp()
}

const onMakeDecidion = ()=>{
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const appRoot = document.getElementById('app')


const renderApp = ()=>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0? 'Here are your options': 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecidion}>What should I do ?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option)=>{
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot)

}

renderApp()



//--------------------------------------------------------------------------------------- FOR REFERENCE----------------------------------------------------------------------------------
// Create a templeteTwo var JSX expression

// const user = {
//     name: 'Collin',
//     age: 23,
//     location: 'Colva'
// }

// function getLocation(location){
//     if(location){
//         return <p>Location : {location}</p>
//     }
// }

// let count = 0
// const addOne = ()=>{
//     count++
//     console.log('addOne')
//     renderCounterApp()
// }

// const minusOne =  ()=>{
//     count--
//     console.log('minusOne')
//     renderCounterApp()
// }

// const reset = ()=>{
//     count = 0
//     console.log('reset')
//     renderCounterApp()
// }

// const appRoot = document.getElementById('app')



// const renderCounterApp = ()=>{
//     const templateTwo = (
//         <div>
//             <h1> Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot)
    
// }

// renderCounterApp()