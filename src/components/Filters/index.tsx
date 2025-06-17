import { filters, updateCheckedFilters } from "../../business/projectFilters";
import { i18n } from "../../business/locale";
import Icon from "../Icon";

export const Filters = () => {
  return (
    <fieldset class="fieldset bg-base-100 border-base-300 rounded-box border p-4 mr-4">
      <legend class="fieldset-legend">{i18n("filters")}</legend>

      <button
        class="btn btn-secondary mb-8"
        onClick={() => {
          filters.value = filters.value.map((item) => {
            return {
              ...item,
              checked: false,
            };
          });
        }}
      >
        <Icon name="filterRemove" />
        {i18n("clearFilters")}
      </button>

      {filters.value.map((item, index) => {
        return (
          <label class="label mb-2">
            <input
              type="checkbox"
              class="checkbox"
              checked={item.checked}
              onChange={() => {
                updateCheckedFilters(index);
              }}
            />
            {item.name}
          </label>
        );
      })}
    </fieldset>
  );
};
