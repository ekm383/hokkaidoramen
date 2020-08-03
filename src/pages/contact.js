import React from 'react'
import Layout from '../components/layout'
import Section from '../components/globals/section/Section'
import HeaderPage from '../components/globals/header/HeaderPage'
import BannerPage from '../components/globals/banner/BannerPage'
import ContactForm from '../components/ContactForm'

const contact = () => {
  return (
    <Layout>
      <HeaderPage>
        <Section style={{ width: '100vw', alignItems: 'center' }}>
          <BannerPage title='contact us' />
        </Section>
      </HeaderPage>
      <Section style={{ margin: '4rem auto' }}>
        <ContactForm />
      </Section>
    </Layout>
  )
}

export default contact
