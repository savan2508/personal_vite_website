import { client } from "../../client";

/**
 * Fetches data for the Hero and Skills sections from Sanity.
 */
export async function getHeroData() {
  const heroQuery = `*[_type == "hero"]{titles, github, linkedin, email, name, skillsDescription}[0]`;
  const skillsQuery = '*[_type == "skills"]';

  // Fetch all data in parallel
  const [heroData, fetchedSkills] = await Promise.all([
    client.fetch(heroQuery),
    client.fetch(skillsQuery),
  ]);

  return { heroData };
}

/**
 * Fetches data for the Certifications section from Sanity.
 */
export async function getCertificationsData() {
  const certsQuery = `*[_type == "certification"]{
     title,
     organization,
     description,
     link,
     course_link,
     "imageUrl": image.asset->url
   }`;
  const certifications = await client.fetch(certsQuery);
  return { certifications };
}
