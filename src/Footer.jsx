import './App.css'




export function Footer(){

    return(
        <>
        <div className='bg-sky-900'>
      <div className='flex w-3/4 m-auto flex-wrap'>
        <div className="p-3 md:w-1/3 my-20 text-center item">
          <h2 className='text-3xl font-bold my-2'>LOCATION</h2>
          <p className='my-2'>2215 John Daniel Drive</p>
          <p className='my-2'>Clark, MO 65243</p>
        </div>
        <div className="p-3 md:w-1/3 my-20 text-center item">
          <p className='text-3xl font-bold my-2'>AROUND THE WEB</p>
          <div className='flex justify-center'>
            <div className="m-2 rounded-full border-white border-2 w-12 h-12"><i className="fa-brands fa-facebook translate-y-2 text-xl"></i></div>
            <div className="m-2 rounded-full border-white border-2 w-12 h-12"><i className="fa-brands fa-twitter translate-y-2 text-xl"></i></div>
            <div className="m-2 rounded-full border-white border-2 w-12 h-12"><i className="fa-brands fa-linkedin-in translate-y-2 text-xl"></i></div>
            <div className="m-2 rounded-full border-white border-2 w-12 h-12"><i className="fa-solid fa-globe translate-y-2 text-xl"></i></div>
          </div>
        </div>
        <div className="p-3  my-20 text-center md:w-1/3 item">
          <h2 className='text-3xl font-bold my-2'>ABOUT FREELANCER</h2>
        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        
        </div>

      </div>
      </div>
      <div className='text-center p-8'>
        <p>Copyright © Your Website 2021</p>
      </div>
        
        
        
        
        </>

    )
}