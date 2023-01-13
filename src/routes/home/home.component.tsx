import EducationFC from '../../components/education/education.component';
import ExperienceFC from '../../components/experience/experience.component';
import PatentFC from '../../components/patent/patent.component';
import ProfileFC from '../../components/profile/profile.component';
import ProjectsFC from '../../components/projects/projects.component';
import SkillsFC from '../../components/skills/skills.component';
import { myInfo } from '../../my-info';
import './home.styles.scss';

const Home = () => {
  const { profile, educations, skills, experiences, projects, patents } = myInfo;
  return (
    <main>
      <div className='inner-content'>
        <ProfileFC profile={profile} />
        <EducationFC educations={educations} />
        <SkillsFC skills={skills} />
        <ExperienceFC experiences={experiences} />
        <ProjectsFC projects={projects} />
        {/* <PatentFC patents={patents} /> */}
      </div>
    </main>
  );
};

export default Home;
