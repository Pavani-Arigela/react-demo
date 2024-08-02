let heading=React.createElement("h1",{id:"heading",color:"blue"},"Hello World!!")
// console.log(heading)//returns a object(react element)
let root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)
// Props -- {id:"heading",color:"blue"}-attributes,"Hello World!!children(which goes into tag)"
// children + attributes we pass
// render converts the object into tag and  adds to html DOM


// <div id="parent">
//     <div id="child1">
//         <h1>Hii This is heading</h1>
            // <h1> this is heading 2</h1>

//     </div>
//     <div id="child2">
//         <h1>Hii This is heading</h1>
            // <h1> this is heading 2</h1>

//     </div>

// </div>

// ReactElement (object) ==> HTML(Browser understandable)

const parent=React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child1"},
        [React.createElement("h1",{},"Hii This is heading 1"),React.createElement("h1",{},"this is heading 2")]
    ),
    React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"Hii This is heading 1"),React.createElement("h1",{},"this is heading 2")]
    )]
)
root.render(parent)

//to overcome this huge code jsx is introduced