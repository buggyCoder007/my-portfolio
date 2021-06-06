import React, { useEffect, useState } from "react";
import sanityClient from "../client";

export default function Project() {
  const [ProjectData, setProjectData] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
        title,
        date, 
        place,
        description,
        projectType,
        link,
        tags
      }`
      )
      .then(data => {
        setProjectData(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
        <h2 className="text-lg text-grey-600 flex justify-center mb-12">
          Welcome to my project page!
        </h2>
        <section className="grid grid-cols-2 gap-8">
          {ProjectData &&
            ProjectData.map(project => (
              <article className="relative rouded-lg shadow-xl bg-white p-16">
                <h3 className="text-grey-800 text-3xl font-bold mb-2 hover:text-red-700">
                  <a
                    href={project.link}
                    alt={project.title}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-grey-500 text-xs space-x-4">
                  <span>
                    <strong className="font-bold">Finished On</strong>:{" "}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-bold">Company</strong>:{" "}
                    {project.place}
                  </span>
                  <span>
                    <strong className="font-bold">Type</strong> :{" "}
                    {project.projectType}
                  </span>
                  <p className="my-6 text-lg text-gray-700 leading-relaxed ">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl"
                  >
                    View the Project
                    <span role="img" aria-label="right pointer "></span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
