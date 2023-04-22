import styled from "styled-components";

export const Cursor = styled.div.attrs(({ size }) => ({
  style: { width: size, height: size },
}))`
  position: fixed;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  mix-blend-mode: difference;
  z-index: 9999;
`;
