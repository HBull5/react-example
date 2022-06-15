const LabeledTextInput = ({label, setState}) => {
    const updateAppState = (key, value) => {
        setState(prevState => ({
            ...prevState, 
            [key] : value
        }));
    }

    return (
        <div>
            <label>{label}</label>
            <input type='text' name={label.toLowerCase()} onBlur={e => {updateAppState(e.target.name, e.target.value)}} />
        </div>
    );
};

export default LabeledTextInput;