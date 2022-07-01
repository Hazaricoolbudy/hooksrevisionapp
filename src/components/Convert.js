import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
    const [translated, setTranslated] = useState('')
    const [debouncedtext, setDebouncedText] = useState(text)
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text)

        }, 500)
        return () => {
            clearTimeout(timerId)
        }

    }, [text])
    useEffect(() => {
        const doTranslate = async () => {

            const data = await axios.post('https://translation.googleapis.com/language/translate/v2', {

            }, {
                params: {
                    q: debouncedtext,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            })
            setTranslated(data.data.translations[0].translated)
        }
        doTranslate();

    }, [language, debouncedtext])
    return (
        <div>
            <h1 className='ui header'>{translated}</h1>

        </div>
    )
}

export default Convert
