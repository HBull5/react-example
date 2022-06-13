import { useEffect, useRef, useState } from 'react';
import './App.css';
import LabeledTextInput from './components/LabeledTextInput';
import Button from './components/Button';

function App() {
    const data = useRef(document.getElementById('FIELD_555'));
    const [ state, setState ] = useState({});

    const resetState = () => {
        setState({});
    };

    const handleUpdate = (key, value) => {
        setState(prevState => ({
            ...prevState,
            [key]: value
        }));
    };

    useEffect(() => {
        data.current.value = JSON.stringify(state);
    }, [state]);

    return (
        <div>
            <LabeledTextInput label='Name' handleUpdate={handleUpdate} />
            <LabeledTextInput label='Title' handleUpdate={handleUpdate} />
            <LabeledTextInput label='Company' handleUpdate={handleUpdate} />
            <Button text='Reset' callback={resetState} />
        </div>
    );
}

export default App;
