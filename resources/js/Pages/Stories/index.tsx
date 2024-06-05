import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export const index = ({ auth, stories }: any) => {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Management Stories
        </h2>
      }
    >
      <Head title="Stories" />
      {stories.map((story: any) => (
        <div key={story.id} className="py-6 text-gray-800 dark:text-gray-200">
          {story.title}
        </div>
      ))}
    </AuthenticatedLayout>
  );
};
export default index;
