import type { Stats, Testimonial } from "@shared/schema";

export const stats: Stats = {
  totalServers: "270+",
  totalUsers: "211957+",
  uptime: "99.98%",
  threatsblocked: "1700+",
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    serverName: "IDO STORE",
    authorName: "DG Gaming",
    authorRole: "Server Owner",
    content:
      "Wild has been a game-changer for our Discord community. Its robust security features and seamless performance have significantly enhanced our server's safety and user experience. Highly recommended!",
    rating: 5,
  },
  {
    id: "2",
    serverName: "SK STORE",
    authorName: "Somvar Live",
    authorRole: "Server Owner",
    content:
      "Since integrating Wild into our server, we've seen a remarkable improvement in security and user engagement. The bot's features are top-notch, and the support from the Wild team is outstanding. It's an essential tool for any serious Discord server.",
    rating: 5,
  },
];
