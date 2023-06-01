function Todo({todo,index,remove}){
    function handle(){
        remove(index);
    }
    return <div className='todo' onclick={handle}>{todo.text} (-)</div>
       
}