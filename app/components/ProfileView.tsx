"use client";

import styled from "styled-components";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useEffect } from "react";

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
  margin: 0 0 2rem;
`;

const AvatarWrapper = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1rem;
`;

const AvatarFallback = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #111;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  margin-bottom: 2rem;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.6rem 0;
  border-bottom: 1px solid #f0f0f0;
`;

const FieldLabel = styled.span`
  font-size: 0.65rem;
  color: #aaa;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const FieldValue = styled.span`
  font-size: 0.875rem;
  color: #111;
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

interface Props {
  name: string;
  email: string;
  image: string;
}

function toUsername(email: string) {
  return email ? "@" + email.split("@")[0] : "";
}

export default function ProfileView({ name, email, image }: Props) {
  return (
    <Page>
      <Box>
        <Title>CS391 Google OAuth</Title>
        {image ? (
          <AvatarWrapper>
            <Image src={image} alt={name} fill sizes="48px" style={{ objectFit: "cover" }} />
          </AvatarWrapper>
        ) : (
          <AvatarFallback>{name?.[0] ?? "?"}</AvatarFallback>
        )}
        <Row>
          <Field>
            <FieldLabel>Name</FieldLabel>
            <FieldValue>{name}</FieldValue>
          </Field>
          <Field>
            <FieldLabel>Username</FieldLabel>
            <FieldValue>{toUsername(email)}</FieldValue>
          </Field>
          <Field>
            <FieldLabel>Email</FieldLabel>
            <FieldValue>{email}</FieldValue>
          </Field>
        </Row>
        <Button onClick={() => signOut({ callbackUrl: "/" })}>
          Sign out
        </Button>
      </Box>
    </Page>
  );
}