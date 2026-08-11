import React, { Component } from "react";

export default class Newsitems extends Component {
  render() {
    let {
      title,
      description,
      url,
      linkurl,
      author,
      date,
      source,
    } = this.props;
    return (
      <div className="container mt-4">
        <div className="card border border-secondary border-3"  style={{
    height: "100%",
    minHeight: "500px",
  }}>
          <img src={url} alt="Not Found" className="card-img-top" style={{
    height: "200px",
  }} />
          <div className="card-body" >
            <span
              className="badge rounded-pill bg-danger text-light"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
                right: "0px",
                top: "0px",
              }}
            >{source}</span>
            <h5 className="card-title text-success">{title.split("",50)}...</h5>
            <p className="card-text">{description?description.split("",120):"No Description"}</p>
            <p>By: {author?author.split("",20):"Anonymous"}</p>
            {/* <div style={{ height: "2px", backgroundColor: "black", width: "100%" }}></div> */}
            <hr style={{ borderTop: "2px solid grey", opacity: .5 }} />
            <p>Published At:{date}</p>
            <a href={linkurl} className="btn btn-danger">Read More</a>

          </div>
        </div>
      </div>
    );
  }
}
