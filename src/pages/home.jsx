import BlogComponent from "../components/blogComponent";
import Cities from "../components/cities";
import Fair from "../components/fair";
import HeroDownloadApp from "../components/heroDownloadApp";
import HomeMobility from "../components/homeMobility";
import HomeServices from "../components/homeServices";
import HomeHero from "../components/homehero";
import ImpactTab from "../components/impactTab";
import SafetyFirst from "../components/safetyFirst";
import StickWithUS from "../components/stickWithUs";

export default function Homepage({ setActiveNav }) {
    setActiveNav("home")
    return (
        <>
            <HomeHero />
            <Cities />
            <SafetyFirst/>
            <HomeMobility />
            <Fair />
            <ImpactTab/>
            <HeroDownloadApp />
            <HomeServices/>
            <StickWithUS/>
            <BlogComponent/>
        </>
        
    )
}