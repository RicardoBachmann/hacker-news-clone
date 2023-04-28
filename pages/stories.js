import view from "../utils/view.js";

export default async function Stories(path) {
  const stories = await getStories(path);
  view.innerHTML = `<div>${path}</div>`;
  console.log(stories);
}

async function getStories(path) {
  const isHomeRoute = path === "/";
  if (isHomeRoute) {
    path = "/news";
  }
  const response = await fetch(`https://node-hnapi.herokuapp.com${path}`);
  const stories = await response.json();
  return stories;
}

// / (Top) -> /new
// /new (New) -> /newest
// /ask (Ask) -> /ask
// /show (Show) -> /show
