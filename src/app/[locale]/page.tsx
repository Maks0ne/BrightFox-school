import HeaderSlider from '@/components/HeaderSlider';
import AboutUsMain from '@/components/Main/AboutUsMain';
import CoursesMain from '@/components/Main/CoursesMain';
import ParallaxMain from '@/components/Main/ParallaxMain';
import Reviews from '@/components/Main/Reviews';
import WelcomeTitle from '@/components/Main/WelcomeTitle';

const Home = () => {
  return (
    <>
      <HeaderSlider />
      <WelcomeTitle />
      <AboutUsMain />
      <ParallaxMain />
      <Reviews />
      <CoursesMain />
    </>
  );
};

export default Home;
