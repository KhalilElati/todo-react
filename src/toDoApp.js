import React from 'react'
// import O from './o'

class ToDoApp extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
            myInput:"",
            
            Text:[
            
        ],
            
           
            
            
        }
        // let output=this.state.Text.text
    }
    

    handleChange=(event)=>{
        // this.state.Text.push(event.target.value)
        this.setState({
        myInput:event.target.value
        })
      

    }
    
    click=()=>{
        
        this.setState({
            Text:[...this.state.Text,{text:this.state.myInput,isComplete:false}],
            myInput:''
           
            // clicked:[...this.state.clicked,false]
        })
       
        
        
        // this.state.Text=[...this.state.Text,this.state.myInput]
        // this.state.clicked=[...this.state.Text,false]
        // // console.log('aa')
        
        
    }
    complete=(i)=>{
        this.setState({
            Text:this.state.Text.map((el,j)=>
                
                 (j===i) ?{...el,isComplete:!el.isComplete}:el
                    // el.isComplete=!el.isComplete
                
            )
        })
       
        // this.setState({
        //     Text:this.state.Text.map((el,j)=>{
        //         if (i==j){
        //             el.isComplete=!el.isComplete
        //         }
        //      })
        // })
        
    
        
    }
    clear=(i)=>{
        this.setState({
            Text:this.state.Text.filter((el,j)=>

                j!==i
            )
        })
        
    }
    // butt=(event)=>{
    //     this.state.clicked.map((e,j)=>{e=!e})
    // return this.state.clicked
    // }
    
    // aa=()=>{
    //     clicked[i]=!clicked[i]
    // }
    render(){
        return (
            <div>
                <input type="text" onChange={this.handleChange} value={this.state.myInput}/>
                <input type="button" onClick={this.click} value="Add"/>
                {this.state.Text.map((e,i)=>{ 
                    console.log(e.isComplete)
                    
                    return(
                <div key={i}>
                    <button type="button" style={{}} onClick={()=>this.complete(i)} >{e.isComplete ?'Undo':'complete'}</button>
                    <button type="button" onClick={()=>this.clear(i)}>Remove</button>
                    <p style={{ textDecoration: (e.isComplete ?"line-through":"none")}}>{e.text}</p>
                </div>)})}
             
                
                
               
            </div>
        )
    }


}
export default ToDoApp