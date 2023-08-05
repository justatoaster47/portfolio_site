
const ProjectDisplay = ({ Title, Description, SourceLink, TrialLink }) => {
  return (
    <div className='fcenter flex-wrap text-sm md:text-3xl h-full w-350 bg-third rounded-md'>
    <div className='fcenter bg-primary rounded-lg w-4/5 h-1/6 m-2 '>
      <h1 className="text-lg md:text-5xl ">
        {Title}
      </h1>
    </div>
    <div className='fcenter w-4/5 h-3/5 p-0 rounded-md bg-white'>
      <p>
        {Description }
      </p>
    </div>
  <div className='fcenter justify-around w-full gap-3 bg-transparent p-2 rounded-md '>
    <a href={SourceLink} target="_blank" className='fcenter bg-primary hover:text-hovertextcolor italic rounded-md align-bottom w-1/2 h-full'>
       Source 
    </a>
    <a href={TrialLink} target="_blank" className='fcenter bg-primary hover:text-hovertextcolor italic rounded-md align-bottom w-1/2 h-full'>
        Trial
    </a>

  </div>
</div>
  )
}

export default ProjectDisplay