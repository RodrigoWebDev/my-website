import { CenteredHero } from "../../components/Hero";
import Icon from "../../components/Icon";
import Layout from "../../components/Layout";
import { Card } from "../../components/Card";
import { Input } from "../../components/Input";
import { i18n } from "../../business/locale";
import { getFilteredSkills, updateSearch } from "../../business/skills";

const Skills = () => {
  return (
    <Layout>
      <CenteredHero
        title="Minhas habilidades"
        icon={<Icon name="clipboardList" size={100} />}
      />

      <main class="px-4 my-8">
        <form class="my-10 flex justify-center sticky top-[100px] left-0 z-10">
          <div class="w-full md:w-xs">
            <Input
              type="search"
              onInput={updateSearch}
              label={<Icon name="search" />}
              placeholder={i18n("SearchForSkills")}
            />
          </div>
        </form>
        <div class="flex flex-wrap justify-between gap-[1%]">
          {getFilteredSkills().map((item) => (
            <div class="w-full md:w-[24%] mb-4">
              <Card
                btnText={
                  <>
                    <Icon name="link" />
                    {i18n("SeeProjects")}
                  </>
                }
                description=""
                title={item}
                link={`/projects?filters=${item}`}
              />
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default Skills;
