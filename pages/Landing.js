const Landing = () => {
  return (
    <div id='Home' className="flex justify-center items-center w-full h-screen">
      <div className="flex-col p-5 w-3/4 h-1/2 bg-primary rounded-lg">

        <div className="flex w-full items-baseline text-2xl">
          <h1 className="flex text-4xl"> Hello there! </h1>
        </div>

        <div className="pb-5 pt-5 flex w-full items-baseline">
          <h1 className="pr-4 text-3xl">My name is <span className="text-5xl text-accent">Alexander Petro</span></h1>
        </div>

        <div className="flex w-full items-baseline">
          <h2 className="text-2xl">I am a CS student and aspiring full stack developer. </h2>
        </div>

      </div>
    </div>
  );
}

export default Landing;
