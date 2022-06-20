const LabeledTextInput = ({label, value, setState, setAppState}) => {
    return (
        <div>
            <label>{label}</label>
            <input 
                type='text'
                name={label.toLowerCase()} 
                value={value} 
                onChange={e => {setState(e.target.value)}} 
                onBlur={e => {setAppState(prevState => ({...prevState, [e.target.name] : e.target.value}))}}
            />
        </div>
    );
};

export default LabeledTextInput;