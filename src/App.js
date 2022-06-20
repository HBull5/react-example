import {useEffect, useRef, useState} from 'react';
import './App.css';
import LabeledTextInput from './components/LabeledTextInput';
import Button from './components/Button';

function App() {
    const data = useRef(document.getElementById('FIELD_555'));
    const [appState, setAppState] = useState({});
    const [nameState, setNameState] = useState('');
    const [titleState, setTitleState] = useState('');
    const [companyState, setCompanyState] = useState('');

    const resetState = e => {
        e.preventDefault();
        setNameState('');
        setTitleState('');
        setCompanyState('');
        setAppState({});
    };

    useEffect(() => {
        data.current.value = JSON.stringify(appState);
    }, [appState]);

    return (
        <div>
            <LabeledTextInput label='Name' value={nameState} setState={setNameState} setAppState={setAppState} />
            <LabeledTextInput label='Title' value={titleState} setState={setTitleState} setAppState={setAppState} />
            <LabeledTextInput label='Company' value={companyState} setState={setCompanyState} setAppState={setAppState} />
            <Button text='Reset' callback={resetState} />
        </div>
    );
}

export default App;
