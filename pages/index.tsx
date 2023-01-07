import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import type { GetStaticProps } from "next";
import About from "../components/About";
import Experiences from "../components/Experiences";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocials } from "../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  exp: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({pageInfo, exp, projects, skills, socials}:Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>{pageInfo?.name} - Portfolio</title>
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start ">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section className="snap-center" id="experience">
        <Experiences exp={exp} />
      </section>

      <section className="snap-start" id="skills">
        <Skills skills={skills} />
      </section>

      <section className="snap-center" id="projects">
        <Projects projects={projects} />
      </section>

      <section className="snap-start" id="contact">
        <ContactMe />
      </section>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const exp: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();
  return {
    props: {
      pageInfo,
      exp,
      skills,
      projects,
      socials,
    },
    // NEXTJS will attempt to re-generate the page
    revalidate: 10,
  };
};
