import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PlaceholerIcon from './components/PlaceholerIcon';

const Avatar = ({
  alt,
  altColor = 'gray',
  color = 'rgba(0, 0, 0, 0.1)',
  radius = 10,
  size = 38,
  src,
  children,
}) => {
  const [error, setError] = useState(!src);

  useEffect(() => {
    !src ? setError(true) : setError(false);
  }, [src]);

  return (
    <Container color={color} altColor={altColor} radius={radius} size={size}>
      {error ? (
        <Placeholder title={alt} size={size}>
          {children || <PlaceholerIcon />}
        </Placeholder>
      ) : (
        <Image
          alt={alt}
          src={src}
          onError={(e) => {
            setError(true);
            console.log(e);
          }}
          radius={radius}
        />
      )}
    </Container>
  );
};

export default Avatar;

const Container = styled.div`
  ${({ altColor, color, radius, size }) => {
    return `
      background-color:${color};
      color:${altColor};
      border-radius:${radius}px;
      width: ${size}px;
      height: ${size}px;
    `;
  }}
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  display: block;
  ${({ radius }) => {
    return `
      border-radius:${radius}px;
    `;
  }}
`;

const Placeholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: ${({ size }) => `calc(${size}px * .4)`};
  font-weight: 700;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;
