import { Layout } from './components/layout/Layout';
import { Typography } from './components/ui/Typography';
import { Button } from './components/ui/Button';
import { Hero } from './sections/Hero';
import { Journey } from './sections/Journey';
import { Experience } from './sections/Experience';
import { Teaching } from './sections/Teaching';
import { Contact } from './sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Journey />
      <Experience />
      <Teaching />
      <Contact />
    </Layout>
  );
}

export default App;