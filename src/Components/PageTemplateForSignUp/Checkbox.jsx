import React from 'react';
function Checkbox() {
    const [checked, setChecked] = React.useState(false);

    const handleOnChange = (event) => {
        setChecked(event.target.checked);
    }
    return(
        <div >
            <label style={{fontSize: 'small'}}>
                <input type="checkbox" checked={checked} onChange={handleOnChange}
                />
                Remember me
            </label>
        </div>
    )
}
export default Checkbox;