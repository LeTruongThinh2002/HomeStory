import DataTables from "@/Components/DataTables";
import SearchNull from "@/Components/SearchNull";

export const index = ({ auth, stories, types }: any) => {
  stories["types"] = types["data"];
  return stories["data"].length !== 0 ? (
    <DataTables
      auth={auth}
      title="Management Stories"
      packages={stories}
      object="stories"
    />
  ) : (
    <SearchNull
      auth={auth}
      title="Management Stories"
      packages={stories}
      object="stories"
    />
  );
};
export default index;
