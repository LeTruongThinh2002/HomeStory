import DataTables from "@/Components/DataTables";
import SearchNull from "@/Components/SearchNull";

export const index = ({ auth, type }: any) => {
  return type["data"].length !== 0 ? (
    <DataTables
      auth={auth}
      title="Management type"
      packages={type}
      object="type"
    />
  ) : (
    <SearchNull
      auth={auth}
      title="Management type"
      packages={type}
      object="type"
    />
  );
};
export default index;
