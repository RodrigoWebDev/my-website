import { i18n } from "../../business/locale";
import { ITableData } from "../../model/components";
import { getTableHeads, getTableRows } from "../../utils/table";

export const Table = ({
  data,
  showRowNumber = false,
}: {
  data: ITableData[];
  showRowNumber?: boolean;
}) => {
  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
      <table className="table m-0! table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            {getTableHeads(data).map((item) => (
              <th>{i18n(item)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* rows */}
          {getTableRows(data).map((row: any, index: number) => (
            <tr>
              <th>{showRowNumber ? index + 1 : ""}</th>
              {row.map((rowData: any) => (
                <td>{rowData}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
