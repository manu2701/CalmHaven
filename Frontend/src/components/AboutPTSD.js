import React, { useEffect, useState } from "react";
import './AboutPTSD.css';
import banner from "../assets/bg/about-banner.png";

function AboutPTSD() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll(".about-ptsd-right > div[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Adjust threshold for earlier/later activation
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);


  return (
    <div className="about-ptsd-container">
      <div className="about-ptsd-left">
        <p className={activeSection === "what" ? "active" : ""}>
          <a href="#what">What is PTSD?</a>
        </p>
        <p className={activeSection === "who" ? "active" : ""}>
          <a href="#who">Who gets PTSD?</a>
        </p>
        <p className={activeSection === "signs" ? "active" : ""}>
          <a href="#signs">Signs and Symptoms</a>
        </p>
        <p className={activeSection === "treatment" ? "active" : ""}>
          <a href="#treatment">Treatment</a>
        </p>
        <p className={activeSection === "friendsandfam" ? "active" : ""}>
          <a href="#friendsandfam">For friends and family</a>
        </p>
        <p className={activeSection === "more_resources" ? "active" : ""}>
          <a href="#more_resources">More on PTSD</a>
        </p>
      </div>
      <div className="about-ptsd-right"> 
        <img src={banner}  alt="Banner" className="Banner"/>
        <div id="what">
          <h2>What is PTSD?</h2>
          <p>
            Post-traumatic stress disorder (PTSD) is a disorder that develops in some people who have experienced a shocking, scary, or dangerous event.
            <br></br><br></br>It is natural to feel afraid during and after a traumatic situation. Fear is a part of the bodys “fight-or-flight” response, which helps us avoid or respond to potential danger. People may experience a range of reactions after trauma, and most people recover from initial symptoms over time. Those who continue to experience problems may be diagnosed with PTSD.<br></br>
            Most people who experience traumatic events do not develop PTSD. People who experience interpersonal violence such as rape, other sexual assaults, being kidnapped, stalking, physical abuse by an intimate partner, and childhood abuse are more likely to develop PTSD than those who experience non-assault based trauma, such as accidents and natural disasters. Those who experience prolonged trauma, such as slavery, concentration camps, or chronic domestic abuse, may develop complex post-traumatic stress disorder (C-PTSD). C-PTSD is similar to PTSD, but has a distinct effect on a person's emotional regulation and core identity.
          </p>
        </div>

      <h1>
      "With the right support, PTSD is just another hurdle in life, not a full stop."
      </h1>

      <div id="who">
        <h2>Who gets PTSD?</h2>
        <p>
          Anyone can develop PTSD at any age. This includes combat veterans and people who have experienced or witnessed a physical or sexual assault, abuse, an accident, a disaster, or other serious events. People who have PTSD may feel stressed or frightened, even when they are not in danger.<br></br>
          Not everyone with PTSD has been through a dangerous event. Sometimes, learning that a friend or family member experienced trauma can cause PTSD.<br></br>
          Women are more likely to develop PTSD than men. Certain aspects of the traumatic event and some biological factors (such as genes) may make some people more likely to develop PTSD.
          <br></br><br></br><div className="ext-link"><a href="https://www.psychiatrictimes.com/view/why-men-and-women-may-respond-differently-to-psychological-trauma" target="_blank">Why Men and Women May Respond Differently to Psychological Trauma?</a></div>
        </p>
      </div>

      <div id="signs">
        <h2>What are the signs and symptoms of PTSD?</h2>
        <p>
          Symptoms of PTSD usually begin within 3 months of the traumatic event, but they sometimes emerge later. To meet the criteria for PTSD, a person must have symptoms for longer than 1 month, and the symptoms must be severe enough to interfere with aspects of daily life, such as relationships or work. The symptoms also must be unrelated to medication, substance use, or other illness.<br></br>
          The course of the disorder varies. Some people recover within 6 months, while others have symptoms that last for 1 year or longer. People with PTSD often have co-occurring conditions, such as depression, substance use, or one or more anxiety disorders.<br></br>
          After a dangerous event, it is natural to have some symptoms. For example, some people may feel detached from the experience, as though they are observing things rather than experiencing them. A mental health professional who has experience helping people with PTSD, such as a psychiatrist, psychologist, or clinical social worker, can determine whether symptoms meet the criteria for PTSD.<br></br>
          To be diagnosed with PTSD, an adult must have all of the following for at least 1 month:<br></br>
          <ul>
          <li>At least one re-experiencing symptom</li>
          <li>At least one avoidance symptom</li>
          <li>At least two arousal and reactivity symptoms</li>
          <li>At least two cognition and mood symptoms</li>
          </ul>
        </p>
      </div>


      <iframe width="560" height="315" src="https://www.youtube.com/embed/wsgcCbdZW48?si=jRCmLGlKUH1EkeAL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


      <div id="treatment">
        <h2>How is PTSD treated?</h2>
        <p>
          It is important for anyone with PTSD symptoms to work with a mental health professional who has experience treating PTSD. The main treatments are psychotherapy, medications, or a combination of psychotherapy and medications. A mental health professional can help people find the best treatment plan for their symptoms and needs.<br></br>
          Some people with PTSD, such as those in abusive relationships, may be living through ongoing trauma. In these cases, treatment is usually most effective when it addresses both the traumatic situation and the symptoms of PTSD. People who experience traumatic events or who have PTSD also may experience panic disorder, depression, substance use, or suicidal thoughts. Treatment for these conditions can help with recovery after trauma. Research shows that support from family and friends also can be an important part of recovery.
        </p>
      </div>

      <h1>
      "Recovery is a process. It takes time. It takes patience. It takes everything you've got."
      </h1>

      <div id="friendsandfam">
        <h2>How can friends and family help?</h2>
        <p>
        Friends and family play a crucial role in helping someone cope with Post-Traumatic Stress Disorder (PTSD). Here are several ways they can provide support:
        <ol><br></br>
          <li>
            Offer Emotional Support
            <ul>
              <li>Listen without judgment: Sometimes the best way to support someone is to simply listen. Allow them to talk about their feelings at their own pace without pressuring them to share more than they're comfortable with.</li>
              <li>Be patient and understanding: PTSD recovery takes time, and progress can be slow. Being patient and offering reassurance can make the person feel understood and safe.</li>
            </ul>
          </li><br></br>
          <li>
            Avoid Triggers
            <ul>
              <li>Know their triggers: PTSD can be triggered by reminders of the traumatic event. Family and friends should be aware of these and avoid situations, conversations, or activities that might cause distress.</li>
              <li>Create a safe environment: Whether at home or in social settings, help create an environment where the person feels safe and protected from situations that might exacerbate their symptoms.</li>
            </ul>
          </li><br></br>
          <li>
            Encourage Healthy Habits
            <ul>
              <li>Promote self-care: Encourage them to practice good sleep hygiene, healthy eating, and regular exercise. Engaging in physical activities together can improve both mental and physical well-being.</li>
              <li>Involve them in activities: Suggest activities that they find relaxing or enjoyable, whether it's walking, meditation, or a hobby they used to love.</li>
            </ul>
          </li><br></br>
          <li>
            Help Manage Stress
            <ul>
              <li>Assist with daily tasks: Sometimes, PTSD can make it hard to manage day-to-day activities. Offering help with household chores, childcare, or errands can relieve some stress.</li>
              <li>Offer grounding techniques: If they experience flashbacks or panic attacks, gently guide them through grounding techniques like deep breathing or focusing on their immediate surroundings.</li>
            </ul>
          </li><br></br>
          <li>
            Encourage Social Connection
            <ul>
              <li>Stay connected: Encourage them to stay connected with others. Even though they might isolate themselves, maintaining social connections with trusted friends or family members can be beneficial.</li>
              <li>Include them in social activities: Invite them to low-pressure social gatherings, but respect their boundaries if they’re not ready to participate fully.</li>
            </ul>
          </li><br></br>
        </ol>
        </p>
      </div>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/aLs0uCZOG8g?si=OdOZkPFYgR2YABbr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>  

      <h1>
      "No one around me understood what I was going through. I found it hard to explain. Words just couldn't do justice to what I was going through."
      </h1>
      <br></br>

      <div className="more-on-ptsd" id="more_resources">
        <div className="more-on-ptsd-left"></div>
        <div className="more-ptsd-container">
          <p className="more-on-ptsd-label">OTHER RESOURCES</p>
          <p className="additional-info-head">More on PTSD</p>
          <p className="additional-info-subhead">1. National Center for PTSD</p>
          <ul>
            <li><a href="https://www.ptsd.va.gov/appvid/aboutface.asp">About Face: Learn About PTSD from Veterans, Family, and Clinicians</a></li>
            <li><a href="http://www.ptsd.va.gov/public/materials/apps/index.asp">Mobile Apps for PTSD</a></li>
            <li><a href="https://www.ptsd.va.gov/understand_tx/index.asp">Understanding PTSD Treatment</a></li>
            <li><a href="https://www.ptsd.va.gov/understand_tx/emdr.asp">Eye Movement Desensitization and Reprocessing (EMDR) for PTSD</a></li>
            <li><a href="http://maketheconnection.net/conditions/ptsd">Make the Connections: Shared Experiences for Veterans</a></li>
          </ul>
          <p className="additional-info-subhead">2. National Child Traumatic Stress Network</p>
          <ul>
            <li><a href="https://www.ptsd.va.gov/understand_tx/emdr.asp">Trauma treatments</a></li>
          </ul>
          <p className="additional-info-subhead">3. Anxiety and Depression Association of America</p>
          <ul>
            <li><a href="http://www.adaa.org/screening-posttraumatic-stress-disorder-ptsd">Online Screening for PTSD</a></li>
            <li><a href="https://www.adaa.org/finding-help/getting-support">Find a Local Support Group</a></li>
          </ul>
          <p className="additional-info-subhead"><a href="http://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd/index.shtml#part_145370">4. National Institute on Mental Health (NIMH): What Is PTSD?</a></p>
          <p className="additional-info-subhead"><a href="http://www.woundedwarriorproject.org/programs/combat-stress-recovery-program.aspx">5. Wounded Warrior Project: Combat Stress Recovery Program</a></p>
          <p className="additional-info-subhead">6. Rape, Abuse and Incest National Network (RAINN)</p>
          <ul>
            <li><a href="https://rainn.org/articles/post-traumatic-stress-disorder">PTSD Resource Page</a></li>
          </ul>
          <p className="additional-info-subhead">7. University of Toronto, Social Work</p>
          <ul>
            <li><a href="https://www.youtube.com/watch?v=vXBN5IbUp_s&list=PLK6GauYc9n3YPtawJ5-EmfA1zCQhhaA4u&index=1">Racial Trauma: How Racism can Cause PTSD (video)</a></li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AboutPTSD;
