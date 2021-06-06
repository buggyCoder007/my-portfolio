import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import image from "../image-3.jpg";
import imageURLBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageURLBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
      name,
      bio,
      "authorImage":image.asset->url
    }`
      )
      .then(data => {
        console.log('data>>>',data)
        setAuthor(data[0]);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  if (!author) return <div>Loading...</div>;
  return (
    <main className="relative">
      <img src={image} alt="background-image" className="absolute w-full" />
      <div className="p-10 lg:p-48 container mx-auto relative">
        <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-32 h-32 lg:w-75 lg:h-40 mr-8"
            alt={author.name}
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-green-300 mb-4 ">
              Hey there, I'm{" "}
              <span className="text-green-100">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-white">
              <BlockContent
                blocks={author.bio}
                projectId="mgikc542"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
