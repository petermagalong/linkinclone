import { Avatar } from "@material-ui/core"
import React from 'react';

import ThumbupAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

import InputOption from "./InputOption";
import './Post.css';


function Post({name, description, message, photoUrl}) {
  return (
    <div className='post'>
        <div className="post__header">
            <Avatar />
            <div className="post__info">
                <h2>Peter Christian Magalong</h2>
                <p>Description</p>
            </div>
        </div>
        <div className="post__body">
            <p>Message goes here</p>
        </div>

        <div className="post__buttons">
            <InputOption Icon={ThumbupAltOutlinedIcon} title="Like" color="gray"/>
            <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray"/>
            <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray"/>
            <InputOption Icon={SendOutlinedIcon} title="Send" color="gray"/>
        </div>
    </div>
  )
}

export default Post