import DataTables from "@/Components/DataTables";
import SearchNull from "@/Components/SearchNull";

export const index = ({ auth, page }: any) => {
  return page["data"].length !== 0 ? (
    <DataTables
      auth={auth}
      title="Management page"
      packages={page}
      object="page"
    />
  ) : (
    <SearchNull
      auth={auth}
      title="Management page"
      packages={page}
      object="page"
    />
  );
};
export default index;
