import AutoPlayVideo from "@/components/AutoPlayVideo";
import Image from "next/image";

export type PostMedia =
  | { type: "video"; src: string; poster?: string }
  | { type: "image"; src: string; alt?: string };

export default function PostCard({
  media,
  caption,
  align = "left",
}: {
  media: PostMedia;
  caption?: string;
  align?: "left" | "right";
}) {
  const mediaEl =
    media.type === "video" ? (
      <AutoPlayVideo src={media.src} poster={media.poster} className="aspect-[4/5]" rounded="rounded-2xl" />
    ) : (
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[--line] bg-[--surface]">
        <Image src={media.src} alt={media.alt || ""} fill className="object-cover" />
      </div>
    );

  return (
    <article className="card p-6 md:p-8 rounded-2xl">
      <div className={`grid items-start gap-8 md:grid-cols-2 ${align === "right" ? "md:[&>div:first-child]:order-2" : ""}`}>
        <div className="transition-all duration-700 ease-out opacity-100 translate-y-0">{mediaEl}</div>
        <div className="self-center">
          {caption && (
            <div className="prose-caption">
              {caption.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
