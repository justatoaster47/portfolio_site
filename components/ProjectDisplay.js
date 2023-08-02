
const ProjectDisplay = ({ Title, Description, SourceLink, TrialLink }) => {
  return (
    <div className='flex flex-wrap justify-center items-center h-full w-full bg-third rounded-md'>
    <div className='flex justify-center items-center bg-primary rounded-lg w-4/5 h-1/6 m-2'>
      <h1>
        {Title}
      </h1>
    </div>
    <div className='flex w-4/5 h-3/5 p-0 rounded-md justify-center items-center bg-white'>
      <p>
        {Description }
      </p>
    </div>
  <div className='flex justify-around w-full gap-3 bg-transparent p-2 rounded-md '>
    <a href={SourceLink} target="_blank" className='flex bg-primary hover:text-hovertextcolor text-lg font-bold justify-center items-center rounded-md align-bottom w-1/2 h-full'>
       Source 
    </a>
    <a href={TrialLink} target="_blank" className='flex bg-primary hover:text-hovertextcolor text-lg font-bold justify-center items-center rounded-md align-bottom w-1/2 h-full'>
        Trial
    </a>

  </div>
</div>
  )
}

export default ProjectDisplay