import { i18n } from "../../utils";

interface ITableData {
  [k: string]: boolean | number | string;
}

export const Table = ({
  data,
  showRowNumber = false,
}: {
  data: ITableData[];
  showRowNumber?: boolean;
}) => {
  const getTableHeads = () => {
    let heads = [];

    for (const d in data[0]) {
      heads.push(d);
    }

    return heads;
  };

  const rows = data.map((row) => {
    let rowData = [];
    for (const [, value] of Object.entries(row)) {
      rowData.push(value);
    }

    return rowData;
  });

  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
      <table className="table m-0! table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            {getTableHeads().map((item) => (
              <th>{i18n(item)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* rows */}
          {rows.map((row, index) => (
            <tr>
              <th>{showRowNumber ? index + 1 : ""}</th>
              {row.map((rowData) => (
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
