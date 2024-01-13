import '../App.css';
import ProfilePic from '../images/profilepic.jpg';
function Home() {
  return (
    <div className=" order-1 w-[99%] bg-white flex-[0_0_auto] h-[619px] relative md:w-full">
      <div className=" flex flex-col gap-10 md:gap-[50px] h-min left-2/4 top-[47%] md:top-[49%] content-center justify-start items-center  overflow-visible p-0 absolute [transform:translate(-50%,-50%)] w-min">
        <div className="[transform:perspective(1200px)_rotate(-3deg)] rounded-[40px] h-[255px] p-4 w-[165px] place-content-center items-center md:rounded-[60px] [box-shadow:rgba(0,0,0,0.02)_0px_0.602187px_3.01094px_-0.333333px,rgba(0,0,0,0.035)_0px_2.28853px_11.4427px_-0.666667px,_rgba(0,0,0,0.08)_0px_10px_50px_-1px] flex flex-[0_0_auto] gap-[10px] overflow-visible md:p-5 relative">
          <div
            style={{
              backgroundImage: `url(${ProfilePic})`,
            }}
            className=" rounded-[25px] flex-[1_0_0px] bg-cover h-full overflow-hidden relative w-min border-[rgb(196,196,196)] bg-center"
          />
        </div>
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
  );
}

export default Home;
