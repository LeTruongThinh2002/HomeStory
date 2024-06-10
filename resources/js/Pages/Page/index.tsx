import DataTables from "@/Components/DataTables";

export const index = ({ auth, page }: any) => {
  return (
    <DataTables
      auth={auth}
      title="Management Page"
      packages={page["data"]}
      object="page"
    />
  );
};
export default index;
