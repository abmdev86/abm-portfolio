import { BookOpenIcon } from '@heroicons/react/24/solid';
import '../App.css';

import IntroComponent from '../components/IntroComponent';
import SkillCard from '../components/SkillCard';

function Home() {
  return (
    <div className="w-screen h-screen flex bg-[#F4E9CD] relative justify-center items-center">
      <IntroComponent />
      
      <SkillCard skillName='React' icon={<BookOpenIcon/>}/>

    
    </div>
  );
}

export default Home;
