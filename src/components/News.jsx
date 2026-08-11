import React, { Component } from "react";
import Newsitems from "./Newsitems";
import PropTypes from "prop-types";
import Spinner from "./Spinner";


export default class News extends Component {
  // articles = [
  //   {
  //     source: {
  //       id: "bbc-news",
  //       name: "BBC News",
  //     },
  //     author: "BBC News",
  //     title: "Global Markets Show Strong Growth Amid Economic Changes",
  //     description:
  //       "Global markets have shown positive movement as investors respond to recent economic developments.",
  //     url: "https://www.bbc.com/news",
  //     urlToImage:
  //       "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
  //     publishedAt: "2026-08-10T06:30:00Z",
  //     content:
  //       "Global markets showed strong growth today.\r\nInvestors reacted positively to recent economic developments.\r\nTechnology and banking stocks recorded major gains.\r\nExperts expect markets to remain closely watched in the coming days.",
  //   },

  //   {
  //     source: {
  //       id: "cnn",
  //       name: "CNN",
  //     },
  //     author: "CNN News",
  //     title: "New Technology Innovations Are Changing Everyday Life",
  //     description:
  //       "New technological developments are helping people work, communicate and live more efficiently.",
  //     url: "https://www.cnn.com",
  //     urlToImage:
  //       "https://images.unsplash.com/photo-1518770660439-4636190af475",
  //     publishedAt: "2026-08-10T08:15:00Z",
  //     content:
  //       "Technology companies continue to introduce innovative products.\r\nArtificial intelligence is becoming part of everyday applications.\r\nSmart devices are helping users automate daily tasks.\r\nExperts believe technology will continue to transform modern life.",
  //   },

  //   {
  //     source: {
  //       id: "the-hindu",
  //       name: "The Hindu",
  //     },
  //     author: "The Hindu",
  //     title: "India Focuses on New Digital Development Initiatives",
  //     description:
  //       "India is expanding its digital infrastructure and encouraging technology-based development.",
  //     url: "https://www.thehindu.com",
  //     urlToImage:
  //       "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
  //     publishedAt: "2026-08-10T10:00:00Z",
  //     content:
  //       "India continues to expand its digital infrastructure.\r\nNew initiatives are focusing on technology and innovation.\r\nDigital services are becoming more accessible to citizens.\r\nThe government is encouraging startups and technology development.",
  //   },

  //   {
  //     source: {
  //       id: "techcrunch",
  //       name: "TechCrunch",
  //     },
  //     author: "TechCrunch",
  //     title: "AI Startups Attract New Investments From Technology Companies",
  //     description:
  //       "Artificial intelligence startups are receiving increased attention from investors around the world.",
  //     url: "https://techcrunch.com",
  //     urlToImage:
  //       "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  //     publishedAt: "2026-08-10T12:45:00Z",
  //     content:
  //       "Artificial intelligence startups are attracting new investments.\r\nCompanies are developing AI tools for different industries.\r\nInvestors are showing interest in practical AI applications.\r\nThe growing AI ecosystem is creating new opportunities for developers.",
  //   },
  // ];
  articles = [];

  static defaultProps = {
    country: "us",
    pageSize: 9,
    category: "sports",
  };
  static propTypes = {
    country: PropTypes.string.isRequired,
    pageSize: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
  };
  constructor(prop) {
    super();
    console.log("i am constructor");
    this.state = {
      articles: [],
      loading:false,
      page:0,
      totalResults:0
    };
  }
  handleprev=async()=>{
    
      this.setState({
        loading:true
      })
    
 let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey${process.env.REACT_APP_NEWS_API_KEY}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    
    this.setState({
      articles: parseData.articles,
      page:this.state.page-1,
      loading:false
    });
  }
  handlenext=async()=>{
    
      this.setState({
        loading:true
      })
    
 let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey${process.env.REACT_APP_NEWS_API_KEY}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      page:this.state.page+1,
      loading:false
    });
  }
  
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey${process.env.REACT_APP_NEWS_API_KEY}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({
        loading:true
      })
   
      let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      page:this.state.page+1,
       totalResults:parseData.totalResults,
       loading:false
    });
  }
  render() {
    return (
      <>
        <h1 className="text-center text-danger">Live News</h1>
        {this.state.loading && <Spinner/>}
        <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4 d-flex mb-4" key={element.url}>
                  <Newsitems
                    title={element.title}
                    description={element.description}
                    url={element.urlToImage}
                    linkurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
<br />
<div className="d-grid gap-2 d-md-flex justify-content-md-end">
  <button className="btn btn-danger me-md-2" type="button" onClick={this.handleprev} disabled={this.state.page<=1} > &laquo;Prev</button>
  <button className="btn btn-danger" type="button" onClick={this.handlenext} >Next&raquo;</button>
</div>

<br />



        </div>
      </>
    );
  }
}
