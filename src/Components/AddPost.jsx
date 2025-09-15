import React, { useEffect, useCallback, useState, Suspense } from "react";
import { useForm } from "react-hook-form";
import Service from "../Appwrite/Service";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Loader } from "./index.js";
const Rte = React.lazy(() => import("./Rte.jsx"));
function AddPost({ post }) {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    watch,
    control,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      Title: post?.Title || "",
      Slug: post?.Slug || "",
      Status: post?.Status || "active",
      Content: post?.Content || "",
    },
  });

  const [Image_Id, setImage_Id] = useState(post?.Image_Id ? false : true);
  const UserData = useSelector((state) => state.Auth.UserData);
  const Navigate = useNavigate();
  async function submit(data) {
    if (post) {
      if (data.Image_Id[0]) {
        const Image = await Service.UploadImage(data.Image_Id[0]);

        if (Image) {
          await Service.DeleteFile(post.Image_Id);
          data.Image_Id = Image.$id;
        }
      } else {
        data.Image_Id = post.Image_Id;
      }
      const UpdatedPost = await Service.UpdatePost({
        Post_Id: post.$id,
        ...data,
        User_Id: UserData.$id,
      });

      Navigate(`/Post/${UpdatedPost.$id}`);
    } else {
      const image = await Service.UploadImage(data.Image_Id[0]);
      data.Image_Id = image.$id;
      const Post = await Service.CreatePost({ ...data, User_Id: UserData.$id });
      Navigate(`/Post/${Post.$id}`);
    }
  }

  const handleSlug = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d]+/g, "-");
    } else {
      return "";
    }
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (type === "change" && name === "Title") {
        setValue("Slug", handleSlug(value.Title), { shouldValidate: true });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="w-full p-8 bg-gray-100 font-sans shadow-lg"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label
            htmlFor="Title"
            className="text-lg font-semibold text-gray-800"
          >
            Title
          </label>
          <input
            type="text"
            id="Title"
            {...register("Title", { required: true, maxLength: 250 })}
            className="mt-2 p-3 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="Slug" className="text-lg font-semibold text-gray-800">
            Slug
          </label>
          <input
            type="text"
            id="Slug"
            {...register("Slug", { required: true, maxLength: 250 })}
            className="mt-2 p-3 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) =>
              setValue("Slug", handleSlug(e.target.value), {
                shouldValidate: true,
              })
            }
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="Status"
            className="text-lg font-semibold text-gray-800"
          >
            Post Status
          </label>
          <select
            id="Status"
            {...register("Status", { required: true })}
            className="mt-2 p-3 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="Image"
            className="text-lg font-semibold text-gray-800"
          >
            Select Image
          </label>
          <input
            type="file"
            {...register("Image_Id", { required: Image_Id })}
            id="Image"
            className="mt-2 p-3 rounded-md border border-gray-300 file:border-0 file:bg-blue-500 file:text-white file:px-6 file:py-2 file:rounded-md"
          />
        </div>
      </div>

      <Suspense fallback={Loader} className="flex flex-col mt-6">
        <Rte
          name="Content"
          control={control}
          intialValue={
            post?.Content
              ? post.Content
              : "<p>This is the initial content of the editor.</p>"
          }
        />
      </Suspense>

      <div className="flex justify-center mt-6">
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
}
export default AddPost;
