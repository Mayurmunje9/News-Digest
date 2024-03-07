import React, { Component } from "react";
import { Link } from "react-router-dom";
export class NewsItem extends Component {
  render() {
    //We can declare like this otherwise we willl always havt to write it like=> {this.props.author}& {this.props.date}  the way i've use below

    //And we have to write this while reciving only (the props)
    let { title, description, imageUrl, newsUrl } = this.props;

    return (
      <div className="my-3">
        <div className="card">
          <span
            className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
            style={{ zIndex: "1", left: "90%" }}
          >
            {this.props.source}
          </span>
          <img
            src={
              !imageUrl
                ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>

            <p className="card-text">
              <small className="text-muted">
                Author: {this.props.author ? this.props.author : "Unknown "} At{" "}
                {new Date(this.props.date).toGMTString()}
              </small>
            </p>

            <Link
              rel="noreferrer"
              to={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
