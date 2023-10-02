import { TOKEN, DATABASE_ID } from "../../../config/index";
import ProjectItem from "../../../components/project-item";

export default async function projects() {
  const projects = await getProjects();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10 px-6">
      <h1 className="text-4xl font-bold sm:text-6xl">
        total card number :
        <span className="pl-4 text-blue-500">{projects.results.length}</span>
      </h1>

      <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2">
        {projects.results.map((project) => (
          <ProjectItem key={project.id} data={project} />
        ))}
      </div>
    </div>
  );
}

// `app` directory

// This function can be named anything
async function getProjects() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "Name",
          direction: "ascending",
        },
      ],
      page_size: 100,
    }),
  };

  const response = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  const projects = await response.json();
  return projects;
}
