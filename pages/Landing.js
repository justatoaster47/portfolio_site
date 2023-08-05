const Landing = () => {
  return (
    <div id='Home' className="mypage">
      <div className="mypagecontent flex-col ">

        <div className="flex w-full items-baseline ">
          <h1 className="flex text-xl md:text-4xl"> Hello there! </h1>
        </div>

        <div className="pb-5 pt-5 flex w-full items-baseline">
          <h1 className="pr-4 text-lg md:text-3xl">My name is <span className="text-2xl md:text-5xl text-accent">Alexander Petro</span></h1>
        </div>

        <div className="flex w-full items-baseline">
          <h2 className="text-sm md:text-xl">I am a CS student and aspiring full stack developer. </h2>
        </div>

      </div>
    </div>
  );
}

export default Landing;
