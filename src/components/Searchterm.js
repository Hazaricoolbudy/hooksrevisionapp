import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Searchterm = () => {
    const [term, setTerm] = useState('program')
    const [results, setResults] = useState([])


    useEffect(() => {
        const search = async () => {
            const response = await axios.get('https://en.wikipedia.org/w/api.php',
                {
                    params: {
                        action: 'query',
                        list: 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: term
                    }
                })
            setResults(response.data.query.search)



        }
        if (term && !results.length) {
            search()
        }
        else {
            const setTimeoutId = setTimeout(() => {
                if (term) {

                    search()
                }
            }, 1000)

            return () => {
                clearTimeout(setTimeoutId);
            }
        }



    }, [term, results.length])
    const renderResults = results.map((result) => {
        return (
            <div className='item' key={result.pageid}>
                <div className="right floated content">
                    <a className='ui button'
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a></div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>

            </div>
        )
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="entersearch">Enter Search term</label>
                    <input
                        type="text"
                        className='input'
                        id='entersearch'
                        value={term}
                        onChange={e => {
                            setTerm(e.target.value)

                        }} />


                </div>
            </div>
            <div className="ui celled list">
                {renderResults}
            </div>

        </div>
    )
}

export default Searchterm
