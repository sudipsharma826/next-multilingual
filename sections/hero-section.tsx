import { ArrowRightIcon, Github, Linkedin, Globe, Facebook, Mail } from "lucide-react";
import personal from "@/lib/data/personal.json";
import Image from "next/image";


export default function HeroSection() {
    const data = personal.personalData;
    return (
        <main className="flex flex-col items-center pt-32 max-md:px-4">
            <svg className="absolute -z-10 -mt-20 right-0" width="890" height="764" viewBox="0 0 890 764" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path stroke="#e2e8f0" d="M.5.5h63.825v63.825H.5zm0 380.85h63.825v63.825H.5zM444.824.5h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM.5 190.924h63.825v63.825H.5zm0 380.849h63.825v63.825H.5zm444.324-380.849h63.825v63.825h-63.825zm0 380.849h63.825v63.825h-63.825z" />
                <path stroke="#e2e8f0" d="M.5 63.975h63.825V127.8H.5zm0 380.849h63.825v63.825H.5zM444.824 63.975h63.825V127.8h-63.825zm0 380.849h63.825v63.825h-63.825zM.5 254.4h63.825v63.825H.5zm0 380.85h63.825v63.825H.5zM444.824 254.4h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825z" />
                <path stroke="#e2e8f0" d="M.5 127.449h63.825v63.825H.5zm0 380.85h63.825v63.825H.5zm444.324-380.85h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM.5 317.875h63.825V381.7H.5zm0 380.85h63.825v63.825H.5zm444.324-380.85h63.825V381.7h-63.825zm0 380.85h63.825v63.825h-63.825zM190.924.5h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM635.248.5h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM190.924 190.924h63.825v63.825h-63.825zm0 380.849h63.825v63.825h-63.825zm444.324-380.849h63.825v63.825h-63.825zm0 380.849h63.825v63.825h-63.825z" />
                <path stroke="#e2e8f0" d="M190.924 63.975h63.825V127.8h-63.825zm0 380.849h63.825v63.825h-63.825zM635.248 63.975h63.825V127.8h-63.825zm0 380.849h63.825v63.825h-63.825zM190.924 254.4h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM635.248 254.4h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825z" />
                <path stroke="#e2e8f0" d="M190.924 127.449h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zm444.324-380.85h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM190.924 317.875h63.825V381.7h-63.825zm0 380.85h63.825v63.825h-63.825zm444.324-380.85h63.825V381.7h-63.825zm0 380.85h63.825v63.825h-63.825zM127.449.5h63.825v63.825h-63.825z" />
                <path stroke="#e2e8f0" d="M127.449 381.35h63.825v63.825h-63.825zM571.775.5H635.6v63.825h-63.825zm0 380.85H635.6v63.825h-63.825zM127.449 190.924h63.825v63.825h-63.825zm0 380.849h63.825v63.825h-63.825zm444.326-380.849H635.6v63.825h-63.825zm0 380.849H635.6v63.825h-63.825zM127.449 63.975h63.825V127.8h-63.825z" />
                <path stroke="#e2e8f0" d="M127.449 444.824h63.825v63.825h-63.825zM571.775 63.975H635.6V127.8h-63.825zm0 380.849H635.6v63.825h-63.825zM127.449 254.4h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM571.775 254.4H635.6v63.825h-63.825zm0 380.85H635.6v63.825h-63.825zM127.449 127.449h63.825v63.825h-63.825z" />
                <path stroke="#e2e8f0" d="M127.449 508.299h63.825v63.825h-63.825zm444.326-380.85H635.6v63.825h-63.825zm0 380.85H635.6v63.825h-63.825zM127.449 317.875h63.825V381.7h-63.825zm0 380.85h63.825v63.825h-63.825zm444.326-380.85H635.6V381.7h-63.825zm0 380.85H635.6v63.825h-63.825zM317.873.5h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM762.197.5h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM317.873 190.924h63.825v63.825h-63.825zm0 380.849h63.825v63.825h-63.825zm444.324-380.849h63.825v63.825h-63.825zm0 380.849h63.825v63.825h-63.825z" />
                <path stroke="#e2e8f0" d="M317.873 63.975h63.825V127.8h-63.825zm0 380.849h63.825v63.825h-63.825zM762.197 63.975h63.825V127.8h-63.825zm0 380.849h63.825v63.825h-63.825zM317.873 254.4h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM762.197 254.4h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825z" />
                <path stroke="#e2e8f0" d="M317.873 127.449h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zm444.324-380.85h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM317.873 317.875h63.825V381.7h-63.825zm0 380.85h63.825v63.825h-63.825zm444.324-380.85h63.825V381.7h-63.825zm0 380.85h63.825v63.825h-63.825zM63.973.5h63.825v63.825H63.973zm0 380.85h63.825v63.825H63.973zM508.297.5h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM63.973 190.924h63.825v63.825H63.973zm0 380.849h63.825v63.825H63.973zm444.324-380.849h63.825v63.825h-63.825zm0 380.849h63.825v63.825h-63.825z" />
                <path stroke="#e2e8f0" d="M63.973 63.975h63.825V127.8H63.973zm0 380.849h63.825v63.825H63.973zM508.297 63.975h63.825V127.8h-63.825zm0 380.849h63.825v63.825h-63.825zM63.973 254.4h63.825v63.825H63.973zm0 380.85h63.825v63.825H63.973zM508.297 254.4h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825z" />
                <path stroke="#e2e8f0" d="M63.973 127.449h63.825v63.825H63.973zm0 380.85h63.825v63.825H63.973zm444.324-380.85h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM63.973 317.875h63.825V381.7H63.973zm0 380.85h63.825v63.825H63.973zm444.324-380.85h63.825V381.7h-63.825zm0 380.85h63.825v63.825h-63.825zM254.4.5h63.825v63.825H254.4zm0 380.85h63.825v63.825H254.4zM698.725.5h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM254.4 190.924h63.825v63.825H254.4zm0 380.849h63.825v63.825H254.4zm444.325-380.849h63.825v63.825h-63.825zm0 380.849h63.825v63.825h-63.825z" />
                <path stroke="#e2e8f0" d="M254.4 63.975h63.825V127.8H254.4zm0 380.849h63.825v63.825H254.4zM698.725 63.975h63.825V127.8h-63.825zm0 380.849h63.825v63.825h-63.825zM254.4 254.4h63.825v63.825H254.4zm0 380.85h63.825v63.825H254.4zM698.725 254.4h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825z" />
                <path stroke="#e2e8f0" d="M254.4 127.449h63.825v63.825H254.4zm0 380.85h63.825v63.825H254.4zm444.325-380.85h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM254.4 317.875h63.825V381.7H254.4zm0 380.85h63.825v63.825H254.4zm444.325-380.85h63.825V381.7h-63.825zm0 380.85h63.825v63.825h-63.825zM190.924.5h63.825v63.825h-63.825z" />
                <path stroke="#e2e8f0" d="M190.924 381.35h63.825v63.825h-63.825zM635.248.5h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM190.924 190.924h63.825v63.825h-63.825zm0 380.849h63.825v63.825h-63.825zm444.324-380.849h63.825v63.825h-63.825zm0 380.849h63.825v63.825h-63.825zM190.924 63.975h63.825V127.8h-63.825z" />
                <path stroke="#e2e8f0" d="M190.924 444.824h63.825v63.825h-63.825zM635.248 63.975h63.825V127.8h-63.825zm0 380.849h63.825v63.825h-63.825zM190.924 254.4h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM635.248 254.4h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM190.924 127.449h63.825v63.825h-63.825z" />
                <path stroke="#e2e8f0" d="M190.924 508.299h63.825v63.825h-63.825zm444.324-380.85h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM190.924 317.875h63.825V381.7h-63.825zm0 380.85h63.825v63.825h-63.825zm444.324-380.85h63.825V381.7h-63.825zm0 380.85h63.825v63.825h-63.825zM381.352.5h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM825.674.5h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM381.352 190.924h63.825v63.825h-63.825zm0 380.849h63.825v63.825h-63.825zm444.322-380.849h63.825v63.825h-63.825zm0 380.849h63.825v63.825h-63.825z" />
                <path stroke="#e2e8f0" d="M381.352 63.975h63.825V127.8h-63.825zm0 380.849h63.825v63.825h-63.825zM825.674 63.975h63.825V127.8h-63.825zm0 380.849h63.825v63.825h-63.825zM381.352 254.4h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM825.674 254.4h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825z" />
                <path stroke="#e2e8f0" d="M381.352 127.449h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zm444.322-380.85h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM381.352 317.875h63.825V381.7h-63.825zm0 380.85h63.825v63.825h-63.825zm444.322-380.85h63.825V381.7h-63.825zm0 380.85h63.825v63.825h-63.825z" />
                <path fill="url(#a)" d="M0 0h889.999v763.049H0z" />
                <defs>
                    <radialGradient id="a" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 381.525 -445 0 445 381.525)">
                        <stop offset=".293" stopColor="#fff" stopOpacity="0" />
                        <stop offset="1" stopColor="#fff" />
                    </radialGradient>
                </defs>
            </svg>

            <Image
                src={data?.profileImageUrl || "/assets/default-profile.png"}
                alt={data?.fullName || "Profile"}
                className="size-36 rounded-full"
                width={144}
                height={144}
            />

            <h2 className="text-4xl md:text-6xl font-semibold mt-6">
                {data.fullName}
            </h2>
            <p className="text-2xl md:text-3xl font-mono mt-6">
                {data.title}
            </p>
            <div className="mt-6 flex gap-4">
                {data.resumeUrl && (
                    <a href={data.resumeUrl} target="_blank" rel="noopener noreferrer" className="group bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-2.5 rounded-lg flex items-center">
                        Resume
                        <ArrowRightIcon className="group-hover:translate-x-0.5 transition ml-1 size-5 inline-flex" />
                    </a>
                )}
                {data.linkedinUrl && (
                    <a href={data.linkedinUrl} target="_blank" rel="noopener noreferrer" className="border border-gray-400 hover:bg-gray-100/70 px-6 py-2.5 rounded-lg ml-2 flex items-center">
                        <Linkedin className="w-5 h-5 mr-2" /> Connect
                    </a>
                )}
            </div>
            <div className="flex gap-6 mt-10">
                {data.githubUrl && (
                    <a href={data.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex hover:-translate-y-0.5 transition">
                        <Github className="w-6 h-6" />
                    </a>
                )}
                {data.linkedinUrl && (
                    <a href={data.linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex hover:-translate-y-0.5 transition">
                        <Linkedin className="w-6 h-6" />
                    </a>
                )}
                {data.websiteUrl && (
                    <a href={data.websiteUrl} target="_blank" rel="noopener noreferrer" className="inline-flex hover:-translate-y-0.5 transition">
                        <Globe className="w-6 h-6" />
                    </a>
                )}
                {data.facebookUrl && (
                    <a href={data.facebookUrl} target="_blank" rel="noopener noreferrer" className="inline-flex hover:-translate-y-0.5 transition">
                        <Facebook className="w-6 h-6" />
                    </a>
                )}
                {data.email && (
                    <a href={`mailto:${data.email}`} className="inline-flex hover:-translate-y-0.5 transition">
                        <Mail className="w-6 h-6" />
                    </a>
                )}
            </div>
        </main>
    );
}