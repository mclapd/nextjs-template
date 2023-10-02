import Image from "next/image";

export default function ProjectItem({ data }) {
  const title = data.properties.Name.title[0].plain_text;
  const gitHubLink = data.properties.GitHub.url;
  const description = data.properties.Description.rich_text[0].plain_text;
  const imgSrc = data.cover.external.url;
  const tags = data.properties.Tags.multi_select;

  return (
    <div className="project-card">
      <Image
        className="rounded-t-xl"
        src={imgSrc}
        width="100"
        height="60"
        layout="responsive"
        objectFit="cover"
        quality={100}
        alt="cover image"
      />
      <div className="p-4 flex flex-col">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h3 className="mt-4 text-xl">{description}</h3>
        <a href={gitHubLink}>GitHub</a>
        <div className="flex items-start mt-2">
          {tags.map((tag) => (
            <h1
              className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"
              key={tag.id}
            >
              {tag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
