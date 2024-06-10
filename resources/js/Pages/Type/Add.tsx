import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { BiArrowBack } from "react-icons/bi";

const Add = ({ auth }: any) => {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="flex gap-4 font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          <Link href={route(`type.index`)}>
            <BiArrowBack />
          </Link>
          Add new type
        </h2>
      }
    >
      <Head title="Add type" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
          <div className="p-2 sm:p-4 bg-white dark:bg-gray-800 shadow sm:rounded-lg flex flex-col gap-4">
            <div>this is add type</div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Add;
