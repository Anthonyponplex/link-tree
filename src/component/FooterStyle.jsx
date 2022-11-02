import styled from "styled-components";

export const FooterContainer = styled.div`
  /* Content */

  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0px 0px;
  gap: 32px;

  width: 100%;
  height: 64px;

  /* Gray/200 */

  border-top: 1px solid #eaecf0;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  @media only screen and (max-width: 640px) {
    padding-top: 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 40px;
  }
`;
export const FooterWrapper = styled.div`
  padding: 50px 8%;
`;

export const FooterText = styled.span`
  /* Text md/Normal */
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  text-align: center;
  /* Gray/500 */
  color: #667085;
  /* Inside auto layout */
`;
