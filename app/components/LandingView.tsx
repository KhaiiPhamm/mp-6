"use client";

import styled from "styled-components";
import { signIn } from "next-auth/react";

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  font-family: monospace;
`;

const Box = styled.div`
  width: 100%;
  max-width: 320px;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 1.1rem;
  font-weight: 700;
  color: #111;
  margin: 0 0 0.25rem;
`;

const Sub = styled.p`
  font-size: 0.8rem;
  color: #888;
  margin: 0 0 2rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.7rem;
  background: #111;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-family: monospace;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    background: #333;
  }
`;

export default function LandingView() {
  return (
    <Page>
      <Box>
        <Title>CS391 Google OAuth</Title>
        <Sub>Sign in to view your account info.</Sub>
        <Button onClick={() => signIn("google", { callbackUrl: "/profile" })}>
          Sign in with Google
        </Button>
      </Box>
    </Page>
  );
}