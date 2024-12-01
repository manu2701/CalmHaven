import React from "react";
import './Resources.css';

function Resources(){
    return (
        <div className="reso">
            <div className="res-land">
                <div className="res-land-1">
                    <p>PTSD</p>
                    <div className="res-para">This page include the best and latest articles, videos and papers on tackling PTSD and self-care strategies.</div>
                </div>
                <div className="res-land-2">
                    <p>Resources</p>
                    <div className="res-color">News</div>
                </div>
                <div className="res-lists">
                    <p>Articles</p>
                    <p>Vedios</p>
                    <p>Research</p>
                    <p>Nutrition</p>
                    <p>Exercise</p>
                </div>
            </div>
        </div>
    );
}

export default Resources;