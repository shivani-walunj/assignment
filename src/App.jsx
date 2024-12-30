
import './App.css'
import Card from './components/card';
import Input from './components/input';
import {EllipsisVertical,ChevronLeft,History,Calendar,Clock,Timer} from 'lucide-react'


function App() {
return(
  <div className='form-app'>

  <div className='form-app-header'>
  <div className='form-app-header-right'>
  <button className='back'>
  <ChevronLeft />
  </button>
  <button className='history'>

  <History  color='#6c72e7'/>
  </button>
  </div>
  <div className='form-app-header-left'>
  <button className=' form-save'>
    Save
  </button>
  <EllipsisVertical />
  </div>
  </div>
  <div className='form-app-container'>
  <h1 className='form-app-main-heading'>Safety Inspection</h1>
  <h6 className='form-app-sub-heading'>General Information <span><ChevronLeft height={16} width={16}/></span></h6>
    <Card heading="Describe the event details for technecians to understand in order to be able to fic the issues " placeholder="Enter your response"/>
    <Card heading="Select the date of inspection" type="date" placeholder="Select date"  svg={<Calendar  color="#6c72e7"/>}/>
    <Card heading="Select the time of inspection" type="date" placeholder="Select time"  svg={<Clock   color="#6c72e7"/>}/>
    <Card heading="How long do it take to complete the inspection" type="date" placeholder="Use stopwatch"  svg={<Timer   color="#6c72e7"/>}/>
  </div>
  </div>
);
}

export default App
