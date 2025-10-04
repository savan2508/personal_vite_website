import { client } from "../../client";

/**
 * Fetches all data required for the ProfileContext in a single, efficient query.
 */
export async function getProfileData() {
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
      "skills": *[_type == "skills"]{
        ..., 
        "skillsIcons": skillsIcons[]{
          ..., 
          "icon": icon.asset->url
        }
      },
      "facts": *[_type == "factsSection"]{..., facts[]{
          title,
          description,
          "iconUrl": icon.asset->url,
          link
        }},
    }`;

  return await client.fetch(query);
}
