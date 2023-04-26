import React, { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { FaAngleDoubleRight } from "react-icons/fa";
import Button from "./components/Button";
import { JobData } from "./types";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [jobData, setJobData] = useState<JobData[]>([]);
  const [singleJob, setSingleJob] = useState<JobData[] | []>([]);
  console.log(singleJob);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(url);
        setJobData(data);
        setSingleJob([data[0]]);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          console.log(axiosError.response?.data);
        } else {
          console.log(error);
        }
      }
    };
    fetchData();
  }, []);

  const handleClick = (id: string) => {
    const newJobData = jobData.filter((job) => job.id === id);
    setSingleJob(newJobData);
  };
  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {jobData.map((job) => (
            <Button job={job} styles="job-btn" onClick={() => handleClick(job.id)}/>
          ))}
        </div>
        <article className="job-info">
              <h3>{singleJob[0]?.title}</h3>
              <h4>{singleJob[0]?.company}</h4>
              <p className="job-date">{singleJob[0]?.dates}</p>
              <div className="job-desc">
                {singleJob[0]?.duties.map((duty) => (
                  <>
                    <FaAngleDoubleRight />
                    <p>{duty}</p>
                  </>
                ))}
              </div>
        </article>
      </div>
    </section>
  );
}

export default App;
