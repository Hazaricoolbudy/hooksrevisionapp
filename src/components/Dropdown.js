import React, { useEffect, useState, useRef } from 'react'

const Dropdown = ({ options, selected, onSelectedChange, headertopic }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef()
    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)) {
                return;

            }
            setOpen(false);
        }
        document.body.addEventListener('click', onBodyClick)
        return () => {
            document.body.removeEventListener('click', onBodyClick)
        }
    }, [])
    const renderOptions = options.map((option) => {
        return (
            <div key={option.value}
                onClick={() => onSelectedChange(option)}
                className='item'>
                {option.label}
            </div>
        )
    })
    console.log(ref.current);
    return (
        <div>
            <div ref={ref} className="ui form">
                <div className="field">
                    <label htmlFor="" className="label">{headertopic}</label>
                    <div onClick={() => setOpen(!open)}
                        className={`ui selection dropdown ${open ? ' visible active' : ''}`}>
                        <i className="dropdown icon"></i>
                        <div className="text">{selected.label}</div>
                        <div className={`menu ${open ? "visible transition" : ''}`}>{renderOptions}</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dropdown
