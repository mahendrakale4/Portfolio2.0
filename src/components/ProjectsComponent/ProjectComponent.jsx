import React from "react";
import { ProjectTable } from "./ProjectStyles";

const ProjectComponent = ({ data }) => {
  console.log(data);
  return (
    <ProjectTable>
      <thead>
        <tr>
          {/* <th>Year</th> */}
          <th className="mobile__hide">Project</th>
          <th className="mobile__hide">Built with</th>
          <th width="w-30">Link</th>
        </tr>
      </thead>
      {/* Project 1 */}
      <tbody>
        {/* <td>{"March 2023"}</td> */}
        <td className="mobile__hide">{"Issue Tracker"}</td>
        <td className="mobile__hide">
          <div className="built__with">
            {"React + Next.js 15"}
          </div>
          <div className="built__with">
            {"Prisma + PostgreSQL"}
          </div>
          <div className="built__with">
            {"Tailwind CSS"}
          </div>
        </td>
        <td>
          <a className="project__link"
            target="_blank"
            rel="noreferrer"
            href={"https://github.com/mahendrakale4/issue-tracker"}
          >
            {"Issue Tracker"}
          </a>
        </td>
      </tbody>
      {/* Project 1 */}
      <tbody>
        {/* <td>{"March 2023"}</td> */}
        <td className="mobile__hide">{"Event Registration"}</td>
        <td className="mobile__hide">
          <div className="built__with">
            {"1000+ Registration"}
          </div>
          <div className="built__with">
            {"Razorpay"}
          </div>
          <div className="built__with">
            {"React + Next.js"}
          </div>
          <div className="built__with">
            {"SQL"}
          </div>
        </td>
        <td>
          <a className="project__link"
            target="_blank"
            rel="noreferrer"
            href={"https://regis-29w9.vercel.app/"}
          >
            {"Event Registration"}
          </a>
        </td>
      </tbody>
      <tbody>
        {/* <td>{"March 2023"}</td> */}
        <td className="mobile__hide">{"Chat App"}</td>
        <td className="mobile__hide">
          <div className="built__with">
            {"Web Socket.io"}
          </div>
          <div className="built__with">
            {"React + Next.js 15"}
          </div>
          <div className="built__with">
            {"SQL"}
          </div>

        </td>
        <td>
          <a className="project__link"
            target="_blank"
            rel="noreferrer"
            // href={""}
          >
            {"Chat App"}
          </a>
        </td>
      </tbody>
      <tbody>
        {/* <td>{"March 2023"}</td> */}
        <td className="mobile__hide">{"Web3 Token Exchange"}</td>
        <td className="mobile__hide">
          <div className="built__with">
            {"Web 3"}
          </div>
          <div className="built__with">
            {"Jupiter API"}
          </div>
          <div className="built__with">
            {"React + Next.js 15"}
          </div>

        </td>
        <td>
          <a className="project__link"
            target="_blank"
            rel="noreferrer"
            href={"https://github.com/mahendrakale4/WalletConnectify"}
          >
            {"Web3 Token Exchange "}
          </a>
        </td>
      </tbody>
      {/* Project 1 */}
      <tbody>
        {/* <td>{"March 2023"}</td> */}
        <td className="mobile__hide">{"Soybean Seed Classification"}</td>
        <td className="mobile__hide">
          <div className="built__with">
            {"Machine Learning"}
          </div>
          <div className="built__with">
            {"Python"}
          </div>
          <div className="built__with">
            {"Django"}
          </div>
          <div className="built__with">
            {"Javascript"}
          </div>
        </td>
        <td>
          <a className="project__link"
            target="_blank"
            rel="noreferrer"
            href={"https://mahendrakale.netlify.app/projects/Classification"}
          >
            {"Soybean Seed Classification"}
          </a>
        </td>
      </tbody>
      {/* Project 2 */}
      <tbody>
        {/* <td>{"Jul 2023"}</td> */}
        <td className="mobile__hide">{"Expense Tracker"}</td>
        <td className="mobile__hide">
          <div className="built__with">
            {"React.js"}
          </div>
          <div className="built__with">
            {"JSX "}
          </div>
          <div className="built__with">
            {"Firebase"}
          </div>
        </td>
        <td>
          <a className="project__link"
            target="_blank"
            rel="noreferrer"
            href={"https://mahendrakale.netlify.app/projects/Tracker"}
          >
            {"Expense Tracker"}
          </a>
        </td>
      </tbody>
      {/* Project 3 */}
      <tbody>
        {/* <td>{"Feb 2022"}</td> */}
        <td className="mobile__hide">{"Recommendation Engine"}</td>
        <td className="mobile__hide">
          <div className="built__with">
            {"Python"}
          </div>
          <div className="built__with">
            {"Django"}
          </div>
          <div className="built__with">
            {"Javascript"}
          </div>
        </td>
        <td>
          <a className="project__link"
            target="_blank"
            rel="noreferrer"
            href={"https://mahendrakale.netlify.app/projects/engine"}
          >
            {"Recommendation Engine"}
          </a>
        </td>
      </tbody>
      {/* {data.map((project, index) => {
          let year = project.Year.split("-")[0];
          let url = project.ProjectLink;
          let extractedURL = url.substring(
            url.indexOf("https://") + 8,
            url.indexOf("/", 8)
          ); //extracting the domain name from the url
          return (
            <tr key={index}>
              <td>{year}</td>
              <td className="mobile__hide">{project.Title}</td>
              <td className="mobile__hide">
                {project.BuiltWith.map((item, index) => {
                  return (
                    <div key={index} className="built__with">
                      {item}
                    </div>
                  );
                })}
              </td>
              <td>
                <a className="project__link" 
                  target="_blank" 
                  rel="noreferrer" 
                  href={project.ProjectLink}
                >
                  {extractedURL}
                </a>
              </td>
            </tr>
          );
        }
        )} 


      </tbody>*/}
    </ProjectTable>
  );
};

export default ProjectComponent;