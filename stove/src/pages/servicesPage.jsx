import ServiceDownload from "../components/serviceDownload";
import ServiceStickWithUS from "../components/serviceStickwithUS";
import ServicesHero from "../components/servicesHero";
import ServicesSpecialists from "../components/servicesSpecialist";

export default function ServicesPage({ setActiveNav }) {
    setActiveNav("services")
    return (
        <>
            <ServicesHero />
            <ServicesSpecialists/>
            < ServiceStickWithUS />
            <ServiceDownload/>
        </>
    )
} 