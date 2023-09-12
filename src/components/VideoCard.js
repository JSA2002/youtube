import React from 'react'
import { Link } from "react-router-dom";
import VideoLength from "../shared/videoLength"
import {BsFillCheckCircleFill} from "react-icons/bs"
import { abbreviateNumber } from 'js-abbreviation-number';

const VideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className="flex flex-col mb-6">
        <div className="relative h-44 md:h-[14rem] md:rounded-xl overflow-hidden">
          <img src={video?.thumbnails?.[0]?.url}
            className='h-full w-full object-cover' alt="" />
          {video?.lengthSeconds && (
            <VideoLength time={video?.lengthSeconds} />
          )}
        </div>
        <div className="flex text-white mt-3">
          <div className="flex items-start">
            <div className="felx h-9 w-9 rounded-full overflow-hidden">
              <img className='h-full w-full object-cover' src={video?.author?.avatar[0]?.url} alt="" />
            </div>
          </div>

          <div className="flex flex-col ml-3 overflow-hidden">
            <span className="text-sm font-semibold line-clamp-1">
              {video?.title}
            </span>
            <span className="text-[12px] font-semibold mt-2 text-white/[0.7] flex items-start">
              {video?.author?.title}
              {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && 
              (<BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1"/>)}
            </span>
            <div className='flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden'>
               <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
               <span className="flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1">.</span>
               <span className="truncate">{video?.publishedTimeText}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default VideoCard;