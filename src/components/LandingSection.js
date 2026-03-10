import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import myPhoto from "../images/NikitaLevin.jpg";

const greeting = "Hello, I am Nikita!";
const bio1 = "A Full Stack developer";
const bio2 = "specialised in Node.js, React and Python";


const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      <Avatar 
        boxSize={["150px", "250px", "350px"]} 
        maxW="40vh"
        maxH="40vh"
        src={myPhoto} 
      />
      <Heading as="h4" size="md">{greeting}</Heading>
      <VStack spacing={1} textAlign={["center", "left"]}>
        <Heading as="h2" size={["xl", "2xl"]}>{bio1}</Heading>
        <Heading as="h2" size={["xl", "2xl"]}>{bio2}</Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
