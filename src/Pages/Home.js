import '../App.css';
import Footer from '../components/Footer';
import ProfilePicture from '../components/ProfilePicture';
import ProfilePic from '../images/profilepic.jpg';
function Home() {
  return (
    <>
      <div className=" order-1 w-[99%] bg-white flex-[0_0_auto] h-[619px] relative md:w-full">
        <div className=" flex flex-col gap-10 md:gap-[50px] h-min left-2/4 top-[47%] md:top-[49%] content-center justify-start items-center  overflow-visible p-0 absolute [transform:translate(-50%,-50%)] w-min">
          <ProfilePicture profilePic={ProfilePic} />
          <div className=" items-center w-[299px] justify-start flex flex-[0_0_auto] flex-col gap-8 h-min overflow-visible p-0 relative">
            <div className=" outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-[0_0_auto] h-auto overflow-visible relative whitespace-pre w-auto [order:0]">
              <h1 className="font-sans text-4xl font-bold tracking-[-2.2px] text-center text-[rgb(0,17,34)]">
                Auroiah Morgan
              </h1>
            </div>
            <div className=" outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-[0_0_auto] h-auto overflow-visible relative whitespace-pre w-auto order-1">
              <h3 className="font-sans font-medium tracking-tighter leading-[1.4em] text-center text-[rgb(153,153,153)]">
                fullstack web developer
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </>
  );
}

export default Home;
