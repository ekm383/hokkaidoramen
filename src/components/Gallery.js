import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "gallery/natsuboshi-ramen-01.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      img2: file(relativePath: { eq: "gallery/natsuboshi-ramen-02.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      img3: file(relativePath: { eq: "gallery/natsuboshi-ramen-03.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      img4: file(relativePath: { eq: "gallery/natsuboshi-ramen-04.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      img5: file(relativePath: { eq: "gallery/natsuboshi-ramen-05.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      img6: file(relativePath: { eq: "gallery/natsuboshi-ramen-06.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <GalleryWrapper>
      <div className='item item-1'>
        <Img fluid={data.img1.childImageSharp.fluid} />
      </div>
      <div className='item item-2'>
        <Img fluid={data.img2.childImageSharp.fluid} />
      </div>
      <div className='item item-3'>
        <Img fluid={data.img3.childImageSharp.fluid} />
      </div>
      <div className='item item-4'>
        <Img fluid={data.img4.childImageSharp.fluid} />
      </div>
      <div className='item item-5'>
        <Img fluid={data.img5.childImageSharp.fluid} />
      </div>
      <div className='item item-6'>
        <Img fluid={data.img6.childImageSharp.fluid} />
      </div>
    </GalleryWrapper>
  )
}

const GalleryWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  margin: 0rem auto;
  .item {
    position: relative;
    width: 16.66%;
    .info {
      text-transform: uppercase;
      font-size: 0.7rem;
      letter-spacing: 2px;
      position: absolute;
      top: 42%;
      left: 35%;
      padding: 0.5rem 1.5rem;
      color: var(--white);
      background: var(--mainColor);
      border: 1px solid var(--mainColor);
      border-radius: 5px;
      transition: 200ms ease-in;
      &:hover {
        cursor: pointer;
        background: none;
        border: 1px solid var(--white);
      }
    }
  }
  @media (max-width: 768px) {
    .item {
      width: 33.33%;
      .info {
        top: 42%;
        left: 30%;
        padding: 0.7rem 1.7rem;
        font-size: 1.2rem;
      }
    }
  }
`

export default Image
