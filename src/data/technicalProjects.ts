export type TechnicalProject = {
    title: string;
    description: string;
    context: string;
    role: string;
    techs: string[];
    screenshots?: string[]; // Ajoutez un tableau pour les chemins des captures d'écran
    docUrl?: string; // Lien vers la documentation PDF
};

export const technicalProjects: TechnicalProject[] = [
    {
        title: "Configuration de deux LAN connectés via un routeur",
        description: "Création d'une topologie réseau avec deux LAN connectés via un routeur, configuration d'adresses IP statiques, validation du réseau par des tests de ping, identification de deux menaces de cybersécurité pour ce type de réseau.",
        context: "Projet réalisé dans le cadre de la formation TSSR pour simuler la mise en réseau de deux sites via un routeur.",
        role: " Conception de la topologie, configuration des IP statiques, validation du réseau par des tests de ping, identification des menaces de cybersécurité.",
        techs: ["Packet Tracer", "IP statiques", "routeur", "LAN"],
        screenshots: ["/packet.webp"],
    },
    {
        title: "Installation et configuration d'un serveur Windows Server 2019 pour Rue25",
        description: "Installation d'une machine virtuelle avec Windows Server 2019, configuration du rôle DHCP pour l'attribution automatique des adresses IP, Installation du rôle ADDS sous le nom de domaine rue25.local, création des utilisateurs, des unités d'organisation et des groupes de sécurité et documentation complète de l'installation et des configurations appliquées. ",
        context: "Projet réalisé pour l'agence immobilière Rue25 afin de configurer un serveur DHCP et un domaine Active Directory",
        role: "Installation de Windows Server 2019, configuration des rôles DHCP et ADDS, création des utilisateurs, des unités d'organisation et des groupes de sécurité.",
        techs: ["Windows Server 2019", "DHCP", "Active Directory", "uo", "groupes de sécurité","VirtualBox"],
        screenshots: ["/virtualmachinehome.webp", "/virtualwindowsserver.webp"],
        docUrl: "/documentation-rue25.pdf",
    },
];