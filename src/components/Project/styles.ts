import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;
  
  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
  .projects{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project{
      padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;
      &:hover{
        transform: translateY(-5px);
        background-color: var(--blue);
      }

      header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;
        .project-links{
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        a > img {
          width: 5.0rem;
        }
      }
      
      .project-category {
        display: inline-block;
        margin-bottom: 1rem;
        padding: 0.4rem 1rem;
        border-radius: 2rem;
        background-color: rgba(35, 206, 107, 0.15);
        color: var(--green);
        font-size: 1.2rem;
        font-weight: 600;
        letter-spacing: 0.05rem;
      }

      h3{
        margin-bottom: 1.2rem;
        font-size: 2rem;
        line-height: 1.3;
      }

      p{
        letter-spacing: 0.08rem;
        margin-bottom: 1.6rem;
        line-height: 1.6;
        opacity: 0.9;

        a{
          color: #FFFF;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;
          &:hover{
            color: var(--green);
          }
        }
      }

      .project-highlights {
        margin: 0 0 1.6rem;
        padding-left: 1.6rem;
        list-style: disc;

        li {
          margin-bottom: 0.6rem;
          font-size: 1.4rem;
          line-height: 1.5;
          opacity: 0.85;
        }
      }

      footer{
        margin-top: auto;
        .tech-list{
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.8rem;
          font-size: 1.2rem;
          opacity: 0.85;

          li {
            padding: 0.4rem 0.9rem;
            border-radius: 1.2rem;
            background-color: rgba(255, 255, 255, 0.08);
          }
        }
      }

    }
  }

  @media (max-width: 960px){
    .projects{
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px){
    .projects{
      grid-template-columns: 1fr;
    }
  }
`