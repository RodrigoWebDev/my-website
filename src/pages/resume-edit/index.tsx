//import ReactSelect from "react-select";
import { useCallback } from "preact/hooks";
import {
  addItem,
  removeItem,
  resumeEditFormState,
  save,
  updateItem,
} from "../../business/resumeEditForm";
import { getSkillsList } from "../../business/skills";
import { Input } from "../../components/Input";
import Layout from "../../components/Layout";
//import { MySelect } from "../../components/Select";
//import { convertStringArrayToValueLabelArray } from "../../utils/array";
import { showSuccessToast } from "../../utils/toast";

const skills = getSkillsList();
//const valueLabelSkills = convertStringArrayToValueLabelArray(skills);
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DnDItem } from "../../components/Dnd";
import { dndMove } from "../../utils/others";
import Icon from "../../components/Icon";

export const ResumeEdit = () => {
  const move = useCallback((dragIndex: number, hoverIndex: number) => {
    resumeEditFormState.value = {
      ...resumeEditFormState.value,
      skills: dndMove(resumeEditFormState.value.skills, dragIndex, hoverIndex),
    };
  }, []);

  return (
    <Layout>
      <div class="p-2 max-w-3xl mx-auto my-8">
        <h1 class="text-3xl mb-4">Edit resume</h1>

        <fieldset class="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <legend class="fieldset-legend">Skills</legend>

          <DndProvider backend={HTML5Backend}>
            {resumeEditFormState.value.skills.map((item, index) => (
              <DnDItem index={index} id={item.Name} move={move}>
                <div class="mb-4 flex items-center">
                  <Input
                    name={`skillName${index}`}
                    value={item.Name}
                    onInput={(e) => {
                      updateItem("skills", index, {
                        //@ts-ignore
                        Name: e.target.value,
                        YearsOfExperience:
                          resumeEditFormState.value["skills"][index]
                            .YearsOfExperience,
                      });
                    }}
                    autoCompleteOptions={skills}
                    label={<Icon name="drag" class="cursor-move" />}
                  />

                  <div class="w-[100px] ml-2">
                    <Input
                      type="number"
                      name={`skillYears${index}`}
                      value={item.YearsOfExperience}
                      onInput={(e) => {
                        updateItem("skills", index, {
                          Name: resumeEditFormState.value["skills"][index].Name,
                          //@ts-ignore
                          YearsOfExperience: parseInt(e.target.value),
                        });
                      }}
                    />
                  </div>
                  <button
                    class="btn btn-error ml-2"
                    onClick={() => {
                      removeItem("skills", index);
                    }}
                  >
                    &#x2715;
                  </button>
                </div>
              </DnDItem>
            ))}
          </DndProvider>

          <button
            class="btn btn-primary mb-4"
            onClick={() => {
              addItem("skills", {
                Name: "",
                YearsOfExperience: 1,
              });
            }}
          >
            + Add skill
          </button>
        </fieldset>

        <hr class="mb-4" />

        <div class="flex justify-between mb-4">
          <div>
            <button
              onClick={() => {
                save();
                showSuccessToast();
              }}
              class="btn btn-success mr-2"
            >
              <span>&#10003;</span> Save form
            </button>

            <a
              href="/resume?locale=en"
              target="_blank"
              class="btn btn-link mr-2"
            >
              En resume
            </a>
            <a href="/resume" target="_blank" class="btn btn-link">
              Pt resume
            </a>
          </div>

          <button
            onClick={() => {
              localStorage.removeItem("RESUME");
              showSuccessToast();
            }}
            class="btn btn-error"
          >
            <span>&#x2715;</span> Clear storage
          </button>
        </div>
      </div>
    </Layout>
  );
};
