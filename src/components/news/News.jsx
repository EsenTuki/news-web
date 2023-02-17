import { useContext, useEffect, useState } from 'react';
import { ContextApp, GET_NEWS } from '../../reducers/newsReducer';
import Card from './card/Card';
import './news.css';

let News = () => {
    
    const { state,dispatch } = useContext(ContextApp)

    let [value, setValue] = useState('')

    const truncateDescription = (text) =>
        text.length > 150 ? `${text.substring(0, 150)}...` : text;

    let searchInpute = state.news.filter(item => {
        return item.title.toLowerCase().includes(value.toLowerCase())
    })
    return (
        <div>
            <div className='container'>
                <form className="search-form">
                    <input
                        className='serch-input'
                        placeholder='Search...'
                        onChange={(event) => { setValue(event.target.value) }}
                    />
                </form>
            </div>
            <div className='news-wrapper'>
                {searchInpute.map((item) => {
                    return (
                        <Card item={item} key={item.id} truncateDescription={truncateDescription} />
                    )
                })}
            </div>
            <div>
                pagination
            </div>
        </div>
    );
}

export default News;
