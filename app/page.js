import Nav from '@components/Nav';
import Landing from '@pages/Landing';
import About from '@pages/About';
import Projects from '@pages/Projects';
import Contact from '@pages/Contact';

const page = () => {
  return (
    <section>

      <Nav />
      <Landing />
      <About />
      <Projects />
      <Contact />

    </section>
  )
}

export default page