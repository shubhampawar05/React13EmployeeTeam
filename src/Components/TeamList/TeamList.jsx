import React from 'react'

const TeamList = ({Data, dispatch}) => {

  const removeHandler = (data)=>{
    dispatch({
      type: "REM_MEMBER",
      payload: data
    })
  }

  return (
    <>
    <div>

    {
      Data.map((items)=>(
        <div className='p-2 shadow-md w-full m-2'>
          <div className='flex'>
            <p className='w-1/3'>{items.first_name} </p>
            <p className='w-1/3'>{items.age}</p>
            <p className='w-1/3'><button className='px-4 py-1 bg-blue-500 text-white rounded-md' onClick={()=>removeHandler(items)}>Remove</button></p>
          </div>
       
      </div>
      ))
    }
    </div>
    
    </>
  )
}

export default TeamList