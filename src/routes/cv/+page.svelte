<script>
    import { cv } from './cv';
</script>

<h1>CV</h1>
<br />
<section>
    <h2>Arbetslivserfarenhet</h2>
    <hr>
    {#each cv.workExperience as job}
        <h3><u>{job.roleName}</u></h3>
        <i>{job.yearStart}-{job.yearEnd ?? ""} {job.companyName}, {job.location}</i>
        <ul>
            {#each job.experiences as exp}
                <li>{exp}</li>
            {/each}
        </ul>
    {/each}
</section>
<section>
    <h2>Utbildning</h2>
    <hr>
    {#each cv.education as edu}
        <h3><u>{edu.name}</u></h3>
        <i>{edu.yearStart}-{edu.yearEnd ?? ""} {edu.schoolName}, {edu.location}</i>
        <p>{edu.description}</p>
    {/each}
</section>