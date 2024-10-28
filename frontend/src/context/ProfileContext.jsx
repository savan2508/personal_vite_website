import { createContext, useEffect, useState } from "react";
import { client } from "../../client.js";

export const ProfileContext = createContext({
  hero: {},
  abouts: {},
  factsData: {},
  skillsFetched: {},
  resume: {},
  works: {},
  certifications: {},
  footer: {},
});

export const ProfileContextProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const query = `{
      "hero": *[_type == "hero"]{...},
      "abouts": *[_type == "abouts"]{...},
      "resume": *[_type == "resume"]{...},
      "works": *[_type == "works"] | order(priority desc, title asc) 
      {
        ..., 
        "mainImage": imgUrl.asset->url,
        "screenshots": screenshots[].asset->url,
      },
      "certifications": *[_type == "certification"]{..., "imageUrl": image.asset->url},
      "skills": *[_type == "skills"]{..., "icon": icon.asset->url},
      "facts": *[_type == "factsSection"]{..., facts[]{
          title,
          description,
          "iconUrl": icon.asset->url,
          link
        }},
    }`;

      try {
        const result = await client.fetch(query);
        if (result) {
          setData(result);
        }
      } catch (error) {
        console.error("Sanity fetch error:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const values = {
    hero: data.hero ? data.hero[0] : undefined,
    abouts: data.abouts ? data.abouts : [],
    factsData: data.facts ? data.facts[0] : undefined,
    skillsFetched: data.skills ? data.skills : [],
    resume: data.resume ? data.resume[0] : undefined,
    works: data.works ? data.works : [],
    certifications: data.certifications ? data.certifications : [],
    footer: {},
    data,
    isLoading,
  };

  return (
    <ProfileContext.Provider value={values}>{children}</ProfileContext.Provider>
  );
};
