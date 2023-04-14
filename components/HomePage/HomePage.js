import Banner from "./Banner"
import Blog from "./Blog"
import InfoSection from "./InfoSection"
import Products from "./Products"
import Subscribe from "./Subscribe"
import Video from "./Video"


const HomePage = () => {
  return (
    <>
      <Banner></Banner>
      <InfoSection></InfoSection>
      <Video></Video>
      <Products></Products>
      <Blog></Blog>
      <Subscribe></Subscribe>
    </>
  )
}

export default HomePage