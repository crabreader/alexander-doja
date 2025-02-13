interface workExperience {
    roleName: string;
    yearStart: number;
    yearEnd?: number;
    companyName: string;
    location: string;
    experiences: string[];

}

interface education {
    name: string;
    yearStart: number;
    yearEnd?: number;
    schoolName: string;
    location: string;
    description: string;
}

interface CVType {
    workExperience: workExperience[];
    education: education[];
}

export const cv: CVType = {
    workExperience : [
        {
            roleName : "Receptionist",
            yearStart : 2024,
            companyName : "Nordic Wellness",
            location : "Örnsköldsvik",
            experiences : [
                "Sälja gymkort",
                "Lokalvård",
                "Kundkontakt och hantering av personuppgifter"
            ]
        },
        {
            roleName : "Receptionist",
            yearStart : 2023,
            yearEnd : 2024,
            companyName : "Sportsgym24h",
            location : "Örnsköldsvik",
            experiences : []
        },
        {
            roleName : "Fruktpackare",
            yearStart : 2018,
            companyName : "Frukt på Jobbet",
            location : "Örnsköldsvik",
            experiences : [
                "Paketera fruktkorgar",
                "Detaljnoggrannhet med placering, vikter och antal m.m.",
                "Kunna ta ansvar och samarbeta i ett lag"
            ]
        },
        {
            roleName : "Tekniker",
            yearStart : 2022,
            yearEnd : 2023,
            companyName : "Örncompaniet",
            location : "Örnsköldsvik",
            experiences : [
                "Installera hårdvara som driver reklamskärmar",
                "Redigera bilder och sätta ihop reklamklipp",
                "Tekniska färdigheter"
            ]
        },
        {
            roleName : "SFI-Lärare",
            yearStart : 2021,
            yearEnd : 2022,
            companyName : "Arena Utbildning",
            location : "Örnsköldsvik",
            experiences : [
                "Undervisa svenska",
                "Planera lektioner",
                "Färdigheter i organisering och översikt"
            ]
        }
    ],
    education : [
        {
            name : "Systemutvecklare .NET med AI kompetens",
            yearStart : 2023,
            schoolName : "Edugrade Yrkeshögskola",
            location : "Distans",
            description : "Systemutveckling i Microsofts utvecklingsmiljö, objektorienterad programmering i C# och databashantering med Microsoft SQL Server med mera."
        },
        {
            name : "Japanska I - Distans",
            yearStart : 2023,
            yearEnd : 2024,
            schoolName : "Högskolan Dalarna",
            location : "Distans",
            description : "Grundläggande utbildning i det Japanska språket. Färdigheter inom läsning, skrivning och hörförståelse."
        },
        {
            name : "Imperativ programmering (C)",
            yearStart : 2022,
            yearEnd : 2022,
            schoolName : "Umeå Universitet",
            location : "Umeå",
            description : "Grundläggande färdigheter i programspråket C."
        },
        {
            name : "Teknikprogrammet - Informations & mediateknik",
            yearStart : 2018,
            yearEnd : 2021,
            schoolName : "Parkskolan",
            location : "Örnsköldsvik",
            description : "Gymnasial utbildning med tekniskt fokus. Inriktningen innehöll undervisning i datorkunskap, webbutveckling, programmering och mycket annat."
        }
    ]
};
