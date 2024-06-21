import SelectInput from "./SelectInput";
import TextInput from "./TextInput";
import { Head, Link, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const SearchNull = ({
  auth,
  title,
  object,
  searchQuery = {},
  packages,
}: any) => {
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
            <div className="text-center dark:text-white">
              No suitable {object} were found
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default SearchNull;
