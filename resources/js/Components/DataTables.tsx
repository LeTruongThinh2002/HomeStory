import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";
import DataTable, {
  TableColumn,
  createTheme,
} from "react-data-table-component";
import { FaArrowDown } from "react-icons/fa6";

export const DataTables = ({ auth, title, packages, object }: any) => {
  const sortIcon = <FaArrowDown />;
  createTheme("dark", {
    text: {
      primary: "#268bd2",
      secondary: "#268bd2",
    },
    background: {
      default: "transparent",
    },
    divider: {
      default: "#073642",
    },
  });
  const columns: TableColumn<any>[] = Object.keys(packages[0]).map(
    (key: string) => {
      return {
        name: key.charAt(0).toUpperCase() + key.slice(1),
        selector: (row: any) => row[key],
        sortable: true,
        cell:
          key === "image"
            ? (row: any) => <img src={row[key]} alt={key} />
            : undefined,
        width: key === "id" ? "100px" : key === "image" ? "150px" : "",
      };
    }
  );
  const data = packages;

  const [selectedRows, setSelectedRows] = useState<any[]>([]);

  const handleSelectedRowsChange = ({ selectedRows }: any) => {
    setSelectedRows(selectedRows);
    console.log("Selected Rows:", selectedRows);
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          {title}
        </h2>
      }
    >
      <Head title="Stories" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
          <div className="p-2 sm:p-4 bg-white dark:bg-gray-800 shadow sm:rounded-lg flex flex-col gap-4">
            <div className="flex gap-2">
              {/* add new */}
              {selectedRows.length === 0 ? (
                <Link
                  href={route(`${object}.add`)}
                  className="font-medium py-2 px-4 border rounded border-green-600 dark:border-green-500 text-green-600 dark:text-green-500 hover:bg-green-600 hover:dark:text-white"
                >
                  Add
                </Link>
              ) : (
                <Link
                  href="#"
                  className="font-medium py-2 px-4 text-gray-600 dark:text-gray-500 border rounded hover:cursor-not-allowed border-gray-600 dark:border-gray-500"
                  onClick={(event) => event.preventDefault()}
                >
                  Add
                </Link>
              )}
              {/* edit selected */}
              {selectedRows.length === 1 ? (
                <Link
                  href={route(`${object}.edit`, selectedRows[0]?.id)}
                  className="font-medium py-2 px-4 border rounded border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-500 hover:bg-blue-600 hover:dark:text-white"
                >
                  Edit
                </Link>
              ) : (
                <Link
                  href="#"
                  className="font-medium py-2 px-4 text-gray-600 dark:text-gray-500 border rounded hover:cursor-not-allowed border-gray-600 dark:border-gray-500"
                  onClick={(event) => event.preventDefault()}
                >
                  Edit
                </Link>
              )}
              {/* delete selected */}
              {selectedRows.length > 0 ? (
                <Link
                  href={route(`${object}.destroy`, selectedRows)}
                  className="font-medium py-2 px-4 border rounded border-red-600 dark:border-red-500 text-red-600 dark:text-red-500 hover:bg-red-600 hover:dark:text-white"
                >
                  Delete
                </Link>
              ) : (
                <Link
                  href="#"
                  className="font-medium py-2 px-4 text-gray-600 dark:text-gray-500 border rounded hover:cursor-not-allowed border-gray-600 dark:border-gray-500"
                  onClick={(event) => event.preventDefault()}
                >
                  Delete
                </Link>
              )}
            </div>
            <div>
              <DataTable
                pagination
                columns={columns}
                data={data}
                selectableRows
                onSelectedRowsChange={handleSelectedRowsChange}
                sortIcon={sortIcon}
                theme="dark"
              />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};
export default DataTables;
