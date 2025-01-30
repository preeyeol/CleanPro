import Hero from "../components/ui/LandingDesign/Hero"
import Carousel from "../components/ui/LandingDesign/Images.jsx"
import Second from "../components/ui/LandingDesign/Second"

const LandingPage= ()=>{
return(

    <div className='h-auto overflow-hidden'> 
        <Hero/>
        <Second/>
        <Carousel/>
    </div>
)


}

export default LandingPage