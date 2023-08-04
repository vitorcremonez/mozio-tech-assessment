import styled from "styled-components";

export const Info = styled.div`
	margin-top: 30px;
	margin-bottom: 30px;
	& b {
		color: ${({ theme }) => theme.colors.secondary};
	}
`;
