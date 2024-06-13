import DataTables from "@/Components/DataTables";

export const index = ({ auth, tag }: any) => {
  return (
    <DataTables
      auth={auth}
      title="Management Tag"
      packages={tag}
      object="tag"
    />
  );
};
export default index;
