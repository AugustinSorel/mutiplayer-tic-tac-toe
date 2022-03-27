import styled from "styled-components";

export const NotificationModalContainer = styled.div`
  margin-top: 1rem;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  background-color: var(--accent-background-color);
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);

  width: 50%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NotificationModalText = styled.h2`
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-regular);
`;
