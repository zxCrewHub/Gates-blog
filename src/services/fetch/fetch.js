import axios from "axios";

const instance = axios.create({
  baseURL: "https://std.bit-camp.ru/blog/",
  timeout: 3000,
});

export async function getAllPosts(sort = "", tag = "") {
  try {
    const response = await instance.get("post", {
      params: {
        sort: sort,
        tag: tag,
      },
    });
    if (response.statusText !== "OK") throw new Error(response.status);
    return { status: "OK", data: response.data };
  } catch (err) {
    return { status: "ERROR", error: err.message };
  }
}

export async function getPostByID(id) {
  try {
    const response = await instance.get(`post/${id}`);
    if (response.statusText !== "OK") throw new Error(response.status);
    return { status: "OK", data: response.data };
  } catch (err) {
    return { status: "ERROR", error: err.message };
  }
}
