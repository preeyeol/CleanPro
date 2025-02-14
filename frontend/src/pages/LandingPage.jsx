import Divide from "../components/ui/LandingDesign/Divide.jsx"
import Hero from "../components/ui/LandingDesign/Hero"
import Last from "../components/ui/LandingDesign/LastPage.jsx"
import Promote from "../components/ui/LandingDesign/Promote.jsx"
import Second from "../components/ui/LandingDesign/Second"


const LandingPage= ()=>{
return(

    <div className='h-auto overflow-hidden'> 
        <Hero/>
        <Divide/>
        <Promote/>
        <Last/>
        <Second/>

  
    </div>
)


}

export default LandingPage