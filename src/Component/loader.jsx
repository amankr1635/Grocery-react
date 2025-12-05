import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
<section class="dots-container">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</section>

    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .dots-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }

  .dot {
    height: 18px;
    width: 18px;
    margin-right: 10px;
    border-radius: 50%;
    background-color: var(--bs-primary);
    animation: pulse 1.5s infinite ease-in-out;
  }

  .dot:last-child {
    margin-right: 0;
  }

  .dot:nth-child(1) {
    animation-delay: -0.3s;
  }

  .dot:nth-child(2) {
    animation-delay: -0.1s;
  }

  .dot:nth-child(3) {
    animation-delay: 0.1s;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.85);
      background-color: var(--bs-primary);
      box-shadow: 0 0 0 0 rgba(10, 173, 10, 0.5);
    }

    50% {
      transform: scale(1.2);
      background-color: var(--bs-success);
      box-shadow: 0 0 0 12px rgba(25, 135, 84, 0);
    }

    100% {
      transform: scale(0.85);
      background-color: var(--bs-teal);
      box-shadow: 0 0 0 0 rgba(25, 135, 84, 0.4);
    }
  }
`;


export default Loader;
