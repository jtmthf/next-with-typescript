import { NextContext } from "next";

const About = ({ name }: { name: string }) => (
  <h1>This page is about {name}</h1>
);

About.getInitialProps = ({ query }: NextContext<{ name: string }>) => {
  return { name: query.name };
};

export default About;
