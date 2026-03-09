import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Mr. Donald's Burger Shop",
    description:
      "Food ordering React app with cart, toppings customization and real-time price calculation",
    getImageSrc: () => require("../images/MrDonalds.png"),
    url: "https://github.com/nikitaLevin/mr-donalds-burger-shop",
  },
  {
    title: "3Glo Landing",
    description:
      "Landing page for a 3D modeling studio with countdown timer, portfolio carousel and cost calculator",
    getImageSrc: () => require("../images/3DGlo.png"),
    url: "https://github.com/nikitaLevin/3dglo-landing",
  },
  {
    title: "Form Validator",
    description:
      "Reusable JavaScript validator plugin — email, phone, password validation with custom patterns",
    getImageSrc: () => require("../images/validation.jpg"),
    url: "https://github.com/nikitaLevin/form-validator",
  },
  {
    title: "MCP Server Creation Tool",
    description:
      "Python tool that automatically scaffolds new MCP servers with virtual environment and dependencies",
    getImageSrc: () => require("../images/mcp.jpg"),
    url: "https://github.com/nikitaLevin/mcp-server-creation-tool",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
