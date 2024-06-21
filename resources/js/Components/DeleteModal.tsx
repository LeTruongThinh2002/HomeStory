import { useState } from "react";
import Modal from "./Modal";
import { CgClose } from "react-icons/cg";
import { Link } from "@inertiajs/react";

const DeleteModal = ({ selectedRowDel }: any) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <button
        className="font-medium py-2 px-4 border rounded border-red-600 dark:border-red-500 text-red-600 dark:text-red-500 hover:bg-red-600 hover:dark:text-white"
        onClick={handleShowModal}
      >
        Delete
      </button>
      <Modal
        children={
          <div className="max-h-[90vh] m-2 overflow-auto dark:text-white no-scrollbar">
            <h1 className="relative text-2xl ">
              Are you sure you want to delete?
            </h1>
            <button
              className="absolute top-2 right-2 text-3xl z-0"
              onClick={handleShowModal}
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
              <span>
                {selectedRowDel?.pages && `${selectedRowDel.pages} page`}
              </span>
            </div>
            <Link
              className="float-right font-medium py-2 px-4 border rounded border-red-600 dark:border-red-500 text-red-600 dark:text-red-500 hover:bg-red-600 hover:dark:text-white"
              onClick={handleShowModal}
              // route(`${object}.destroy`, selectedRowDel)
              href={"#"}
            >
              Delete
            </Link>
          </div>
        }
        show={showModal}
        onClose={handleShowModal}
        closeable={!showModal}
      />
    </>
  );
};

export default DeleteModal;
