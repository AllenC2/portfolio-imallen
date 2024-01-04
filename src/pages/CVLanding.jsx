import MobileCardsSlider  from "../components/MobileCardsSlider";
import { ContactCard } from "../components/ContactCard";
import { ExperienceBlock } from '../components/ExperienceBlock';
import { ScholarshipBlock } from '../components/ScholarshipBlock';
import { SoftSkillsBlock } from '../components/SoftSkillsBlock';

export function CVLanding(){
    return(
        <>
        <MobileCardsSlider></MobileCardsSlider>
        <ContactCard></ContactCard>
        <ExperienceBlock></ExperienceBlock>
        <ScholarshipBlock></ScholarshipBlock>
        <SoftSkillsBlock></SoftSkillsBlock>
        </>
    )
}