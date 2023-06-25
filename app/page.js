import './page.module.css';

import Canvas from './components/ui/Canvas';
import Layout from './components/layouts/Layout';
import Header from './components/layouts/Header';

export default function Home() {
  return (
    <div className='app'>
      <Canvas />
      <header className='mainheader'>
        <Header />
      </header>
      <div className='layout'>
        <Layout />
      </div>
    </div>
  )
}
