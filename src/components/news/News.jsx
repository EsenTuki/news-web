import { useContext, useState } from 'react';
import { ContextApp } from '../../reducers/newsReducer';
import Paginator from '../paginator/Paginator';
import Card from './card/Card';
import './news.css';

let News = () => {
    const { state: { news }, dispatch } = useContext(ContextApp)

    const [value, setValue] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [newsPerPage] = useState(6)

    let searchInput = news.filter(item => {
        return item.title.toLowerCase().includes(value.toLowerCase())
    })

    let lastNewsIndex = currentPage * newsPerPage
    let firstNewsIndex = lastNewsIndex - newsPerPage
    let currentNews = searchInput.slice(firstNewsIndex, lastNewsIndex)
    
    let paginate = pageNumber => setCurrentPage(pageNumber)

    const truncateDescription = (text) =>
        text.length > 150 ? `${text.substring(0, 150)}...` : text;

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
                {currentNews.map((item) => {
                    return (
                        <Card
                            item={item} key={item.id}
                            truncateDescription={truncateDescription}
                        />
                    )
                })}
            </div>
            <Paginator
                newsPerPage={newsPerPage}
                totalNews={searchInput.length}
                paginate={paginate}
            />
        </div>
    );
}

export default News;
