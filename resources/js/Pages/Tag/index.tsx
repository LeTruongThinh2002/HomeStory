import DataTables from "@/Components/DataTables";
import SearchNull from "@/Components/SearchNull";

export const index = ({ auth, tag }: any) => {
  return tag["data"].length !== 0 ? (
    <DataTables
      auth={auth}
      title="Management tag"
      packages={tag}
      object="tag"
    />
  ) : (
    <SearchNull
      auth={auth}
      title="Management tag"
      packages={tag}
      object="tag"
    />
  );
};
export default index;
