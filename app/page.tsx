import type { NextPage } from 'next';
import Link from 'next/link';
import Avatar from '../components/Avatar';

const Header: React.FC = () => (
  <header className='header'>
    <Avatar avatar='https://avatars.githubusercontent.com/u/44675974?v=4' overlay='yflowers.png' />
    <div className='about'>
      <h2 className='name'>hi, I'm <span className='text-color-cycle font-medium'>Balázs Kovács</span>.</h2>
      <p className='max-w-sm text-mocha-subtext0'>
        I'm a Visual Computing MSc. student from Hungary with an interest in renderer architecture and real-time computer graphics.
      </p>
    </div>
  </header>
);

const Navigation: React.FC = () => {
  return (
    <nav className='flex items-center gap-2 text-lg'>
      <div className='side' />
        <Link href="#projects">
          <span className='link'>Projects</span>
        </Link>
        <div className='dot' />
        <Link href="https://github.com/Andromeda08" target="_blank">
          <span className='link'>Github</span>
        </Link>
      <div className='h-[3px] w-[16px] bg-mocha-peach border border-mocha-peach rounded-xl' />
    </nav>
  );
};

const Footer: React.FC = () => (
  <footer className='absolute bottom-4 flex gap-2 items-center text-mocha-surface0'>
    <span>Balázs Kovács, 2024</span>
    <div className='w-[4px] h-[4px] border border-mocha-surface0 bg-mocha-surface0 rounded-full' />
    <Link href="https://github.com/catppuccin/catppuccin" target="_blank">
      <span className='transition-colors hover:text-mocha-subtext0'>catppuccin theme ♡</span>
    </Link>
  </footer>
);

const Stardust: React.FC = () => (
  <div className='stardust hover:border-mocha-mauve'>
    <Link href="https://github.com/Andromeda08/Stardust" target="_blank">
      <h3>Stardust</h3>
    </Link>
    <div className='description'>
      <p>
        Stardust is a Render Graph-based rendering engine built on top of the
        <span className='text-mocha-red'> Vulkan</span> API, written in <span className='text-mocha-pink'>C++</span>.
      </p>
      <p>
        Its features include a Graph Builder API and Node Editor UI, automatic resource usage optimization
        and a set of Nodes that implement commonly seen techniques (Deferred Shading, RT Ambient Occlusion, FXAA).
      </p>
      <p>
        Additionally, the engine supports the modern <b>Ray Tracing</b> and <b>Mesh Shading</b> pipelines.
      </p>
    </div>
    <div className='labels'>
      <div className='label text-mocha-red'>Vulkan</div>
      <div className='label text-mocha-pink'>C++</div>
      <div className='label text-mocha-blue'>GLSL</div>
      <div className='label text-mocha-green'>HLSL</div>
      <div className='label text-mocha-teal'>ImGui</div>
    </div>
  </div>
)

const Home: NextPage = () => {
  return (
    <main className='page'>
        <Header />
        <Navigation />
        <section className='max-w-4xl flex flex-wrap gap-4 justify-center'>
          <Stardust />
        </section>
        <section className='projects'>
        <div className='project hover:border-mocha-pink'>
            <h3>Nebula</h3>
            <div className='description'>
              A wrapper built on top of the <span className='text-mocha-red'>Vulkan</span> API, which serves as the base for the new version of <Link href="https://github.com/Andromeda08/Stardust" target="_blank"><span className='text-mocha-mauve'>Stardust</span></Link>
            </div>
            <div className='labels'>
            <div className='label text-mocha-red'>Vulkan</div>
              <div className='label text-mocha-pink'>C++</div>
            </div>
          </div>
          <div className='project hover:border-mocha-peach'>
            <Link href="https://github.com/Andromeda08/Meow" target="_blank">
              <h3>My Website</h3>
            </Link>
            <div className='description'>
              The very website you're looking at right now.
            </div>
            <div className='labels'>
              <div className='label text-mocha-blue'>React</div>
              <div className='label text-mocha-sapphire'>Typescript</div>
              <div className='label text-mocha-teal'>Tailwind</div>
              <div className='label text-mocha-pink'>Sass</div>
            </div>
          </div>
          <div className='project hover:border-mocha-mauve'>
            <Link href="https://github.com/Andromeda08/Katsu" target="_blank">
              <h3>katsu!</h3>
            </Link>
            <div className='description'>
              A <span className='text-mocha-mauve'>Kotlin</span> wrapper various routes of the osu! api, and a CLI app you can use to browse the api.
            </div>
            <div className='labels'>
              <div className='label text-mocha-mauve'>Kotlin</div>
            </div>
          </div>
          <div className='project hover:border-mocha-green'>
            <Link href="https://github.com/Andromeda08/XIViewer" target="_blank">
              <h3>XIViewer</h3>
            </Link>
            <div className='description'>
              An <span className='text-mocha-green'>Android</span> app with which you can view characters from the critically acclaimed mmorpg Final Fantasy XIV.
            </div>
            <div className='labels'>
              <div className='label text-mocha-mauve'>Kotlin</div>
              <div className='label text-mocha-green'>Android</div>
            </div>
          </div>
          <div className='project hover:border-mocha-pink'>
            <Link href="https://osu.tsukiakari.hu" target="_blank">
              <h3>osu!pv</h3>
            </Link>
            <div className='description'>
              A website with which you can view osu! players profiles.
            </div>
            <div className='labels'>
              <div className='label text-mocha-blue'>React</div>
              <div className='label text-mocha-sapphire'>Typescript</div>
              <div className='label text-mocha-teal'>Tailwind</div>
            </div>
          </div>
        </section>
      <Footer />
    </main>  
  );
};

export default Home;
