import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getData } from "../data/croppedText";

export default function Main() {
  const [accessToken, setAccessToken] = useState(null);
  const [displayText, setDisplayText] = useState(null);

  useEffect(() => {
    setAccessToken(localStorage.getItem("paperToken"));
  }, []);

  useEffect(() => {
    setDisplayText(getData(accessToken));
  }, [accessToken]);

  return (
    <Box padding={10}>
      {displayText ? (
        <Text padding={15}>{displayText}</Text>
      ) : (
        <Text>Token inválido!</Text>
      )}
    </Box>
  );
}
