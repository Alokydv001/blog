import { useState } from 'react';
import './App.css';

function Forms() {
    const [inputFields, setInputFields] = useState([
        { name: '', age: '' }
    ])
    const submit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="App">
            <form>
                <h1>this is form</h1>
                {inputFields.map((input, index) => {
                    return (

                        <div key={index}>

                            <input
                                name='name'
                                placeholder='Name'

                            />
                            <button onClick={submit}>Submit</button>

                            <input
                                name='age'
                                placeholder='Age'

                            />
                            <button onClick={submit}>Submit</button>

                            <input
                                email='email'
                                placeholder='email'

                            />
                            <button onClick={submit}>Submit</button>

                        </div>
                    )
                })}
            </form>
        </div>
    );
}

export default Forms;

