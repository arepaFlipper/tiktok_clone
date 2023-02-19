import React, { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GoVerified } from 'react-icons/go';

import useAuthStore from '@/store/authStore';
import NoResults from './NoResults';

interface IProps {
  isPostingComment: Boolean;
  comment: string;
  setComment: Dispatch<SetStateAction<string>>;
  addComment: (e: React.FormEvent) => void;
  comments: IComment[];
}

interface IComment {
  comment: string;
  length?: number;
  _key: string;
  postedBy: { _ref: string; _id: string };
}

const Comments = ({ isPostingComment, comment, setComment, addComment, comments }: IProps) => {
  const { userProfile } = useAuthStore();
  const handleChange = ({ value }: { value: string }) => {
    setComment(value.trim());
  }
  return (
    <div className="border-t-2 border-gray-200 pt-5 px-10 bg-(#F8F8F8] border-b-2 lg:pb-0 pb-[100px])">
      <div className="overflow-scroll lg:h[475px]">
        {comments?.length ? (<div>videos</div>) : (<NoResults text="No comments yet!" />)}
      </div>
      {userProfile && (
        <div className="absolute bottom-0 left-0 pb-6 px-2 md:px-10">
          <form onSubmit={addComment} className="felx gap-4">
            <input value={comment} onChange={({ target }) => handleChange(target)} placeholder="Add Comment" className="bg-primary px-6 py-4 text-md font-medium border-2 w-[250px] md:w-[700px] lg:w-[350px] border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 flex-1 rounded-lg" />
            <button className="text-md text-gray-400" onClick={addComment}>
              {isPostingComment ? "Commenting..." : "Comment"}
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default Comments
