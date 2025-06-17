import {
  addItem,
  removeItem,
  resumeEditFormState,
  save,
  updateItem,
} from "../../business/resumeEditForm";
import { Input } from "../../components/Input";
import Layout from "../../components/Layout";
import { showSuccessToast } from "../../utils/toast";

export const ResumeEdit = () => {
  return (
    <Layout>
      <div class="p-2 max-w-3xl mx-auto my-8">
        <h1 class="text-3xl mb-4">Edit resume</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <fieldset class="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <legend class="fieldset-legend">Skills</legend>

            {resumeEditFormState.value.skills.map((item, index) => (
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
            ))}
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
        </form>
      </div>
    </Layout>
  );
};
