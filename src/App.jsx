import { useReducer } from 'react'
import './App.css'
import EmployeeList from './Components/EmployeeList.js/EmployeeList'
import TeamList from './Components/TeamList/TeamList'
import {Data} from './assets/Data/Data'

const initialState = {
  allEmployees: Data,
  teamMembers: [],
  averageAge: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MEMBER':
      return {
        ...state,
        allEmployees: state.allEmployees.map((employee) =>
          employee.id === action.payload.id ? { ...employee, added: true } : employee
        ),
        teamMembers: [...state.teamMembers, action.payload]
      };
    case 'REM_MEMBER':
      return {
        ...state,
        allEmployees: state.allEmployees.map((employee) =>
          employee.id === action.payload.id ? { ...employee, added: false } : employee
        ),
        teamMembers: state.teamMembers.filter((member) => member.id !== action.payload.id)
        
      };
      case 'SORT_BY_AGE':
      return {
        ...state,
        
        teamMembers: [...state.teamMembers].sort((a,b)=> a.age-b.age)
        
      };
      case 'CALCULATE_AVERAGE':
        const total = state.teamMembers.reduce((acc, member)=> acc + member.age ,0)
        const averageAge = total/ state.teamMembers.length 
      return {
        ...state,
       averageAge 
        
      };
    default:
      return state;
  }
};



function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state.teamMembers);

  return (
    <>
     <section className='w-full'>
      <div className='max-w-screen-lg mx-auto my-8 '>
        <div className='flex justify-evenly gap-4 align-middle  text-center'>
            <div className='w-1/2 max-h-screen overflow-y-scroll border-4 border-red-400 py-8 px-4' >
              <h1 className='font-bold text-2xl py-2'>Employee</h1>
                {
                  state.allEmployees.map((items)=>{
                    return(<EmployeeList Data={items} key={items.id}  dispatch={dispatch}/>)
                  })
                }
            </div>
            <div className='w-1/2 border-4 py-8 px-4 max-h-screen overflow-y-scroll'>
            <h1 className='font-bold text-2xl py-2'>Team</h1>
              <button onClick={()=>dispatch({type:'SORT_BY_AGE'})} className='px-4 py-2 bg-orange-300 rounded-xl '>Sort by age</button>
              <TeamList Data={state.teamMembers}  dispatch={dispatch} />
              <p className='my-2'> <button className='px-4 py-2 bg-orange-300 rounded-xl ' onClick={()=>dispatch({type:'CALCULATE_AVERAGE'})}>
              Avrage Age :{Math.round(state.averageAge)}
                </button></p>
            </div>
        </div>
      </div>
     </section>
    </>
  )
}


export default App
