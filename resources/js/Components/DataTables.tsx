import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";
import DataTable, {
  TableColumn,
  createTheme,
} from "react-data-table-component";
import Modal from "./Modal";
import { CgClose } from "react-icons/cg";
import Pagination from "./Pagination";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";

export const DataTables = ({ auth, title, packages, object }: any) => {
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
          <button
            className="font-medium py-2 px-4 border rounded border-red-600 dark:border-red-500 text-red-600 dark:text-red-500 hover:bg-red-600 hover:dark:text-white"
            onClick={() => {
              handleShowModal(row);
            }}
          >
            Delete
          </button>
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
          key === "id" || key === "story_id" || key === "page_number"
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
  const column: TableColumn<any>[] = Object.keys(packages["data"][0]).map(
    (key: string) => {
      return {
        name: key.charAt(0).toUpperCase() + key.slice(1),
        selector: (row: any) => row[key],
        sortable: true,
        cell: (row: any) =>
          key === "image" ? <img src={row[key]} alt={key} /> : row[key],
        width:
          key === "id" || key === "story_id" || key === "page_number"
            ? "100px"
            : key === "image" || key === "name"
            ? "150px"
            : key === "created_at" || key === "updated_at" || key === "content"
            ? "200px"
            : "",
      };
    }
  );
  let data = packages["data"];

  if (object === "stories") {
    data = packages["data"].map((story: any) => ({
      ...story,
      types: story.types.map((type: any) => type.name).join(", "),
      tags: story.tags.map((tag: any) => tag.name).join(", "),
    }));
  }
  const [showModal, setShowModal] = useState(false);
  const [selectedRowDel, setSelectedRowDel] = useState<any>([]);

  const handleShowModal = async (rows: any) => {
    await setSelectedRowDel(rows);
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    setShowModal(!showModal);
    console.log(packages);
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
              <Link
                href={route(`${object}.add`)}
                className="font-medium py-2 px-4 border rounded border-green-600 dark:border-green-500 text-green-600 dark:text-green-500 hover:bg-green-600 hover:dark:text-white"
              >
                Add
              </Link>
              <TextInput />
              <SelectInput />
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
      {/* modal delete */}
      <Modal
        children={
          <div className="max-h-[90vh] m-2 overflow-auto dark:text-white no-scrollbar">
            <h1 className="relative text-2xl ">
              Are you sure you want to delete?
            </h1>
            <button
              className="absolute top-2 right-2 text-3xl z-0"
              onClick={handleCloseModal}
            >
              <CgClose />
            </button>
            <div className="flex flex-col  gap-2 justify-center items-center my-4">
              {selectedRowDel.image && (
                <img
                  src={selectedRowDel.image}
                  width={100}
                  alt={selectedRowDel.image}
                />
              )}
              <span>
                {selectedRowDel?.title}
                {selectedRowDel?.name}
                {selectedRowDel.page_number &&
                  ` - Page ${selectedRowDel.page_number}`}
                {selectedRowDel.author && ` - ${selectedRowDel.author}`}
                {selectedRowDel.email && ` - ${selectedRowDel.email}`}
              </span>
            </div>
            <Link
              className="float-right font-medium py-2 px-4 border rounded border-red-600 dark:border-red-500 text-red-600 dark:text-red-500 hover:bg-red-600 hover:dark:text-white"
              onClick={() => {
                handleCloseModal();
              }}
              // route(`${object}.destroy`, selectedRowDel)
              href={"#"}
            >
              Delete
            </Link>
          </div>
        }
        show={showModal}
        onClose={handleCloseModal}
        closeable={!showModal}
      />
    </AuthenticatedLayout>
  );
};
export default DataTables;
