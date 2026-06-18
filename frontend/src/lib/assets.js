export function publicAsset(path) {
  const base = process.env.PUBLIC_URL || "";
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (!base || base === "/") {
    return normalizedPath;
  }

  return `${base.replace(/\/$/, "")}${normalizedPath}`;
}
