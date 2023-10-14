import Cities from "../components/cities";
import Fair from "../components/fair";
import HeroDownloadApp from "../components/heroDownloadApp";
import HomeMobility from "../components/homeMobility";
import HomeServices from "../components/homeServices";
import HomeHero from "../components/homehero";
import SafetyFirst from "../components/safetyFirst";
import StickWithUS from "../components/stickWithUs";

export default function Homepage ({set}) {
    return (
        <>
            <HomeHero />
            <Cities />
            <SafetyFirst/>
            <HomeMobility />
            <Fair />
            <HeroDownloadApp />
            <HomeServices/>
            <StickWithUS/>
        </>
        
    )
}