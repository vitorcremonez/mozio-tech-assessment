import styled from "styled-components";

interface ContentProps {
	visible: boolean;
}

export const Content = styled.div<ContentProps>`
	display: ${({ visible }) => (visible ? "block" : "none")};
`;
