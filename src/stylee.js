import styled from 'styled-components'

export const MagicalButton = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 0.9rem 1.4rem;
  background: #00c3ff;
  border-radius: 0.3rem;
  box-shadow: rgba(0, 196, 255, 0.9) 0px 13px 19px -6px;
  transition: 0.5s;
  @media (max-width: 380px) {
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }
  &:hover {
    box-shadow: 0px 0px 17px 0px rgba(0, 196, 255, 0.36);
    transition: 0.5s;
  }
  &:first-child {
    margin-right: none;
    background: #f9f9f9;
    color: #00c3ff;
    box-shadow: rgb(185, 185, 185) 0px 13px 19px -6px;
    &:hover {
      box-shadow: 0px 0px 17px 0px rgba(185, 185, 185, 0.4);
    }
    @media (max-width: 380px) {
      margin: 0 auto 1.5rem auto;
    }
  }
`
export const Mdark = styled.b`
  color: #fff;
  text-decoration: none;
  padding: 0.9rem 1.4rem;
  background: #19e3a3;
  border-radius: 0.3rem;
  box-shadow: 0px 0px 17px 0px rgba(25, 227, 163, 0.4);
  transition: 0.5s;
  @media (max-width: 380px) {
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }
  &:hover {
    box-shadow: rgba(25, 227, 163, .9) 0px 13px 19px -6px;
    transition: 0.5s;
  }
  &:first-child {
    margin-right: 1rem;
    background: #272628;
    color: #19e3a3;
      box-shadow: 0px 0px 17px 0px rgba(25, 227, 163, 0.4);
 &:hover { 
            textDecoration: 'none';
          box-shadow: rgb(25, 227, 163) 1px 1px 0px 1px; 
    }
    @media (max-width: 380px) {
      margin: none;
    }
  }
`
export const Wrapper = styled.div`
  padding: 4rem 1rem;
  p {
    color: gray;
    margin-bottom: 2rem;
  }
  ${({ theme }) =>
    theme === 'dark' &&
    `
			color: #fff;
	`}
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 380px) {
    flex-direction: column;
  }
  `
  
