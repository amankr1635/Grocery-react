export const getImageUrl = (path) => {
  if (!path) return "";

  const baseUrl = process.env.REACT_APP_IMAGE_URL?.replace(/\/$/, ""); // removes trailing slash
  const cleanPath = path.startsWith("/") ? path.slice(1) : path; // removes leading slash

  return `${baseUrl}/${cleanPath}`;
};
