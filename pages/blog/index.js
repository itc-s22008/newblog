import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'

export default function Blog () {
  return (
    <Container>
      <Meta pageTitle='blog' />
    <Hero
      title='blog'
      subtitle='recent Posts'
    />
    </Container>
  )
}
