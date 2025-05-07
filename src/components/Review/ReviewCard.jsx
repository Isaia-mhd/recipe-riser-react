import { useState } from "react";
import { CommentForm } from "./CommentForm";
import api from "../../api/axios";
import { useAuth } from "../../api/AuthContext";

export const ReviewCard = ({ reviews, recipeId }) => {
  const [localComments, setLocalComments] = useState([]);
  const {user} = useAuth();
  const handleNewComment = async (newCommentText) => {
    const optimisticComment = {
      user: { name: user.name },
      comment: newCommentText,
    };

    setLocalComments([optimisticComment, ...localComments]);

    try {
      await api.get("/sanctum/csrf-cookie");
      await api.post(`/api/reviews/new/recipe/${recipeId}`, {
        comment: newCommentText,
      });
    } catch (error) {
      console.error("Error submitting comment:", error?.response?.data?.message || error.message);
      // Optional: remove the optimistic comment on failure
    }
  };

  // Combine local comments and parent reviews
  const allComments = [...localComments, ...reviews];

  return (
    <>
      <div className="max-h-96 overflow-y-auto p-4 mt-2 mb-2">
        <ul>
          {allComments.map((preview, i) => (
            <li key={i}>
              <div className="bg-slate-900 rounded-md mt-2 mb-2 px-4 py-1">
                <p className="text-sm text-amber-400">{preview.user?.name}</p>
                <p>{preview.comment}</p>
              </div>
            </li>
          ))}
        </ul>
        {allComments.length === 0 && (
          <p className="text-center">Be the first to comment</p>
        )}
      </div>
      <CommentForm onSubmitComment={handleNewComment} />
    </>
  );
};
