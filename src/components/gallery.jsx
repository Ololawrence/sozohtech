import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
            These are few collections of jobs done and delivered
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-sm-6 col-md-4 col-lg-4"
                >
                  <a href={d.link} target="__blank">
                    <Image
                      title={d.title}
                      // largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </a>
                </div>
              ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div >
  );
};
