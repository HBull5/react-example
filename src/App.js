import {useEffect, useRef, useState} from 'react';
import './App.css';
import LabeledTextInput from './components/LabeledTextInput';
import Button from './components/Button';

function App() {
    const data = useRef(document.getElementById('FIELD_555'));
    const [state, setState] = useState({});

    const resetState = e => {
        e.preventDefault();
        const inputs = document.querySelectorAll('input');
        for (const input of inputs) {
            input.value = '';
        }
        setState({});
    };

    useEffect(() => {
        data.current.value = JSON.stringify(state);
    }, [state]);

    return (
        <div>
            <LabeledTextInput label='Name' setState={setState} />
            <LabeledTextInput label='Title' setState={setState} />
            <LabeledTextInput label='Company' setState={setState} />
            <Button text='Reset' callback={resetState} />
        </div>
    );
}

export default App;
