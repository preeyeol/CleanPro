import Divide from "../components/ui/LandingDesign/Divide.jsx"
import Hero from "../components/ui/LandingDesign/Hero"
import Promote from "../components/ui/LandingDesign/Promote.jsx"

import Second from "../components/ui/LandingDesign/Second"
import About from "./About.jsx"
import Contact from "./Contact.jsx"

const LandingPage= ()=>{
return(

    <div className='h-auto overflow-hidden'> 
        <Hero/>
        <Second/>
        <Divide/>
        <Promote/>

  
    </div>
)


}

export default LandingPage