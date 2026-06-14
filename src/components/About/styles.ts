import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .main-tech-icons {
    margin-top: 1.6rem;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .tech-icon-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    min-width: 6rem;

    svg {
      font-size: 3.4rem;
    }

    span {
      font-size: 1.1rem;
      opacity: 0.85;
      text-align: center;
    }
  }

  .skill-categories {
    margin-top: 2.4rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  .skill-category h4 {
    margin: 0 0 0.8rem;
    font-size: 1.5rem;
    color: var(--green);
    letter-spacing: 0.05rem;
  }

  .skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
  }

  .skill-tag {
    padding: 0.5rem 1.2rem;
    border-radius: 2rem;
    background-color: var(--skill-tag-bg);
    color: var(--skill-tag-color);
    border: var(--skill-tag-border);
    font-size: 1.3rem;
    font-weight: 500;
    letter-spacing: 0.05rem;
    transition: background-color 0.25s, color 0.25s;

    &:hover {
      background-color: var(--blue);
      color: #ffffff;
      border-color: transparent;
    }
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    // border-bottom: 0.2rem solid var(--blue);
    font-size :3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  h3{
    margin-top: 2rem;
    color: var(--green);
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }
  
  

  .about-image{
    text-align: center;
   img{
     margin-top: 2rem;
     width: 75%;
     filter: grayscale(0);
     transition: filter 0.5s;
     &:hover{
       filter: grayscale(0);
     }
   }
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }
  }

  @media (max-width: 960px){
    display: block;
    text-align: center;
    
    .main-tech-icons,
    .skill-tags {
      justify-content: center;
    }

    .skill-category {
      text-align: center;
    }
    .about-image{
      display: flex;
      max-width: 100%;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }
    
    
  }

`