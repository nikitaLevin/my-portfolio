import { Heading, HStack, Image, Text, VStack, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, url }) => {
  return (
    <VStack
      backgroundColor="white"
      borderRadius="xl"
      overflow="hidden"
      alignItems="flex-start"
      color="black"
    >
      <Image src={imageSrc} alt={title} width="100%" objectFit="cover" />
      <VStack spacing={3} p={4} alignItems="flex-start">
        <Heading as="h3" size="md">{title}</Heading>
        <Text color="gray.600">{description}</Text>
        <Link href={url} isExternal _hover={{ textDecoration: "none" }}>
          <HStack spacing={2} color="black">
            <Text fontWeight="bold">See more</Text>
            <FontAwesomeIcon icon={faArrowRight} />
          </HStack>
        </Link>
      </VStack>
    </VStack>
  );
};

export default Card;