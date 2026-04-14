import siteConfig from '../../data/siteConfig'

interface HeroProps {
  heroImg?: string
  title: string
}

const Hero = ({ heroImg, title }: HeroProps) => (
  <div
    className="relative table w-full overflow-hidden h-[70vh] bg-fixed bg-bottom bg-no-repeat bg-cover"
    style={{ backgroundImage: `url(${heroImg || siteConfig.siteCover})` }}
  >
    <div className="table-cell align-middle text-center w-full">
      <h1 className="font-bold text-5xl mx-[60px] my-[10px] text-white [text-shadow:1px_1px_4px_rgba(34,34,34,0.6)]">
        {title}
      </h1>
    </div>
  </div>
)

export default Hero
