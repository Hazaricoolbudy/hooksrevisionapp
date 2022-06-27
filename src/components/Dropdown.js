import React from 'react'

const Dropdown = ({ options, selected, onSelectedChange }) => {
    const renderOptions = options.map((option) => {
        return (
            <div key={option.value}
                onClick={() => onSelectedChange(option)}
                className='item'>
                {option.label}
            </div>
        )
    })
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="" className="label">Select a color</label>
                    <div className="ui selection dropdown visible active">
                        <i className="dropdown icon"></i>
                        <div className="text">{selected.label}</div>
                        <div className="menu visible transition">{renderOptions}</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dropdown
