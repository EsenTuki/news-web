import React from "react";

export let ADD_COMMENT = 'ADD-COMMENT'
export let UPDATE_COMMENT = 'UPDATE-COMMENT'

export const initialState = {
    news: [
        {
            id: 1,
            author: "insider@insider.com (Emily McDermott)",
            title: "I've made $210,000 in less than 2 years selling spreadsheet templates on Etsy. Here are 5 easy-to-follow tips for making sales.",
            description: "Emily McDermott sells spreadsheet templates on her Etsy shop. She shares her best tips for getting your shop noticed on the platform",
            url: "https://emily-mcdermott.medium.com/how-ive-made-280k-selling-spreadsheets-on-etsy-51b0759a9465",
            urlToImage: "https://i.insider.com/63ea0ad196242f0019e88aed?width=1200&format=jpeg",
            publishedAt: "2023-02-13T10:48:56Z",
            content: "In under two years, I've made CA$280,600 or around $210,000 on Etsy selling spreadsheet templates for Google Sheets and Excel.\r\nI'm not a spreadsheet expert by any means, but I do know how to find di… [+4490 chars]",
        },
        {
            id: 2,
            author: "Emilie Martin",
            title: "Daily SEO Fix: Investigating Keyword Cannibalization",
            description: "In this Daily SEO Fix edition, we take you through what keyword cannibalization is, how to investigate it on your own website, and how to solve any potential issues your site may have.",
            url: "https://moz.com/blog/daily-seo-fix-investigating-keyword-cannibalization",
            urlToImage: "https://moz.com/images/cms/6042b901d424f8.96940036_2021-04-15-230656.png?w=1200&h=630&q=82&auto=format&fit=crop&dm=1618528016&s=b298c4d810e8e8ad23b1fc18e845f64e",
            publishedAt: "2023-01-23T08:00:00Z",
            content: "Keyword cannibalization occurs when a website has too many similar keywords spread throughout the various pages on that site. This can harm the SEO potential of the pages involved, and can quite ofte… [+1550 chars]"
        },
        {
            id: 3,
            author: "Angie Nikoleychuk",
            title: "Top 7 SEO Keyword Research Tools For Agencies via @sejournal, @Juxtacognition",
            description: "Keyword research can be time-consuming. These tools help you find the data and spot the opportunities for successful SEO campaigns.\nThe post Top 7 SEO Keyword Research Tools For Agencies appeared first on Search Engine Journal.",
            url: "https://www.searchenginejournal.com/seo-tools/seo-agency-tools-keyword-research/",
            urlToImage: "https://cdn.searchenginejournal.com/wp-content/uploads/2023/01/keyword-research-tools-63c7decb1c791-sej.jpg",
            publishedAt: "2023-01-23T10:00:41Z",
            content: "All successful SEO campaigns rely on accurate, comprehensive data. And that process starts with the right keyword research tools.\r\nSure, you can get away with collecting keyword data manually on your… [+16882 chars]"
        },
        {
            id: 4,
            author: "Loren Baker",
            title: "How To Supercharge Your Keyword Research With Powerful Topic Clustering via @sejournal, @lorenbaker",
            description: "Learn 2 different ways to build a better keyword universe for your marketing efforts and drive more traffic to your website.\nThe post How To Supercharge Your Keyword Research With Powerful Topic Clustering appeared first on Search Engine Journal.",
            url: "https://www.searchenginejournal.com/keyword-research-topic-clustering-recap/477910/",
            urlToImage: "https://cdn.searchenginejournal.com/wp-content/uploads/2023/01/featured-1-63d84f0463271-sej.jpg",
            publishedAt: "2023-02-01T08:45:28Z",
            content: "It’s common for marketers to target individual keywords when creating and optimizing content. Still, topic clusters are an even more powerful way to do keyword research.\r\nWith topic clustering, you c… [+3652 chars]"
        },
        {
            id: 5,
            author: null,
            title: "Routes don't look flat enough to me",
            description: "Exploring the slightly tricky problem of flattening reitit routes using multiple different approaches in #clojure",
            url: "https://www.pixelated-noise.com/blog/2023/02/09/flatten-routes/index.html",
            urlToImage: "https://www.pixelated-noise.com/blog/2023/02/09/flatten-routes/meme.jpeg",
            publishedAt: "2023-02-12T09:17:51Z",
            content: "So one approach would be to use run-of-the-mill recursive Clojure to achieve\r\nthis:\r\n(defnflatten-routes-recursive [[path-part &amp; [sec :as rst] :as all]]\r\n (cond (keyword? sec) ; form 1\r\n {path-pa… [+3367 chars]"
        },
        {
            id: 6,
            author: "Abe Connelly",
            title: "Illuminate Your Benched Things with this Death Stranding Lamp",
            description: "[Pinkman] creates a smart RGB table lamp based off of the “Odradek device” robot arm from the video game “Death Stranding”. [Pinkman] adds a XIAO BLE nRF52840 Sense device, with …read more",
            url: "https://hackaday.com/2023/01/29/illuminate-your-benched-things-with-this-death-stranding-lamp/",
            urlToImage: "https://hackaday.com/wp-content/uploads/2023/01/death_stranding_lamp_primary1.png",
            publishedAt: "2023-01-29T09:00:00Z",
            content: "[Pinkman] creates a smart RGB table lamp based off of the “Odradek device” robot arm from the video game “Death Stranding”.\r\n[Pinkman] adds a XIAO BLE nRF52840 Sense device, with Bluetooth support, m… [+1214 chars]"
        },
        {
            id: 7,
            author: "Eduard Coromina",
            title: "How To Get More Traffic By Fixing Keyword Cannibalizations Quickly & Effectively",
            description: "Everyone is creating the same SEO-driven content to rank high on Google. It's time to set yourself apart by repairing SEO cannibalization.\nThe post How To Get More Traffic By Fixing Keyword Cannibalizations Quickly & Effectively appeared first on Search Engin…",
            url: "https://www.searchenginejournal.com/fix-seo-keyword-cannibalizations-dinorank-spa/477313/",
            urlToImage: "https://cdn.searchenginejournal.com/wp-content/uploads/2023/01/featured-63d7fc330bad9-sej.jpg",
            publishedAt: "2023-02-08T06:00:52Z",
            content: "This post was sponsored by DinoRANK. The opinions expressed in this article are the sponsor’s own.\r\nGoogle is a great source of qualified and recurring traffic for your business – that’s a fact.\r\nMan… [+7990 chars]"
        },
        {
            id: 8,
            author: "Myra Nizami",
            title: "How to Make Money on TikTok in 2023: The 15 Best Ways",
            description: "Come up with an amazing meta description that includes the keyword 'how to make money on TikTok",
            url: "https://smallbiztrends.com/2023/01/how-to-make-money-on-tiktok.html",
            urlToImage: "https://media.smallbiztrends.com/2023/01/HV-300-How-to-Make-Money-on-TikTok-in-2023-The-15-Best-Ways.png",
            publishedAt: "2023-01-24T17:00:09Z",
            content: "TikTok is the short video-sharing platform that has taken the internet by storm in recent years and has quickly grown in popularity. The social media platform for short-form videos that span from fif… [+16456 chars]"
        },
        {
            id: 9,
            author: "Lisa Price",
            title: "How to File Taxes for the 2022 Tax Year",
            description: "Come up with an amazing meta description that includes the keyword 'how to file taxes' near the beginning.",
            url: "https://smallbiztrends.com/2023/01/how-to-file-taxes.html",
            urlToImage: "https://media.smallbiztrends.com/2023/01/how-to-file-taxes-for-the-2022-tax-year.png",
            publishedAt: "2023-01-25T14:00:39Z",
            content: "Its said that the longest journey starts with a single step.\r\nHow to file taxes? Whether youre going to file your own taxes, 0r use tax preparation services, your first step before you prepare and fi… [+7976 chars]"
        },
        {
            id: 10,
            author: "Erik Emanuelli",
            title: "Skyrocket Your Google Rankings With These 10 Awesome SEO Copywriting Tips",
            description: "If you want your website to rank higher in Google, you need to start paying attention to your SEO copywriting. In this blog post, we will discuss ten tips that will help you build content that ranks better in search engines. By following these tips, you can s…",
            url: "https://readwrite.com/skyrocket-your-google-rankings-with-these-10-awesome-seo-copywriting-tips/",
            urlToImage: "https://images.readwrite.com/wp-content/uploads/2023/01/Google-Rankings.jpg",
            publishedAt: "2023-01-24T16:00:33Z",
            content: "If you want your website to rank higher in Google, you need to start paying attention to your SEO copywriting.\r\nIn this blog post, we will discuss ten tips that will help you build content that ranks… [+5737 chars]"
        },
        {
            id: 11,
            author: null,
            title: "Beyond the 'yips': Dallas kicker Maher faces mental battle in playoffs - Reuters",
            description: "Dallas Cowboys kicker Brett Maher must tame his inner nerves in Sunday's divisional round of the playoffs against the San Francisco 49ers, after a record four missed extra point attempts in his last outing shook fans to their core.",
            url: "https://www.reuters.com/lifestyle/sports/beyond-yips-dallas-kicker-maher-faces-mental-battle-playoffs-2023-01-21/",
            urlToImage: "https://www.reuters.com/resizer/Sgnj5n53OLyMQ-6mcywckJHMKn4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/I4AAPDG3ZNP5TOMAQ6QETODLSE.jpg",
            publishedAt: "2023-01-21T01:05:00Z",
            content: "Jan 20 (Reuters) - Dallas Cowboys kicker Brett Maher must tame his inner nerves in Sunday's divisional round of the playoffs against the San Francisco 49ers, after a record four missed extra point at… [+2635 chars]"
        },
        {
            id: 12,
            author: "tips@androidcentral.com (Nickolas Diaz)",
            title: "Google expands SafeSearch and password protection in online safety efforts",
            description: "Google's latest update sheds light on its new and upcoming ways of protecting user data and strengthening online safety.",
            url: "https://www.androidcentral.com/apps-software/google-expands-safesearch-password-protection",
            urlToImage: "https://cdn.mos.cms.futurecdn.net/WMab7m8CVng8rUHffk5bgR-1200-80.jpg",
            publishedAt: "2023-02-07T18:14:23Z",
            content: "<ul><li>Google details new and upcoming ways it will bring increased data and safety measures to its service.</li><li>Google Password Manager, on supported computers, will gain a biometric authentica… [+2629 chars]"
        },
        {
            id: 13,
            author: "insider@insider.com (Vartika Puranik)",
            title: "I made more than $877,000 in revenue last year selling emotional-intelligence card games online. Here's how I built my business.",
            description: "Jenny Woo's company, Mind Brain Emotion, started in 2018 with a Kickstarter campaign. She now sells seven products on her website and Amazon.",
            url: "https://www.businessinsider.com/made-877000-revenue-selling-emotional-intelligence-card-games-amazon-2023-1",
            urlToImage: "https://i.insider.com/63cee0ecf7448600187a8265?width=1200&format=jpeg",
            publishedAt: "2023-01-27T10:00:00Z",
            content: "This as-told-to essay is based on a conversation with Jenny Woo, the 40-year-old founder of Mind Brain Emotion, from Irvine, California. Insider has verified her business' revenue with documentation.… [+6739 chars]"
        },
        {
            id: 14,
            author: "iQuanti",
            title: "An Easy 4-Step Guide To Improving SEO With Powerful Topic Clusters via @sejournal, @iQuanti",
            description: "Learn how to easily merge content and SEO to successfully rank at the top of search engine results pages (SERPs) using topic clusters.\nThe post An Easy 4-Step Guide To Improving SEO With Powerful Topic Clusters appeared first on Search Engine Journal.",
            url: "https://www.searchenginejournal.com/improve-seo-topic-clusters-iquanti-spa/477082/",
            urlToImage: "https://cdn.searchenginejournal.com/wp-content/uploads/2023/01/featured-image-63d16a0b2fc7d-sej.jpg",
            publishedAt: "2023-02-15T06:00:19Z",
            content: "This post was sponsored by iQuanti. The opinions expressed in this article are the sponsor’s own.\r\nWhat transforms a website from just a catalog of blog posts to a highly-organized hub of authoritati… [+9267 chars]"
        },
        {
            id: 15,
            author: "Jigar Thakkar",
            title: "10 Crucial Marketing Tips for Online Businesses",
            description: "Boost your visibility and attract more customers with these proven strategies.",
            url: "https://www.entrepreneur.com/growing-a-business/10-marketing-strategies-for-online-businesses/442446",
            urlToImage: "https://assets.entrepreneur.com/content/3x2/2000/1673903410-GettyImages-510395200.jpg",
            publishedAt: "2023-01-19T20:30:00Z",
            content: "Starting an online business is great for bringing your products or services to a broader audience. However, the competition is fierce, and it can be difficult to stand out in the crowded online marke… [+3995 chars]"
        },
        {
            id: 16,
            author: "Tim Cushing",
            title: "Colorado Supreme Court To Hear Challenge Of Reverse Keyword Warrant Served To Google",
            description: "Geofence warrants get all the hype. But Google also stores other data of interest to law enforcement: Google searches. With these warrants, law enforcement asks Google to search its repositories for certain searches performed by users. Once the government has…",
            url: "https://www.techdirt.com/2023/02/03/colorado-supreme-court-to-hear-challenge-of-reverse-keyword-warrant-served-to-google/",
            urlToImage: "https://www.techdirt.com/wp-content/themes/techdirt/assets/images/td-rect-logo-white.png",
            publishedAt: "2023-02-03T20:07:34Z",
            content: "from the searching-everyone-to-find-probable-cause dept\r\nGeofence warrants get all the hype. But Google also stores other data of interest to law enforcement: Google searches.\r\nWith these warrants, l… [+7746 chars]"
        },
        {
            id: 17,
            author: "David Ekete",
            title: "How to Use Generators and Iterators in JavaScript",
            description: "Understand these fundamental behaviors and take your JavaScript programming to the next level.",
            url: "https://www.makeuseof.com/javascript-how-use-generators-iterators/",
            urlToImage: "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/06/javascript-featured.jpg",
            publishedAt: "2023-02-13T11:00:15Z",
            content: "Iterating over data collections using traditional loops can quickly become cumbersome and slow, especially when dealing with massive amounts of data.\r\nJavaScript Generators and Iterators provide a so… [+9017 chars]"
        },
        {
            id: 18,
            author: "David Ekete",
            title: "How to Use Namespaces in TypeScript",
            description: "Avoiding naming clashes can be awkward and lead to unwieldy code, but namespaces offer a convenient solution.",
            url: "https://www.makeuseof.com/typescript-how-to-use-namespaces/",
            urlToImage: "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/04/How-to-Set-Up-TypeScript-in-Node.jpg",
            publishedAt: "2023-02-05T16:01:16Z",
            content: "A naming collision occurs when two or more code components use the same name for a variable, function, or class. They are common in large projects where many people work on the same codebase. They ca… [+6414 chars]"
        },
        {
            id: 19,
            author: "Josh Taylor",
            title: "Some popular accounts likely to disappear from Twitter as Elon Musk ends free access to API",
            description: "Move to pay-for-access application program interface continues platform owner’s push for revenue<ul><li>Follow our Australia news live blog for the latest updates</li><li>Get our morning and afternoon news emails, free app or daily news podcast</li></ul>The l…",
            url: "https://www.theguardian.com/technology/2023/feb/03/some-popular-accounts-likely-to-disappear-from-twitter-as-elon-musk-ends-free-access-to-api",
            urlToImage: "https://i.guim.co.uk/img/media/271a91dae98dc72c45c4323d000ea7a726ba33eb/0_145_4000_2399/master/4000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=2a36fd518b1b452a2c6b47fff976580f",
            publishedAt: "2023-02-03T06:39:11Z",
            content: "The latest set of changes to Twitter will likely spell the end of some of your favourite accounts, tools and features, as the platforms owner, Elon Musk, continues to look for ways to increase revenu… [+4199 chars]"
        },
        {
            id: 20,
            author: "ayork@insider.com (Alexandra York)",
            title: "A freelancer earned more than $1 million writing Amazon product descriptions via Fiverr. Here's how he built his business.",
            description: "Levi Newman built a business writing descriptions for Amazon sellers. Here's how he built his startup and his advice for other entrepreneurs.",
            url: "https://www.businessinsider.com/how-to-make-money-on-fiverr-build-million-freelance-business-2022-8",
            urlToImage: "https://i.insider.com/62e82bd0c1c56b0018b4ad86?width=1200&format=jpeg",
            publishedAt: "2023-02-09T16:46:23Z",
            content: "Nearly nine years ago, Levi Newman wanted to turn his writing skills into a business. He joined Fiverr, a freelance service marketplace, and used his experience in marketing and social media to write… [+4074 chars]"
        },
        {
            id: 21,
            author: "amok@insider.com (Aaron Mok)",
            title: "How people are making money on Canva and turning their graphic-design side hustles into full-time gigs",
            description: "Workers are leaving their full-time jobs to start Canva product businesses. Some are taking massive pay cuts to reclaim ownership over their time.",
            url: "https://www.businessinsider.com/workers-leaving-high-paying-jobs-canva-side-hustle-2022-10",
            urlToImage: "https://i.insider.com/63612637ade71a00193dc7db?width=1200&format=jpeg",
            publishedAt: "2023-01-28T14:08:25Z",
            content: "After a tech startup fired 31-year-old Shruti Pangtey from her product marketing manager gig, she took the opportunity to start her own digital-products business and she said she has no regrets.\r\nHer… [+5096 chars]"
        },
        {
            id: 22,
            author: "Mihir Patkar",
            title: "5 New Web Search Apps to Make Google Better or Replace Google",
            description: "Whether augmenting Google searches to give better information or completely replacing it with a new app, try these awesome new search engines.",
            url: "https://www.makeuseof.com/web-search-apps-make-google-better-or-replace-google/",
            urlToImage: "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/02/google-alternative-search-engines-featured.jpg",
            publishedAt: "2023-02-04T09:31:15Z",
            content: "Google is the biggest web search engine in the world. But the web keeps changing, and you need tools to find the right content quickly, when Google can't. These new search apps offer different ways t… [+6299 chars]"
        },
        {
            id: 23,
            author: "Ahmed Sohaib",
            title: "How to Use TimeCamp to Reclaim Your Lost Time",
            description: "TimeCamp is a powerful time-management tool to help you track everything you do. Here's how to use it.",
            url: "https://www.makeuseof.com/how-to-use-timecamp-reclaim-lost-time/",
            urlToImage: "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/01/time-tracking-in-timecamp.jpg",
            publishedAt: "2023-02-08T12:00:15Z",
            content: "Time-tracking apps make you more productive and focused by recording how you spend your working hours. Additionally, these productivity tools offer valuable insights to help you better perform your t… [+7650 chars]"
        },
        {
            id: 24,
            author: "Ann Smarty",
            title: "How to Align Your Blog with Your Organic Search Conversion Funnel",
            description: "Business blogging is a good way to achieve “accidental rankings” (those you didn’t necessarily plan for) and discover more search-driven sales channels. And yet, many business owners or marketing managers have no idea what their blogs are ranking for. Consequ…",
            url: "https://moz.com/blog/blog-for-organic-search-conversion-funnel",
            urlToImage: "https://moz.com/images/blog/banners/blogging.jpg?w=1200&h=630&q=82&auto=format&fit=clip&dm=1532383478&s=36988a86eb25e31d042b84468bc309c4",
            publishedAt: "2023-01-16T08:00:00Z",
            content: "The author's views are entirely his or her own (excluding the unlikely event of hypnosis) and may not always reflect the views of Moz.Business blogging is an interesting concept. Many businesses have… [+8469 chars]"
        },
        {
            id: 25,
            author: "Will Critchlow",
            title: "Lessons Learned from SEO Tests that Didn't \"Win\" – Whiteboard Friday",
            description: "We love to talk about winning SEO tests, like those wonderful instances where you run an A/B test and you see positive impact. In today’s episode, though, Will is going to discuss the losing tests: those with negative results — or no results — where you could…",
            url: "https://moz.com/blog/lessons-learned-from-failed-seo-tests-whiteboard-friday",
            urlToImage: "https://moz.com/images/cms/WBF_LessonsLearned_Thumbnail.png?w=1200&h=630&q=82&auto=format&fit=crop&dm=1675971337&s=b382db33b05bb3a49131e4517bc286eb",
            publishedAt: "2023-02-10T08:00:00Z",
            content: "The author's views are entirely his or her own (excluding the unlikely event of hypnosis) and may not always reflect the views of Moz.We love to talk about winning SEO tests, like those wonderful ins… [+5817 chars]"
        },
        {
            id: 26,
            author: "nagazou",
            title: "Google、LaMDAを利用する実験的対話型サービス Bard を発表",
            description: "headless 曰く、Google は 6 日、実験的な対話型 AI サービス「Bard」を発表した\n(The Keyword の記事)。\n\nBard は同社の対話型アプリケーション向けの言語モデル Language Model for Dialogue Applications (LaMDA) を利用したもので、既に信頼されたテスター向けに提供が始まっている。今後数週間のうちに一般ユーザーも利用可能になるという。\n\nBard は大規模な言語モデルを用い、ウェブ上の幅広い知識からユーザーの指示に応じて概要をまと…",
            url: "https://it.srad.jp/story/23/02/07/2241211/",
            urlToImage: "https://srad.jp/static/topics/google_64.png",
            publishedAt: "2023-02-08T06:08:00Z",
            content: "Google 6 AI Bard\r\n(The Keyword )\r\nBard Language Model for Dialogue Applications (LaMDA) \r\nBard LaMDA \r\nGoogle Bard"
        },
        {
            id: 27,
            author: "Lars Lofgren",
            title: "TextMarks Review",
            description: "Although email marketing is thriving, SMS marketing has swiftly become just about as popular. TextMarks provides a simple way to send out mass text messages to generate leads, share information, or offer promotions to customers. TextMarks assists various indu…",
            url: "https://www.quicksprout.com/textmarks-review/",
            urlToImage: null,
            publishedAt: "2023-01-26T23:00:00Z",
            content: "Although email marketing is thriving, SMS marketing has swiftly become just about as popular. TextMarks provides a simple way to send out mass text messages to generate leads, share information, or o… [+11372 chars]"
        },
        {
            id: 28,
            author: "Syed Hammad Mahmood",
            title: "9 Online Tools to Search for Trending Hashtags",
            description: "If you're looking for trending hashtags to boost your online content or social posts, here are nine online tools you can use to find them.",
            url: "https://www.makeuseof.com/search-trending-hashtags-online-tools/",
            urlToImage: "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/01/trending-hashtag.jpg",
            publishedAt: "2023-01-19T17:30:16Z",
            content: "Hashtags are a great way to reach a wider audience on any social media app. However, finding trending, relevant hashtags can be time-taking and challenging.\r\nLuckily, you don't need to spend countles… [+6449 chars]"
        },
        {
            id: 29,
            author: 30,
            title: "The program is the database is the interface",
            description: "Comments",
            url: "https://scattered-thoughts.net/writing/the-program-is-the-database-is-the-interface/",
            urlToImage: null,
            publishedAt: "2023-02-12T10:37:35Z",
            content: "I do my accounts each year with a simple script. Something like this:\r\n(ns accounts\r\n (:require \r\n [clojure.string :as str]\r\n [clojure.pprint :as pp]))\r\n;; converted from statement.csv\r\n(def txs\r\n [{… [+13663 chars]"
        },
        {
            id: 31,
            author: "Bea Canuel",
            title: "8 Content Writing Tips From Experts In 2023 via @sejournal, @beacarlota17",
            description: "It can be challenging to write compelling content. From favorite tools to recommended books and SEO recommendations, here are 17 industry experts' advice.\nThe post 8 Content Writing Tips From Experts In 2023 appeared first on Search Engine Journal.",
            url: "https://www.searchenginejournal.com/content-writing-tips-from-experts/477016/",
            urlToImage: "https://cdn.searchenginejournal.com/wp-content/uploads/2023/01/content-writing-tips-63d2777a84407-sej.png",
            publishedAt: "2023-01-27T09:15:09Z",
            content: "The digital market is volatile and ever-changing.\r\nEveryone is competing for popular keywords, and artificial intelligence is changing content creation.\r\nIt can be a bit daunting, especially if you’r… [+23033 chars]"
        },
        {
            id: 32,
            author: "Stephen Ramsay",
            title: "The Unreasonable Effectiveness of AWK",
            description: "Comments",
            url: "https://stephenramsay.net/posts/unreasonable-awk.html",
            urlToImage: null,
            publishedAt: "2023-01-16T02:48:22Z",
            content: "Stephen Ramsay\r\nIf you cant do it with sed, C, awk, and the shell, you\r\n probably cant do it.\r\nI remember reading that well, I dont know where I read it\r\n (or even if I did). It sounds like something… [+6684 chars]"
        },
        {
            id: 33,
            author: "Loren Baker",
            title: "Link & Blogging Strategies For 2023 - Ep. 301 via @sejournal, @lorenbaker",
            description: "Learn the latest techniques in blogging and link building in our latest SEJ Show episode.\nThe post Link & Blogging Strategies For 2023 [Podcast] appeared first on Search Engine Journal.",
            url: "https://www.searchenginejournal.com/link-blogging-strategies-2023-podcast/479005/",
            urlToImage: "https://cdn.searchenginejournal.com/wp-content/uploads/2023/02/sejshow-featured-image-63e557c6274d8-sej.jpg",
            publishedAt: "2023-02-09T21:05:43Z",
            content: "SEO professionals looking for ways to gain a competitive edge in their link acquisition and blogging techniques can take heart — 2023 is bringing some exciting advancements that you’ll want to add to… [+3646 chars]"
        },
        {
            id: 34,
            author: null,
            title: "Stuff the identity function does in Rust (2015)",
            description: "Comments",
            url: "https://bluss.github.io//rust/fun/2015/10/11/stuff-the-identity-function-does/",
            urlToImage: null,
            publishedAt: "2023-02-12T08:30:24Z",
            content: "The identity function looks like this in Rust:\r\n/// The identity function.fnid&lt;T&gt;(x:T)-&gt;T{x}\r\nid returns the same value that is passed in:\r\nassert_eq!(1,id(1));\r\nBeyond the obvious, it does … [+3110 chars]"
        },
        {
            id: 35,
            author: "Louise Persson",
            title: "Alternative Search Engines: Why They Matter and How to Rank on Them",
            description: "While Google still holds more than 80% of the market share, ignoring search engines such as Bing, Yahoo, and DuckDuckGo can make you lose out on relevant traffic. So don’t limit yourself to Google’s algorithm as you plan the next year’s SEO strategy.",
            url: "https://moz.com/blog/alternative-search-engines-why-they-matter-and-how-to-rank-on-them",
            urlToImage: "https://moz.com/images/cms/moz-stairs-homepage-banner-v2.jpg?w=1200&h=630&q=82&auto=format&fit=crop&crop=focalpoint&fp-x=0.6423&fp-y=0.497&dm=1549300321&s=4ade1686bcefc80937fc976e3a22d6f4",
            publishedAt: "2023-02-08T08:00:00Z",
            content: "The author's views are entirely his or her own (excluding the unlikely event of hypnosis) and may not always reflect the views of Moz.12 billion, 3 billion, 1 billion. Thats the number of searches ma… [+12481 chars]"
        },
        {
            id: 36,
            author: "ben.wilson@windowscentral.com (Ben Wilson)",
            title: "Microsoft supercharges Bing and Edge with customized ChatGPT — so what about Windows 12?",
            description: "Microsoft finally confirmed OpenAI integration in the all-new Bing search engine and Edge browser. Could an AI-powered operating system be next?",
            url: "https://www.windowscentral.com/microsoft/microsoft-supercharges-bing-and-edge-with-customized-chatgpt-so-what-about-windows-12",
            urlToImage: "https://cdn.mos.cms.futurecdn.net/TJihrEZ2UEerUChnN7qGwV-1200-80.jpg",
            publishedAt: "2023-02-07T18:56:23Z",
            content: "Microsoft has officially announced plans to responsibly integrate artificial intelligence tech adopted from its $10 billion partnership with OpenAI into Bing and Edge during our live coverage of the … [+4228 chars]"
        },
        {
            id: 37,
            author: "zac.bowden@futurenet.com (Zac Bowden)",
            title: "Microsoft PowerToys for Windows gets new Taskbar quick access feature",
            description: "Microsoft has released a new version of PowerToys for Windows 11 and Windows 10 that brings with it a new quick access feature, which lets users quickly jump in to common PowerToys functions directly from the Taskbar via a new flyout in the System Tray.",
            url: "https://www.windowscentral.com/software-apps/windows-11/microsoft-powertoys-for-windows-gets-new-taskbar-quick-access-feature",
            urlToImage: "https://cdn.mos.cms.futurecdn.net/BgFwmxUErCbUn9je7KLjkU-1200-80.jpg",
            publishedAt: "2023-02-02T13:04:51Z",
            content: "What you need to know\r\n<ul><li>PowerToys Preview version 0.67.0 is now available.</li><li>It includes a new Taskbar quick access flyout for PowerToys shortcuts.</li><li>There are also bug fixes and q… [+2594 chars]"
        },
        {
            id: 38,
            author: "Remy Porter",
            title: "CodeSOD: Height of the Accordion",
            description: "In the bad old days of web development, you had to deal with the fact that there weren't really any standards, and you had to customize your code for different browsers. The \"right\" way was to sniff for which features were available, but the most commonly use…",
            url: "https://thedailywtf.com/articles/height-of-the-accordion",
            urlToImage: "https://thedailywtf.com/images/remy/Remy203-300x300.png",
            publishedAt: "2023-01-30T06:30:00Z",
            content: "In the bad old days of web development, you had to deal with the fact that there weren't really any standards, and you had to customize your code for different browsers. The \"right\" way was to sniff … [+1539 chars]"
        },
        {
            id: 39,
            author: "Paul Horowitz",
            title: "How to Search Tabs in Google Chrome",
            description: "If you use the Google Chrome web browser, and you use lots of tabs, you might find yourself lost in a sea of tons of tabs and windows. Fortunately, the newer versions of Chrome offer an excellent tab search feature, allowing you to search for URLs and keyword…",
            url: "https://osxdaily.com/2023/01/20/how-to-search-tabs-in-google-chrome/",
            urlToImage: "https://cdn.osxdaily.com/wp-content/uploads/2023/01/search-tabs-google-chrome-1.jpg",
            publishedAt: "2023-01-20T15:21:52Z",
            content: "If you use the Google Chrome web browser, and you use lots of tabs, you might find yourself lost in a sea of tons of tabs and windows.\r\nFortunately, the newer versions of Chrome offer an excellent ta… [+1188 chars]"
        },
        {
            id: 40,
            author: "Tom Demers",
            title: "What is ChatGPT and why SEOs should care",
            description: "Learn how this AI-powered chatbot works, who's behind the technology, and what it can – and can't – do for search marketers.\nThe post What is ChatGPT and why SEOs should care appeared first on Search Engine Land.",
            url: "https://searchengineland.com/what-is-chatgpt-and-why-seos-should-care-392165",
            urlToImage: "https://searchengineland.com/wp-content/seloads/2023/01/ChatGPT-for-SEO.png",
            publishedAt: "2023-01-26T14:00:00Z",
            content: "Interest in AI technology and, more specifically, OpenAIs ChatGPT product has skyrocketed in recent weeks. \r\nPeople are looking for information about both topics.\r\nThousands are writing about ChatGPT… [+11194 chars]"
        },
        {
            id: 41,
            author: "Annie Pilon",
            title: "Struggling to Stay on Budget? Experts Share Small Biz Cost Cutting Secrets",
            description: "Small businesses often have small budgets to work with. This means you have to get more done with fewer resources. Below are expert tips on small business cost cutting.",
            url: "https://smallbiztrends.com/2023/01/small-business-cost-cutting.html",
            urlToImage: "https://media.smallbiztrends.com/2022/12/small-business-cost-cutting-tips.png",
            publishedAt: "2023-01-21T14:00:48Z",
            content: "Small businesses often have small budgets to work with. This means you have to get more done with fewer resources. And youre often left with less time each day as a result. Luckily, members of the on… [+3367 chars]"
        },
        {
            id: 42,
            author: "Andrew Helwer",
            title: "Can sanitizers find the two bugs I wrote in C++?",
            description: "A few days ago I published a short post about two bugs I wrote while developing the C++ external scanner for my TLA⁺ tree-sitter grammar. Reactions were mixed! Many people were supportive, but there were of course the usual drive-by claims by developers that …",
            url: "https://ahelwer.ca/post/2023-02-07-cpp-bugs-sanitized/",
            urlToImage: "https://ahelwer.ca/img/profile-2022.jpg",
            publishedAt: "2023-02-08T09:42:28Z",
            content: "A few days ago I published a short post about two bugs I wrote while developing the C++ external scanner for my TLA tree-sitter grammar.\r\nReactions were mixed!\r\nMany people were supportive, but there… [+13388 chars]"
        },
        {
            id: 43,
            author: "Roger Montti",
            title: "Google: Headings With Hierarchical Structure An “Awesome Idea” via @sejournal, @martinibuster",
            description: "Google's John Mueller says headings with a hierarchical structure is an \"awesome idea & a great practice\"\nThe post Google: Headings With Hierarchical Structure An “Awesome Idea” appeared first on Search Engine Journal.",
            url: "https://www.searchenginejournal.com/google-headings-with-hierarchical-structure-an-awesome-idea/478491/",
            urlToImage: "https://cdn.searchenginejournal.com/wp-content/uploads/2023/02/heading-elements-google-63dceb46d7b52-sej.jpg",
            publishedAt: "2023-02-03T11:21:23Z",
            content: "Google’s John Mueller discussed heading elements with a member of the SEO community where he affirmed the usefulness of using hierarchical structure when using heading elements.\r\nBackground Context t… [+5093 chars]"
        },
        {
            id: 44,
            author: "Digg Editors",
            title: "Burning Questions Americans Have About Others' States And Countries Around The World, Mapped",
            description: "Auto-complete is one helluva drug.",
            url: "https://digg.com/data-viz/link/burning-questions-americans-have-about-each-other-and-ask-about-other-countries-mapped-dh3jQQGY4p",
            urlToImage: "https://cdn.digg.com/submitted-links/1675966337-fr0rn73gi0.jpg",
            publishedAt: "2023-02-09T18:31:58Z",
            content: "Guauging curiosity is always a difficult task when it comes to groups. Using targetted keyword searches, the folks at SavingSpot used an open-ended question (\"why does...\") to see what kind of result… [+854 chars]"
        },
        {
            id: 45,
            author: null,
            title: "Memory Safety Approaches Speed Up and Slow Down Development Velocity",
            description: "Comments",
            url: "https://verdagon.dev/blog/when-to-use-memory-safe-part-2",
            urlToImage: null,
            publishedAt: "2023-01-17T08:06:14Z",
            content: "Borrow Checking and Beyond\r\nA lot of languages are working on borrow checking blends that are better for development velocity.\r\nSome languages are using it under the hood:\r\n<ul><li>Lobster is using b… [+9201 chars]"
        },
        {
            id: 46,
            author: "Hardik Sachan",
            title: "Kotlin Data Classes 101: Understanding Syntax, Usage and Inheritance",
            description: "Welcome back to this series of articles on Android Development with Kotlin and Jetpack Compose. In the previous article, we discussed the type system in Kotlin along with null safety. In this article, we will take a look at what data classes are, how...",
            url: "https://hardiksachan.com/kotlin-data-classes-101-understanding-syntax-usage-and-inheritance",
            urlToImage: "https://hashnode.com/utility/r?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1674901426825%2F3bb7e18f-baf8-470d-99a4-5ec6fcc9676c.png%3Fw%3D1200%26h%3D630%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp%26fm%3Dpng",
            publishedAt: "2023-01-28T10:27:20Z",
            content: "Welcome back to this series of articles on Android Development with Kotlin and Jetpack Compose. In the previous article, we discussed the type system in Kotlin along with null safety. In this article… [+8028 chars]"
        },
        {
            id: 47,
            author: "Adam Heitzman",
            title: "How To Optimize Website Architecture For SEO via @sejournal, @AdamHeitzman",
            description: "Find out why site architecture is essential for SEO, see examples of organizing your site, and learn tips to make your site structure as SEO-friendly.\nThe post How To Optimize Website Architecture For SEO appeared first on Search Engine Journal.",
            url: "https://www.searchenginejournal.com/how-to-optimize-website-architecture-for-seo/477179/",
            urlToImage: "https://cdn.searchenginejournal.com/wp-content/uploads/2023/01/website-architecture-63d0fdc577f73-sej.png",
            publishedAt: "2023-02-06T10:00:39Z",
            content: "When people talk about high-priority SEO activities, they usually point to crucial areas like keyword research, content planning, and link-building.\r\nWebsite architecture is rarely top of the list.\r\n… [+12752 chars]"
        },
        {
            id: 48,
            author: "zac.bowden@futurenet.com (Zac Bowden)",
            title: "Major leak reveals revolutionary new version of Microsoft Bing powered by ChatGPT-4 AI",
            description: "It looks like Microsoft is gearing up to launch a major new version of Bing that integrates OpenAI’s ChatGPT-4 technology in a way that will revolutionize searching the web. Multiple have reported seemingly stumbling across a preview version of the new Bing e…",
            url: "https://www.windowscentral.com/microsoft/major-leak-reveals-revolutionary-new-version-of-microsoft-bing-powered-by-chatgpt-4-ai",
            urlToImage: "https://cdn.mos.cms.futurecdn.net/VHVxeZTgfGHhqB2aG7pYUm-1200-80.jpg",
            publishedAt: "2023-02-03T21:48:45Z",
            content: "What you need to know\r\n<ul><li>Microsoft is preparing to launch a revolutionary new version of Bing.</li><li>The new Bing went live briefly earlier today and revealed ChatGPT-4 integration.</li><li>N… [+2594 chars]"
        },
        {
            id: 49,
            author: null,
            title: "What's new in Matplotlib 3.7.0 (Feb 13, 2023)",
            description: "Comments",
            url: "https://matplotlib.org/stable/users/prev_whats_new/whats_new_3.7.0.html",
            urlToImage: null,
            publishedAt: "2023-02-15T12:31:53Z",
            content: "pie now accepts a hatch keyword that takes as input\r\na hatch or list of hatches:\r\nfig,(ax1,ax2)=plt.subplots(ncols=2)x=[10,30,60]ax1.pie(x,hatch=['.','o','O'])ax2.pie(x,hatch='.O')ax1.set_title(\"hatc… [+5588 chars]"
        },
        {
            id: 50,
            author: "Gaby Zedan",
            title: "Keep up with the expansion strategies of your competitors",
            description: "Track new location announcements across the Web with Feedly’s AI Engine",
            url: "https://blog.feedly.com/keep-up-with-the-expansion-strategies-of-your-competitors/",
            urlToImage: "https://blog.feedly.com/wp-content/uploads/2023/01/Location-Expansions-Featured-Visual-1200x721.png",
            publishedAt: "2023-01-26T14:00:00Z",
            content: "Know when your competitors are expanding to new locations so you are aware of when theyre making big moves.\r\nWe created a new Location Expansions Leo Model so you can monitor these automatically.\r\nST… [+541 chars]"
        }
    ],
    comments: [
        {
            id: 1,
            publication_id: 1,
            text: 'WOW!'
        }
    ]
};

export const ContextApp = React.createContext(initialState);

export const newsReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case ADD_COMMENT:
            return {
                ...state,
                comments: [
                    ...state.comments,
                    payload.comment
                ]
            }
        case UPDATE_COMMENT:
            let index = state.comments.findIndex(comment => comment.id == payload.id)
            let comment = state.comments.splice(index,1,payload)
            return {
                ...state,
                comments:[
                    ...state.comments,
                    comment
                ]
            }
        default:
            return state
    }
};