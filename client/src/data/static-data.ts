import type { Stats, Testimonial } from "@shared/schema";

export const stats: Stats = {
  totalServers: "53+",
  totalUsers: "30328+",
  uptime: "99.9%",
  threatsblocked: "21+",
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    serverName: "IDO STORE",
    authorName: "DG Gaming",
    authorRole: "Server Owner",
    content:
      "LegionX has been a game-changer for our Discord community. Its robust security features and seamless performance have significantly enhanced our server's safety and user experience. Highly recommended!",
    rating: 5,
  },
  {
    id: "2",
    serverName: "SK STORE",
    authorName: "Somvar Live",
    authorRole: "Server Owner",
    content:
      "Since integrating LegionX into our server, we've seen a remarkable improvement in security and user engagement. The bot's features are top-notch, and the support from the LegionX team is outstanding. It's an essential tool for any serious Discord server.",
    rating: 5,
  },
  {
    id: "3",
    serverName: "Chimtu.gg",
    authorName: "Chimtu",
    authorRole: "Server Owner",
    content:
      "LegionX has transformed the way we manage our Discord server. Its advanced protection mechanisms and user-friendly commands have made moderation effortless. Our community feels safer, and our engagement has increased. LegionX is a must-have for any Discord server looking to elevate its management and security.",
    rating: 5,
  },
];
