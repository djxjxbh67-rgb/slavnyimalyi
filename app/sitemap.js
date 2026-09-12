export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = "https://slavniymaliy.ru";

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/pricing", priority: 0.9, changeFrequency: "weekly" },
    { path: "/contacts", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services", priority: 0.8, changeFrequency: "weekly" },
    { path: "/groups", priority: 0.8, changeFrequency: "weekly" },
    { path: "/groups/young", priority: 0.8, changeFrequency: "monthly" },
    { path: "/groups/middle", priority: 0.8, changeFrequency: "monthly" },
    { path: "/groups/senior", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/documents", priority: 0.6, changeFrequency: "monthly" },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
