import VerifiedIcon from "../assets/icons/VerifiedIcon";

interface ChannelProps {
  name?: string;
  img?: string;
  verified?: boolean;
}

interface ThumbnailProps {
  img?: string;
  title?: string;
  channel?: ChannelProps;
  viewCount?: string | number;
  time?: string;
}

const Thumbnail = (props: ThumbnailProps) => {
  return (
    <div className="cursor-pointer w-full">
      {/* <img
        src={props.img}
        className="cover rounded-lg h-[180px] w-full"
        alt=""
        /> */}
      <div className="flex items-center justify-center border border-stone-800 rounded-lg h-[180px] bg-stone-900 w-full">
        {props.title?.split?.(" ")?.slice?.(0, 2)?.join?.(" ")}
      </div>
      <div className="flex gap-2 py-4">
        {/* <img className="w-8 h-8 rounded-full" src={props.channel?.img} alt="" /> */}
        <div className="w-8 h-8 rounded-full font-bold flex items-center justify-center bg-stone-900">
          {props.channel?.name
            ?.split?.(" ")
            ?.map((w) => w[0])
            ?.slice?.(0, 2)
            ?.join("")}
        </div>
        <div className="flex flex-col gap-1">
          <div className="font-bold line-clamp-2">{props.title}</div>
          <div className="text-sm text-stone-400">
            <span className="flex items-center gap-1">
              {props.channel?.name}{" "}
              {props.channel?.verified && (
                <VerifiedIcon height={12} width={12} />
              )}
            </span>
            <div className="flex">
              {props.viewCount} views - {props.time} ago
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
