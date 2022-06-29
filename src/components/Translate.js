



import React, { useState } from 'react'
import Dropdown from './Dropdown'
import Convert from './Convert';
const KEY = `AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM`;
const options = [
    {
        label: 'afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'hindi',
        value: 'hi'
    }
]

const Translate = () => {
    const [language, setLanguage] = useState(options[0])
    const [text, setTExt] = useState()
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="">Enter Text</label>
                    <input type="text" value={text} onChange={(e) => setTExt(e.target.value)} />

                </div>
            </div>
            <Dropdown options={options} selected={language}
                onSelectedChange={setLanguage} headertopic='Select language' />
            <hr />
            <h3 className='ui header'>Output</h3>
            <Convert text={text} language={language} />

        </div>
    )
}

export default Translate
