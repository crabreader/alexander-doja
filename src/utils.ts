import { cv } from './routes/cv/cv'

export function toggleMenu() {
    const x = document.querySelector<HTMLElement>(".navbar");

    if (x) {
        if (x.style.display === "block") {
        x.style.display = "none";
        } else {
            x.style.display = "block";
        }   
    }
}

export async function fetchCV() {
    try {
        populateJobs(cv);
        populateEducation(cv);

    } catch (error) {
        console.error('Error fetching CV:', error);
    }
}

function populateJobs(obj: any) {
    const jobsSection = document.getElementById("arbetslivserfarenhet");
    const jobs = obj.workExperience;

    if (jobsSection) {
        for (const job of jobs) {
            const header = document.createElement("h3");
            const description = document.createElement("i");
            const expList = document.createElement("ul");
    
            header.textContent = job.roleName;
            description.textContent = `${job.yearStart}-${job.yearEnd} ${job.companyName}, ${job.location}`;
    
            for (const exp of job.experiences)
            {
                const listItem = document.createElement("li");
                listItem.textContent = exp;
                expList.appendChild(listItem);
            }
    
            jobsSection.appendChild(header);
            jobsSection.appendChild(description);
            jobsSection.appendChild(expList);
        }   
    }
}

function populateEducation(obj: any) {
    const eduSection = document.getElementById("utbildning");
    const educations = obj.education;

    if (eduSection) {
        for (const education of educations) {
            const name = document.createElement("h3");
            const info = document.createElement("i");
            const description = document.createElement("p");
    
            name.textContent = education.name;
            info.textContent = `${education.yearStart}-${education.yearEnd} ${education.schoolName}, ${education.location}`;
            description.textContent = education.description;
    
            eduSection.appendChild(name);
            eduSection.appendChild(info);
            eduSection.appendChild(description);
        }   
    }
}