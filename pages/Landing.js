
const Landing = () => {
  return (
    <div id='Home' className="flex w-full h-screen bg-stone-400 justify-center items-center text-2xl">
        <div className="z-40 flex-col bg-slate-100 w-3/4 h-1/2 p-5 ">

            <div className="flex w-full items-baseline pb-5">
              <h1 className="flex text-4xl"> Hello there! </h1>
            </div>
            <div className="flex w-full items-baseline pb-5">
              <h1 className="text-3xl pr-4">My name is </h1>
              <h1 className="text-5xl text-blue-400">Alexander Petro </h1>
            </div>
            <div className="flex w-full items-baseline pt-3 ">
              <h2 className="text-2xl ">I am a CS student and aspiring full stack developer. </h2>
            </div>
            <div>
            </div>

        </div>
    </div>
  )
}

export default Landing