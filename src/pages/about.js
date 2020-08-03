import React from 'react'
import Layout from '../components/layout'
import Section from '../components/globals/section/Section'
import HeaderPage from '../components/globals/header/HeaderPage'
import BannerPage from '../components/globals/banner/BannerPage'

const about = () => {
  return (
    <Layout>
      <HeaderPage>
        <Section style={{ width: '100vw', alignItems: 'center' }}>
          <BannerPage title='about us' />
        </Section>
      </HeaderPage>
      <Section style={{ margin: '4rem auto' }}>
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
    </Layout>
  )
}

export default about
