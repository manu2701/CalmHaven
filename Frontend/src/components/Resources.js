import React, { useState } from "react";
import "./Resources.css";

function Resources() {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const cardsData = [
    {
      img: "https://www.ptsduk.org/wp-content/uploads/2024/11/blog-image-5-300x160.png",
      title: "Darren Jones",
      description:
        "Holding Leaders Accountable on PTSD Stigma Recently, we reached out directly to Prime Minister Sir Keir Starmer and Chief Secretary to the Treasury Darren Jones regarding a comment Mr. Jones made on Sky News. In his interview, he joked that...",
      link: "#",
    },
    {
      img: "https://www.ptsduk.org/wp-content/uploads/2024/10/blog-image-5-300x160.png",
      title: "Rememberings",
      description:
        "PTSD UK 'Rememberings' Postcards Launched At PTSD UK, we are always looking for new ways to support people affected by Post Traumatic Stress Disorder (PTSD) or Complex PTSD (C-PTSD). We understand how challenging it can be to navigate triggers, flashbacks,...",
      link: "#",
    },
    {
      img: "https://www.ptsduk.org/wp-content/uploads/2024/09/blog-image-5-3-300x160.png",
      title: "Symptom Tracker",
      description:
        "PTSD UK Symptom Tracker At PTSD UK, we know that feeling in control of your condition is important, especially when you’re waiting for treatment or actively going through therapy. Managing PTSD or Complex PTSD (C-PTSD) can feel overwhelming, but tracking...",
      link: "#",
    },
    {
      img: "https://www.ptsduk.org/wp-content/uploads/2024/09/blog-image-5-2-300x160.png",
      title: "How I softened my overwhelming anxiety",
      description:
        "Guest Blog post: How I softened my overwhelming anxiety In this guest blog from Finley de Witt, they share their journey of managing anxiety after a traumatic event in therapy. Through humour, movement, and a technique called “linking,” they learned...",
      link: "#",
    },
    {
      img: "https://www.ptsduk.org/wp-content/uploads/2024/09/blog-image-5-1-300x160.png",
      title: "Case Study: EMDR Treatment - Britany",
      description:
        "Case Study: EMDR Treatment - Britany After struggling for years with Complex PTSD caused by childhood trauma, Britany began EMDR treatment. In this case study, she shares her journey of navigating the complexities of C-PTSD and the transformative effects of...",
      link: "#",
    },
    {
      img: "https://www.ptsduk.org/wp-content/uploads/2024/09/blog-image-5-300x160.png",
      title: "10th birthday trek",
      description:
        "PTSD UK's 10th Birthday: Join Us for an Epic Fundraising Trek in 2025! As we approach our 10th birthday in 2025, PTSD UK is planning something truly special to celebrate this milestone—and we want you to be a part of...",
      link: "#",
    },
    {
      img: "https://www.ptsduk.org/wp-content/uploads/2024/08/blog-image-5-300x160.png",
      title: "NHS 111 Mental Health Services",
      description:
        "NHS 111 Expanding Mental Health Support Across the UK People experiencing a mental health crisis in England, Scotland or Wales can now access urgent support through NHS 111. This welcomed update finally integrates vital mental health support with physical health...",
      link: "#",
    },
    {
      img: "https://www.ptsduk.org/wp-content/uploads/2024/07/blog-image-5-3-300x160.png",
      title: "IFS research update",
      description:
        "Exciting New Research on IFS Treatment for PTSD Published New research which investigates the feasibility and effectiveness of Internal Family Systems (IFS) treatment for PTSD has been published. The study’s encouraging results highlight the potential for IFS to significantly reduce...",
      link: "#",
    },
    {
      img: "https://www.ptsduk.org/wp-content/uploads/2024/07/blog-image-5-2-300x160.png",
      title: "Matilda and Trauma Responses",
      description:
        "What Can Matilda the Musical Teach Us About Trauma and Trauma Responses? There are a number of instances of film, book and TV characters having PTSD or C-PTSD symptoms. Recently, PTSD UK supporter Jemima Atar wrote us this insightful guest...",
      link: "#",
    },
    {
      img: "https://www.ptsduk.org/wp-content/uploads/2024/07/blog-image-5-1-300x160.png",
      title: "Finley De",
      description:
        "Finding Safety After Trauma - Guest Blog: Finley de Witt In this guest blog by Finley de Witt, Finley explores how to regain a sense of safety after experiencing trauma. Drawing from their experiences as a trauma practitioner and client,...",
      link: "#",
    },
    {
      img: "https://www.ptsduk.org/wp-content/uploads/2024/07/blog-image-5-300x160.png",
      title: "Sunflower Conversations",
      description:
        "Sunflower Conversations with PTSD UK We’re delighted to be working alongside the team at Hidden Disabilities Sunflower to raise awareness of PTSD and C-PTSD, and this month, they invited our Business development Manager, Rachel to appear on their podcast… You...",
      link: "#",
    },
    {
      img: "https://www.ptsduk.org/wp-content/uploads/2024/06/Awareness-day-1-300x300.png",
      title: "PTSD Awareness Day 2024",
      description:
        "PTSD Awareness Day 2024 This Thursday, 27th June 2024 ma­­rks International PTSD Awareness Day and we’d love for you to get involved and help us raise our voice, shout louder and drive towards our mission to help support EVERYONE affected...",
      link: "#",
    },
  ];

  const totalPages = Math.ceil(cardsData.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardsData.slice(indexOfFirstCard, indexOfLastCard);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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
        {currentCards.map((card, index) => (
          <div className="rescard" key={index}>
            <img src={card.img} alt={card.title} />
            <h4>{card.title}</h4>
            <p>{card.description}</p>
            <a href={card.link}>Read More »</a>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Resources;
