import DataTables from "@/Components/DataTables";

export const index = ({ auth, tag }: any) => {
  return (
    <DataTables
      auth={auth}
      title="Management Tag"
      packages={tag["data"]}
      object="tag"
    />
  );
};
export default index;
