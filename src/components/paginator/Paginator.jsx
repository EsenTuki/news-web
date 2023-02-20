import './paginator.css'

let Paginator = ({newsPerPage, totalNews, paginate}) => {
    const pageNumbers = []

    for(let i = 1; i<= Math.ceil(totalNews/newsPerPage); i++ ){
        pageNumbers.push(i)
    }

    return(
        <div>
            <ul className="pagination">
                {
                    pageNumbers.map(number =>(
                        <li className="page-item" key={number}>
                            <a  className="page-link" onClick={()=>paginate(number)}>
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Paginator