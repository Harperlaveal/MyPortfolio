import Image from "next/image";
import { client } from "../lib/sanity";

    interface Data {
        _id: string,
        name: string,
        jobTitle: string,
        logo: string,
        url: string,
        description: string,
        startDate: string,
        endDate: string,
    }


    async function getJobs() {
        const query = `*[_type == "job"] {
            _id,
            name,
            jobTitle,
            "logo": logo.asset->url,
            url,
            description,
            startDate,
            endDate,
        }`;
      
        const data = await client.fetch(query);
      
        return data;
      }

      export const revalidate = 60;

    export default async function Experience() {
        const data: Data[] = await getJobs();
    return (
        <div>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-center text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl
        sm:leading-10 sm:text-center md:text-6xl md:leading-13 md:text-center">
                    My{" "}
                    <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-red-600 bg-clip-text text-transparent shimmer-effect">
                        Experience
                    </span>
                    !
                </h1>
        </div>
        <div className="mb-10 border-t border-gray-200 dark:border-gray-700 items-center pt-4 flex flex-col gap-y-12">
    {data.sort((a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime()).map((job) => (
        <div
            key={job._id}
            className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[4.5rem] before:left-7 before:w-[1px] before:h-[calc(100%-50px)] before:bg-zinc-800"
        >
            <a
                href={job.url}
                rel="noreferrer noopener"
                className="border border-black min-h-[60px] min-w-[60px] rounded-md overflow-clip relative"
            >
                <Image
                    src={job.logo}
                    className="object-cover"
                    alt={`${job.name} logo`}
                    fill
                />
            </a>
            <div className="flex flex-col items-start">
                <h3 className="text-xl font-bold">{job.name}</h3>
                <p>{job.jobTitle}</p>
                <small className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                    {job.startDate.toString()} - {job.endDate.toString()}
                </small>
                <p className="text-base text-black dark:text-white my-4">{job.description}</p>
            </div>
        </div>
    ))}
</div>

    </div>
    )
}