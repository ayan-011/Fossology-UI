  
const Home = () => { 

    const cards = [
  {
    title: "Upload and Scan files",
    description: "Upload and scan files into the FOSSology server and get information.",
  },
  {
    title: "Review Documents",
    description: "Review licenses, copyrights, export control and other information.",
  },
  {
    title: "Generate Reports",
    description: "Generate report files based on your own custom classification scheme.",
  },
];

  return (
    <div className='w-full custom-gradient text-white '>
        <div className="lg:flex">

        <div className='w-full h-full p-8 px-12 text-sm'>
            <p> <b>FOSSology</b> is a framework for software analysis tools. With it, you can:</p>
            <ul className='mt-5 leading-loose'>
                <li>Upload files into the FOSSology repository.</li>
                <li>Unpack files (zip, tar, bz2, isos, and many others) into their component files.</li>
                <li>Browse upload file trees.</li>
                <li>View file contents and metadata.</li>
                <li>Scan for software licenses.</li>
                <li>Scan for copyrights and author information./li</li>
                <li>View side-by-side license and bucket differences between file trees.</li>
                <li>Tag and attach notes to files.</li>
                <li>Report files based on your custom classification scheme.</li>
            </ul>
            <div className='mt-5'>
                <b>Where to begin...</b>
                <ul className='mt-5 px-4 leading-loose'>
                    <li>▪ The top menu contains all primary features of FOSSology.</li>
                    <li>▪ Depending on your access rights, you may be able to upload, analyze files, or manage users.</li>
                </ul>

            </div>
        </div>


        <div className='w-full h-full px-24 p-8'>

            <div className="authentication w-full border-custom-orange-gradient  ">
                <div className="username w-full   flex p-4 px-8 justify-between items-center">
                    <p>Username : </p>
                    <input type="text" className='w-2/3 rounded bg-zinc-800 p-2 text-white outline-none ' placeholder='Enter username' />
                </div>
                <div className="username w-full   flex p-1 px-8 justify-between items-center">
                    <p>Password : </p>
                    <input type="text" className='w-2/3 rounded bg-zinc-800 p-2 text-white outline-none' placeholder='Enter password' />
                </div>
                 
                <div className="button w-full flex justify-center py-4">
                    <button  
                    className="active:scale-95 p-2 px-10 bg-black rounded cursor-pointer hover:bg-zinc-100 font-semibold hover:text-black transition-all duraiton-100 ">Login</button>
                </div>

            </div>
        </div>
        </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-gray-800 rounded-lg shadow-lg p-9 hover:scale-101 transition-transform duration-100"
        >
          <h2 className="text-xl font-bold mb-2 text-white">{card.title}</h2>
          <p className="text-white">{card.description}</p>
        </div>
      ))}
    </div>
        
    </div>
  )
}

export default Home