import { DefaultUi, Player, Youtube /* @vite-ignore */ } from "@vime/react";
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Image,
  Lightning,
} from "phosphor-react";

import "@vime/core/themes/default.css";
import { useGetLessonBySlugQuery } from "../graphql/generated";

interface VideoProps {
  lessonSlug: string;
}

export function Video({ lessonSlug }: VideoProps) {
  const { data, loading } = useGetLessonBySlugQuery({
    variables: {
      slug: lessonSlug,
    },
    fetchPolicy: "no-cache",
  });

  if (!data || !data.lesson) {
    return (
      <div className="flex-1 items-center justify-center">
        <div className="grid h-screen place-items-center">
          <div className="text-center">
            <svg
              role="status"
              className="inline w-12 h-12 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex-1">
        <div className="bg-black flex justify-center">
          <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
            <Player>
              <Youtube videoId={data.lesson.videoId} />
              <DefaultUi />
            </Player>
          </div>
        </div>

        <div className="p-8 max-w-[1100px] mx-auto">
          <div className="flex items-start gap-16">
            <div className="flex-1">
              <h1 className="text-2xl font-bold ">{data.lesson.title}</h1>
              <p className="mt-4 text-gray-200 leading-relaxed">
                {data.lesson.description}
              </p>

              {data.lesson.teacher && (
                <div className="flex items-center gap-4 mt-6">
                  <img
                    className="h-16 w-16 rounded-full border-2 border-blue-500"
                    src={data.lesson.teacher.avatarURL}
                    alt=""
                  />

                  <div className="leading-relaxed">
                    <strong className="font-bold text-2xl block">
                      {data.lesson.teacher.name}
                    </strong>
                    <span className="text-gray-200 text-sm block">
                      {data.lesson.teacher.bio}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="#"
                className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
              >
                <DiscordLogo size={24} />
                Comunidade do discord
              </a>

              <a
                href="#"
                className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
              >
                <Lightning size={24} />
                acesso o desafio
              </a>
            </div>
          </div>

          <div>
            <div className="gap-8 mt-20 grid grid-cols-2">
              <a
                href=""
                className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
              >
                <div className="bg-green-700 h-full p-6 flex items-center">
                  <FileArrowDown size={40} />
                </div>

                <div className="py-6 leading-relaxed">
                  <strong className="text-2xl">Material Complementar</strong>
                  <p className="text-sm text-gray-200 mt-2">
                    Acesse o material complementar para acelerar o seu
                    desenvolvimento
                  </p>
                </div>

                <div className="h-full p-6 flex items-center">
                  <CaretRight size={24} />
                </div>
              </a>

              <a
                href=""
                className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
              >
                <div className="bg-green-700 h-full p-6 flex items-center">
                  <Image size={40} />
                </div>

                <div className="py-6 leading-relaxed">
                  <strong className="text-2xl">Wallpapers Exclusivos</strong>
                  <p className="text-sm text-gray-200 mt-2">
                    Baixe wallpapers exclusivos do Ignite Lab e personalize a
                    sua máquina
                  </p>
                </div>

                <div className="h-full p-6 flex items-center">
                  <CaretRight size={24} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
