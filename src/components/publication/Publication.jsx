let Publication = (props) => {
    let item = {
        source: {
            id: 1,
            name: "Medium"
        },
        author: "insider@insider.com (Emily McDermott)",
        title: "I've made $210,000 in less than 2 years selling spreadsheet templates on Etsy. Here are 5 easy-to-follow tips for making sales.",
        description: "Emily McDermott sells spreadsheet templates on her Etsy shop. She shares her best tips for getting your shop noticed on the platform",
        url: "https://emily-mcdermott.medium.com/how-ive-made-280k-selling-spreadsheets-on-etsy-51b0759a9465",
        urlToImage: "https://i.insider.com/63ea0ad196242f0019e88aed?width=1200&format=jpeg",
        publishedAt: "2023-02-13T10:48:56Z",
        content: "In under two years, I've made CA$280,600 or around $210,000 on Etsy selling spreadsheet templates for Google Sheets and Excel.\r\nI'm not a spreadsheet expert by any means, but I do know how to find di… [+4490 chars]"
    }
    return (
        <div className="container">
            <h1 style={{borderBottom:"1px solid #ddd"}}><b>{item.title}</b></h1>
            <img style={{width:"40%"}} src={item.urlToImage}/>
            <p style={{fontSize:"20px"}}>{item.content}</p>
            <div>
                <div>
                    <textarea/>
                </div>
                <div>
                    Comments
                </div>

            </div>
        </div>
    );
}

export default Publication;
