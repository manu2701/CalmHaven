import React from "react";
import "./Resources.css";

function Resources() {
  return (
    <div className="reso">
      {/* Top Section */}
      <div className="res-land">
        <div className="res-land-1">
          <p>PTSD</p>
          <div className="res-para">
            This page includes the best and latest articles, videos, and papers on
            tackling PTSD and self-care strategies.
          </div>
        </div>
        <div className="res-land-2">
          <p>Resources</p>
          <div className="res-color">News</div>
        </div>
        <div className="res-lists">
          <p>Articles</p>
          <p>Videos</p>
          <p>Research</p>
          <p>Nutrition</p>
          <p>Exercise</p>
        </div>
      </div>

      {/* Banner Section */}
      <div className="res-banner">
        <div className="res-banner-overlay">
          <h1>A Private War: Why PTSD Is Still Overlooked</h1>
          <p>
            Experts say millions of people are affected by trauma, which has
            become a buzzword and a meme. So why aren't more of them being
            treated? <a href="#">Read more</a>
          </p>
          <p>The New York Times | 22 Jun 2023</p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="res-cards">
        <div className="rescard">
          <img
            src="https://www.ptsduk.org/wp-content/uploads/2024/11/blog-image-5-300x160.png"
            alt="Holding Leaders Accountable"
          />
          <h4>Darren Jones</h4>
          <p>
          Holding Leaders Accountable on PTSD Stigma Recently, we reached out directly to Prime Minister Sir Keir Starmer and Chief Secretary to the Treasury Darren Jones regarding a comment Mr. Jones made on Sky News. In his interview, he joked that
          </p>
          <a href="#">Read More »</a>
        </div>
        <div className="rescard">
          <img
            src="https://www.ptsduk.org/wp-content/uploads/2024/10/blog-image-5-300x160.png"
            alt="Rememberings"
          />
          <h4>Rememberings</h4>
          <p>
          PTSD UK 'Rememberings' Postcards Launched At PTSD UK, we are always looking for new ways to support people affected by Post Traumatic Stress Disorder (PTSD) or Complex PTSD (C-PTSD). We understand how challenging it can be to navigate triggers, flashbacks,
          </p>
          <a href="#">Read More »</a>
        </div>
        <div className="rescard">
          <img
            src="https://www.ptsduk.org/wp-content/uploads/2024/09/blog-image-5-3-300x160.png"
            alt="Symptom Tracker"
          />
          <h4>Symptom Tracker</h4>
          <p>
          PTSD UK Symptom Tracker At PTSD UK, we know that feeling in control of your condition is important, especially when you’re waiting for treatment or actively going through therapy. Managing PTSD or Complex PTSD (C-PTSD) can feel overwhelming, but tracking
          </p>
          <a href="#">Read More »</a>
        </div>
      </div>
      <div className="res-cards">
        <div className="rescard">
          <img
            src="https://www.ptsduk.org/wp-content/uploads/2024/09/blog-image-5-2-300x160.png"
            alt="Softening overwhelming anxiety"
          />
          <h4>How I softened my overwhelming anxiety</h4>
          <p>
          Guest Blog post: How I softened my overwhelming anxiety In this guest blog from Finley de Witt, they share their journey of managing anxiety after a traumatic event in therapy. Through humour, movement, and a technique called “linking,” they learned
          </p>
          <a href="#">Read More »</a>
        </div>
        <div className="rescard">
          <img
            src="https://www.ptsduk.org/wp-content/uploads/2024/09/blog-image-5-1-300x160.png"
            alt="EMDR Treatment"
          />
          <h4>Case Study: EMDR Treatment - Britany</h4>
          <p>
          Case Study: EMDR Treatment - Britany After struggling for years with Complex PTSD caused by childhood trauma, Britany began EMDR treatment. In this case study, she shares her journey of navigating the complexities of C-PTSD and the transformative effects of
          </p>
          <a href="#">Read More »</a>
        </div>
        <div className="rescard">
          <img
            src="https://www.ptsduk.org/wp-content/uploads/2024/09/blog-image-5-300x160.png"
            alt="10th Birthday"
          />
          <h4>10th birthday trek</h4>
          <p>
          PTSD UK's 10th Birthday: Join Us for an Epic Fundraising Trek in 2025! As we approach our 10th birthday in 2025, PTSD UK is planning something truly special to celebrate this milestone—and we want you to be a part of
          </p>
          <a href="#">Read More »</a>
        </div>
      </div>
    </div>
  );
}

export default Resources;