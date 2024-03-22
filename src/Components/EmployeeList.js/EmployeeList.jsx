import React from 'react'
// import Data

const EmployeeList = ({Data, dispatch}) => {
    // console.log(Data);
function addTeamMem(employee){
  dispatch({type:"ADD_MEMBER", payload:employee})
}

  return (
    <div className='p-2 shadow-md w-full m-2'>
       <div className='flex'>
        {
          Data.added ?  <p className='w-1/3 text-gray-400'>{Data.first_name} </p> :  <p className='w-1/3'>{Data.first_name} </p>
        }
           
            <p className='w-1/3'>{Data.age}</p>
            {
              Data.added ? "" : <p className='w-1/3'><button className='px-4 py-1 bg-blue-500 text-white rounded-md ' onClick={()=>addTeamMem(Data)}>ADD</button></p>
            }
       </div>
    </div>
  )
}

export default EmployeeList