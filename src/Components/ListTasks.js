import { useEffect, useState } from "react";


function ListTasks({ tasks, setTasks }){

    const [edit, setEdit] = useState(null);
    const [value, setValue] = useState('');


    const handlerChange = (event) => { // Функция изменения статуса задачи

        const newTasks = [...tasks].map(item => {

            if(item.id.toString() === event.target.dataset.id){
                item.checked = event.target.checked;

            }

            return item;
        });

        setTasks(newTasks);
    }

   const handlerDelTask = (id) =>{ // Функция изменения статуса задачи

        const newDeltasks = [...tasks].filter(item => item.id !== id);
        
        setTasks(newDeltasks);
   }

   const handlerEditTask = (id, text) => { // Функция редактирования  задачи

        setEdit(id);  
        setValue(text);    
   }


   const handlerSaveTask = (id) => { // Функция сохранения отредавктированной задачи задачи

        const newEditTasks = [...tasks].map((item) => {

            if (item.id === id){
                item.text = value;
            }

            return item;
        });

        setTasks(newEditTasks);
        setEdit(null);
   }

//    function handlerKeyPress(e){ // Событие на кнопку "Enter"

//         if (e.key === 'Enter'){
//             handlerSaveTask(ide);
//         }

//         console.log( e.target.dataset.id);
//     }


    return(

        <div className="intro_inner">

            {
                tasks.map((item) => (
                    <div key={item.id} className="tasks_list"> 

                    {
                        edit === item.id ? 
                            <div className="addTask">
                                <button 
                                    onClick={() => handlerSaveTask(item.id)} 
                                    className="btn_add"> 
                                    <img src="./img/plus.svg" className="btn_icon" />
                                </button>

                                <input  type="text"  
                                    data-id={item.id}
                                    value={value} 
                                    onChange={(e) => setValue(e.target.value)}
                                    // onKeyDown={handlerKeyPress}
                                    className="todo_input"
                                />  
                            </div> :

                            
                        <div  className="task"> 
                        
                            <div className="task_checkbox">
                                <input 
                                    type="checkbox"
                                    data-id={item.id}
                                    onChange={(e) => handlerChange(e)} 
                                    className="checkbox"  
                                    id={item.id}
                                />

                                <label
                                    htmlFor={item.id}
                                    className={item.checked ? "checkbox_label done" : "checkbox_label"}
                                >
                                    {item.text}
                                </label>

                                
                            </div>

                            <div className="btn_edit_del"> 
                                <button 
                                    onClick={() => handlerDelTask(item.id)}
                                    className="btn"
                                > 
                                <img src="./img/del.svg" className="btn_icon"/>
                                </button>
                                <button 
                                    onClick={() => handlerEditTask(item.id, item.text)}
                                    className="btn"
                                > <img src="./img/edit.svg" 
                                    className="btn_icon" />
                                </button>     
                            </div>
                            
                        </div>
                           
                    }

                       
                        
                    </div>
                ))
            }
            
        </div>
    );
}

export default ListTasks;