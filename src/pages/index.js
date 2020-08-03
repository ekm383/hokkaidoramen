import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import HeaderIndex from '../components/globals/header/HeaderIndex'
import Banner from '../components/globals/banner/Banner'
import Section from '../components/globals/section/Section'
import Map from '../components/Map'
import Button from '../components/globals/button/Button'
import Gallery from '../components/Gallery'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      content: dataJson {
        intro
        menu
      }
    }
  `)
  const { intro, menu } = data.content
  return (
    <Layout>
      <SEO title='Home' description={intro} />
      <HeaderIndex>
        <Section style={{ width: '100vw', alignItems: 'center' }}>
          <Banner subtitle={intro}>
            <a href={menu}>
              <Button>ORDER TAKEOUT</Button>
            </a>
          </Banner>
        </Section>
      </HeaderIndex>
      <Section style={{ width: '100vw', alignItems: 'center' }}>
        <Gallery />
      </Section>
      <Section style={{ padding: '4rem 0rem 4rem 0rem' }}>
        <h4 style={{ marginBottom: '1rem' }}>Natsuboshi Hokkaido Ramen</h4>
        <p style={{ marginBottom: '1rem' }}>
          Our company Natsuboshi the meaning is summer star, our company goal is
          original recipes from Hokkaido that we want you to feel Japanese ramen
          in Hawaii.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          Enjoy the taste of traditional Hokkaido ramen made by a chef with more
          than 10 years of experience in Hokkaido. Our signature tokotsu broth
          to make shoyu and miso ramen. We simmer pork bones for about 10 hours
          until it is pearly white. After a long, low-temperature cook.
          Especially, our miso is red miso and white miso combined it taste more
          rich and creamy. In Hawaii, I want to convey the unique taste of
          Japanese ramen and grow together sharing the tradition and warm
          affection of Hawaii.
        </p>
      </Section>
      <Map />
    </Layout>
  )
}

export default IndexPage
