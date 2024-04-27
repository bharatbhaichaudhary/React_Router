import { useState } from "react";
import '../COMPO/form.css'

function Form(){
    const [input, setInput] = useState({
        id:"",
        UserName:"",
        Email:"",
        addres:{
            Street:"",
            Suite:"",
            City:"",
            ZipCode:"",
            Let:"",
            Ing:"",
        },
        phone:"",
        Website:"",
    })

    function alueinput(e){
        let value = e.target.value;
        let name = e.target.name;
        setInput({...input,[name]:value})
    }
    function addinput(e){
        let value = e.target.value;
        let name = e.target.name;
        setInput({...input,addres:{...input.addres,[name]:value}})
    }
   function savedata(){
    
console.log(input);
   }
    return(
            <div className="form">
                <div className="input">
                    <label>id:</label>
                    <input type="text" name="" onChange={alueinput} />
                </div>

                <div className="input">
                    <label>UserName:</label>
                    <input type="text" name="" onChange={alueinput} />
                </div>

                <div className="input">
                    <label>Email:</label>
                    <input type="text" name="" onChange={alueinput} />
                </div>

                <div className="input">
                    <label>Street:</label>
                    <input type="text" name="" onChange={addinput} />
                </div>

                <div className="input">
                    <label>Suite:</label>
                    <input type="text" name="" onChange={addinput} />
                </div>

                <div className="input">
                    <label>City:</label>
                    <input type="text" name="" onChange={addinput} />
                </div>

                <div className="input">
                    <label>ZipCode:</label>
                    <input type="text" name="" onChange={addinput} />
                </div>

                <div className="input">
                    <label>Let:</label>
                    <input type="text" name="" onChange={addinput} />
                </div>

                <div className="input">
                    <label>Ing:</label>
                    <input type="text" name="" onChange={addinput} />
                </div>

                <div className="input">
                    <label>Phone:</label>
                    <input type="text" name="" onChange={alueinput} />
                </div>
                <div className="input">
                    <label>Website:</label>
                    <input type="text" name="" onChange={alueinput} />
                </div>
                <div className="form_btn">
                    <button onClick={savedata}>Submit</button>
                </div>
            </div>
    )
}

export default Form