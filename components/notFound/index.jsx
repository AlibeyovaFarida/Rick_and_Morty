"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import styled, { keyframes } from "styled-components";


const rotateIn = keyframes`
  from {
    transform: rotate(0deg) scale(0.2);
    opacity: 0;
  }
  to {
    transform: rotate(360deg) scale(1);
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  margin: auto;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  width: fit-content;
  text-align: center;
  z-index: 4;
`;

export const Span = styled.span`
  &:first-letter {
    letter-spacing: 12vmax;
  }
  position: relative;
  color: #1e234d;
  font-weight: 900;
  font-size: 20.4em;
  display: block;
  overflow: hidden;
  width: fit-content;
  height: max-content;

  &:before {
    content: "";
    background-image: url("https://staticdelivery.nexusmods.com/mods/1151/images/528-0-1447526230.png");
    position: absolute;
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    animation: ${rotateIn} 0.5s ease-out;
  }
  @media (max-width: 360px) {
    font-size: 8em;
  }

  @media (min-width: 361px) and (max-width: 640px) {
    font-size: 10em;
  }

  @media (min-width: 641px) and (max-width: 768px) {
    font-size: 12em;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 14em;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 16em;
  }
`;

export const Button = styled.button`
  background-color: #f96e4d;
  border: 0;
  padding: 11px 22px;
  border-radius: 50px;
  color: #fff;
  margin-top: 10px;
  cursor: pointer;
  font-weight: 900;
  
`;

const NotFoundPage = () => {
  const router = useRouter()
  useEffect(() => {
    router.push('/404')
  },[])
  return (
    <div>
      <Wrapper>
        <div>
          <Span>44</Span>
        </div>
        <Link href="/">
          <Button type="button">
            GET ME HOME
          </Button>
        </Link>
      </Wrapper>
    </div>
  );
}

export default NotFoundPage