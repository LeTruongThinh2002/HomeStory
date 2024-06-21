import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import DataTable, {
  TableColumn,
  createTheme,
} from "react-data-table-component";
import Pagination from "./Pagination";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import DeleteModal from "./DeleteModal";

export const DataTables = ({
  auth,
  title,
  packages,
  object,
  searchQuery = {},
}: any) => {
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

  const columns: TableColumn<any>[] = [
    {
      name: "Action",
      selector: (row: any) => row.id, // replace with the appropriate selector
      sortable: false,
      cell: (row: any) => (
        <div className="flex flex-col gap-2 py-2">
          <button
            className="font-medium py-2 px-4 border rounded border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-500 hover:bg-blue-600 hover:dark:text-white"
            onClick={() => console.log(row)}
          >
            Edit
          </button>

          <DeleteModal selectedRowDel={row} />
        </div>
      ),
      width: "110px", // adjust the width as needed
    },
  ].concat(
    Object.keys(packages["data"][0]).map((key: any) => {
      return {
        name: key.charAt(0).toUpperCase() + key.slice(1),
        selector: (row: any) => row[key],
        sortable: false,
        cell: (row: any) =>
          key === "image" ? <img src={row[key]} alt={key} /> : row[key],
        width:
          key === "id" || key === "stories_id" || key === "page_number"
            ? "100px"
            : key === "image" || key === "name"
            ? "150px"
            : key === "created_at" ||
              key === "updated_at" ||
              key === "content" ||
              key === "tags" ||
              key === "types"
            ? "200px"
            : "300px",
      };
    })
  );
  let data = packages["data"];

  if (object === "stories") {
    data = packages["data"].map((story: any) => ({
      ...story,
      types: story.types.map((type: any) => type.name).join(", "),
      tags: story.tags.map((tag: any) => tag.name).join(", "),
    }));
  }

  const searchFieldChanged = (name: any, value: string) => {
    if (value) {
      searchQuery[name] = value;
    } else {
      delete searchQuery[name];
    }
    router.get(object, searchQuery);
  };
  const handleSelectType = (types: any, type: any) => {
    searchQuery[types] = type;
  };
  const onKeyPress = (name: string, e: any) => {
    if (e.key !== "Enter") return;
    searchFieldChanged(name, e.target.value);
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
            <div className="flex md:flex-row flex-col gap-2">
              {/* add new */}
              <Link
                href={route(`${object}.add`)}
                className="font-medium w-fit py-2 px-4 border rounded border-green-600 dark:border-green-500 text-green-600 dark:text-green-500 hover:bg-green-600 hover:dark:text-white"
              >
                Add
              </Link>
              <TextInput
                defaultValue={searchQuery?.name}
                placeholder="Search name..."
                onBlur={(e: any) => searchFieldChanged("name", e.target.value)}
                onKeyPress={(e: any) => onKeyPress("name", e)}
              />
              {object === "stories" && (
                <SelectInput
                  onChange={(e: any) =>
                    handleSelectType("types", e.target.value)
                  }
                  defaultValue={searchQuery?.types}
                >
                  <option value="">Select type</option>
                  {packages["types"]?.map((type: any) => (
                    <option key={type.id} value={type.name}>
                      {type.name}
                    </option>
                  ))}
                </SelectInput>
              )}
            </div>
            <div>
              <DataTable
                columns={columns}
                pointerOnHover
                data={data}
                onRowClicked={(row: any) => console.log(row)}
                theme="dark"
              />
              <Pagination links={packages["meta"].links} />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};
export default DataTables;
