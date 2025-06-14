import { CenteredHero } from "../../components/Hero";
import Icon from "../../components/Icon";
import Layout from "../../components/Layout";
import { IPage } from "../../model";
import skills from "../../data/skills.json";
import { Card } from "../../components/Card";
import { i18n, sortBy } from "../../utils";
import { Input } from "../../components/Input";
import { signal } from "@preact/signals";

const search = signal("");

const Skills = (props: IPage) => {
  console.log({ props });

  const getFilteredSkills = () => {
    const searchValue = search.value;

    if (!searchValue.length) {
      return sortBy(skills, "name");
    }

    return sortBy(skills, "name").filter((item) => {
      return item.name.toLowerCase().includes(searchValue.toLowerCase());
    });
  };

  const onInput = (e: any) => {
    search.value = e.target?.value;
  };

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
              onInput={onInput}
              icon={<Icon name="search" />}
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
                title={item.name}
                link={`/projects?filters=${item.name}`}
              />
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default Skills;
