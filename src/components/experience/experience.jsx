import "./experience.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <>
      <div className="experience">
        <h1>Experience </h1>
        <VerticalTimeline>
          {/* Most Recent Work Experience */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2023 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            //   icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Website Administrator - Frontline Properties
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Antonio, TX
            </h4>
            <p>
              Managing Real Estate CRM, including WordPress website integration.
              Optimizing HTML/CSS elements for improved user engagement.
              Designing and Implementing drip campaigns and social media content
              with Meta Business to drive prospects.
            </p>
          </VerticalTimelineElement>

          {/* END of most recent work experience */}

          {/* Web Development Education */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2023 - 2023"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            //   icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Web Development Bootcamp
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
             University of Texas at Austin
            </h4>
            <p>HTML, CSS, JavaScript, MongoDB, React JS, SQL, Node Js, Express JS, Git, Github, Code Refactoring, Code Debugging, </p>
          </VerticalTimelineElement>

          {/* End Web development Education */}

          {/* Documint Experience */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2023"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            //   icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Development and Marketing Technologist - Documint
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Austin, Texas
            </h4>
            <p>
              Provided end-to-end customer support including onboarding,
              installation, training, issue resolution, and customized template
              design through HubSpot CRM. Analyzed inactive accounts through
              Google Analytics, leading to the design and implementation of an
              interactive guided walkthrough. Established customer connections
              via API integrations to link their templates with corresponding
              databases Enhance template editor functionality with custom
              Handlebars.js functions. Managed all social media, including
              content creation for client case studies
            </p>
          </VerticalTimelineElement>
          {/* End of Documint */}

          {/* Elementary Teaching */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019-2022"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            //   icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Elementary Teacher
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Antonio, TX
            </h4>
            <p>
              Led the 4th-grade team as the grade-level chair, facilitating
              communications and coordination between administration and
              colleagues. Created and delivered engaging and differentiated
              lessons, assignments, and assessments for Kindergarten and
              3rd-grade students across all subjects. Developed and executed
              mathematics and science curriculum for 4th-grade students,
              aligning with state standards and best practices. Collaborated
              with a cultural organization to develop and launch a program for
              3rd-grade students, promoting cultural appreciation and global
              awareness within the school community.
            </p>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2016 - 2019"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            //   icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Arts in Interdisciplinary Studies</h3>
            <h4 className="vertical-timeline-element-subtitle">
              University of Texas at San Antonio
            </h4>
            <p>User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="April 2013"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            //   icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Esthetician
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Hyatt Hill Country Resort
            </h4>
            <p>Strategy, Social Media</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
