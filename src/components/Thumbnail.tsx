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
    <div className="cursor-pointer">
      <img
        src={props.img}
        className="cover rounded-lg h-[180px] w-[320px]"
        alt=""
      />
      <div className="flex gap-2 py-4">
        <img className="w-8 h-8 rounded-full" src={props.channel?.img} alt="" />
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
