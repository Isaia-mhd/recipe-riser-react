import { useState } from "react";

export const CommentForm = ({onSubmitComment}) => {
    const [comment, setComment] = useState("");
    const handleComment = (e) => {
        e.preventDefault()
        if (comment.trim() === "") return; // prevent empty submissions
        onSubmitComment(comment);
        setComment(""); // clear input after submission
        
    }
    const onchange = (e) => {
        setComment(e.target.value)
    }
    return (
        <form className="w-full flex justify-between items-center gap-4 mt-4" onClick={handleComment}>
            <input type="text" id="comment" value={comment} onChange={onchange} className=" w-full rounded-md outline-none py-1 px-2 border " placeholder="Type..."/>
            <button type="submit" className="bg-blue-600 px-4 py-1 hover:bg-blue-700 transition duration-150 text-white rounded-md">Comment</button>
        </form>
    )
}
