import Cities from "../components/cities";
import ImpactTab from "../components/impactTab";
import ServiceDownload from "../components/serviceDownload";
import ServiceStickWithUS from "../components/serviceStickwithUS";
import ServicesHero from "../components/servicesHero";
import ServicesSpecialists from "../components/servicesSpecialist";

export default function ServicesPage({ setActiveNav }) {
    setActiveNav("services")
    return (
        <>
            <ServicesHero />
            <ServicesSpecialists />
            <ImpactTab/>
            <Cities/>
            < ServiceStickWithUS />
            <ServiceDownload/>
        </>
    )
} 