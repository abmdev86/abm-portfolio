export default function ProfilePicture({ profilePic }) {
  return (
    <div className="[transform:perspective(1200px)_rotate(-3deg)] rounded-[40px] h-[255px] p-4 w-[165px] place-content-center items-center md:rounded-[60px] [box-shadow:rgba(0,0,0,0.02)_0px_0.602187px_3.01094px_-0.333333px,rgba(0,0,0,0.035)_0px_2.28853px_11.4427px_-0.666667px,_rgba(0,0,0,0.08)_0px_10px_50px_-1px] flex flex-[0_0_auto] gap-[10px] overflow-visible md:p-5 relative">
      <div
        style={{
          backgroundImage: `url(${profilePic})`,
        }}
        className=" rounded-[25px] flex-[1_0_0px] bg-cover h-full overflow-hidden relative w-min border-[rgb(196,196,196)] bg-center"
      />
    </div>
  );
}
