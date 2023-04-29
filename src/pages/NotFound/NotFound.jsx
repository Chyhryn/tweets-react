import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Section, Text } from "./NotFound.styled";

export const NotFound = () => {
  const [redirect, setRedirect] = useState(false);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirect(true);
    }, 5000);

    const interval = setInterval(() => {
      setCountdown((prevCountDown) => prevCountDown - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <Section>
      <Text>
        We are sorry but the page you are looking for does not exist.
        <br />
        You will be redirected to the Home page after {countdown} sec.
      </Text>
    </Section>
  );
};
