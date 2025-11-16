import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code } from "lucide-react";
import { motion } from "framer-motion";

export default function Commands() {
  const commandCategories = [
    {
      name: "Security",
      commands: [
        {
          name: "?antinuke",
          description: "Manage anti-nuke settings to protect your server",
          usage: "?antinuke <enable/disable>",
        },
        {
          name: "?extraowner",
          description: "Add or remove extraowner for antinuke access",
          usage: "?extraowner set <@user/reset/view>",
        },
        {
          name: "?whitelist",
          description: "Add or remove users from the whitelist",
          usage: "?whitelist @user/id",
        },
        {
          name: "?wlist",
          description: "View the current whitelisted users",
          usage: "?wlist",
        },
        {
          name: "?whitelistreset",
          description: "Reset the whitelist to default settings",
          usage: "?whitelistreset",
        },
        {
          name: "?antiunverifiedbot",
          description: "Toggle anti-unverified bot protection and see status",
          usage: "?antiunverifiedbot <enable/disable>",
        },
        {
          name: "?panicmode",
          description:
            "Locks all channels to prevent messages/voice in emergencies",
          usage: "?panicmode <enable/disable>",
        },
        {
          name: "?verify",
          description: "Manage verification settings for new members",
          usage: "?verify <setup/reset>",
        },
      ],
    },
    {
      name: "Moderation/Auto-Moderation",
      commands: [
        {
          name: "?automod",
          description: "Configure auto-moderation settings",
          usage: "?automod",
        },
        {
          name: "?role",
          description: "Assign or remove a role from a user",
          usage: "?role <user> <role>",
        },
        {
          name: "?ban",
          description: "Permanently ban a user from the server",
          usage: "?ban <user> [reason]",
        },
        {
          name: "?chatban",
          description: "Prevent a user from sending messages in text channels",
          usage: "?chatban <user>",
        },
        {
          name: "?chatunban",
          description: "Remove chatban from a user",
          usage: "?chatunban <user>",
        },
        {
          name: "?createembed",
          description: "Create a custom embed message",
          usage: "?createembed",
        },
        {
          name: "?hide",
          description: "Hide a specific channel from @everyone",
          usage: "?hide <channel>",
        },
        {
          name: "?hideall",
          description: "Hide all channels from @everyone",
          usage: "?hideall",
        },
        {
          name: "?ignore",
          description: "Ignore commands in a specific channel",
          usage: "?ignore",
        },
        {
          name: "?kick",
          description: "Kick a user from the server",
          usage: "?kick <user> [reason]",
        },
        {
          name: "?list",
          description: "List admin/bot/inrole/banned users",
          usage: "?list admin/bot/inrole/ban",
        },
        {
          name: "?lock",
          description: "Lock a channel (prevent sending messages)",
          usage: "?lock <channel>",
        },
        {
          name: "?lockall",
          description: "Lock all channels in the server",
          usage: "?lockall",
        },
        {
          name: "?mediachannel",
          description: "Restrict media to specific channels",
          usage: "?mediachannel",
        },
        {
          name: "?mute",
          description: "Mute a user (voice & text)",
          usage: "?mute <user> [duration] [reason]",
        },
        {
          name: "?nick",
          description: "Change a user's nickname",
          usage: "?nick <user> <nickname>",
        },
        {
          name: "?nuke",
          description: "Delete and clone a channel (clear all messages)",
          usage: "?nuke <channel>",
        },
        {
          name: "?prefix",
          description: "Change the bot prefix for this server",
          usage: "?prefix <new-prefix>",
        },
        {
          name: "?purge",
          description: "Delete a number of messages",
          usage: "?purge <amount> [user]",
        },
        {
          name: "?purgebots",
          description: "Delete messages from all bots",
          usage: "?purgebots <amount>",
        },
        {
          name: "?roleall",
          description: "Assign role to all humans/bots",
          usage: "?roleall <humans/bots> <role>",
        },
        {
          name: "?softban",
          description: "Ban and immediately unban (clears messages)",
          usage: "?softban <user> [reason]",
        },
        {
          name: "?unban",
          description: "Unban a user by ID",
          usage: "?unban <user-id>",
        },
        {
          name: "?unbanall",
          description: "Unban all banned users",
          usage: "?unbanall",
        },
        {
          name: "?unhide",
          description: "Make a hidden channel visible again",
          usage: "?unhide <channel>",
        },
        {
          name: "?unhideall",
          description: "Unhide all channels",
          usage: "?unhideall",
        },
        {
          name: "?unlock",
          description: "Unlock a locked channel",
          usage: "?unlock <channel>",
        },
        {
          name: "?unlockall",
          description: "Unlock all locked channels",
          usage: "?unlockall",
        },
        {
          name: "?unmute",
          description: "Remove mute from a user",
          usage: "?unmute <user>",
        },
        {
          name: "?warn",
          description: "Issue a warning to a user",
          usage: "?warn <user> <reason>",
        },
        {
          name: "?warnlist",
          description: "View all warnings for a user",
          usage: "?warnlist [user]",
        },
        {
          name: "?warnremove",
          description: "Remove a specific warning",
          usage: "?warnremove <warning-id>",
        },
      ],
    },
    {
      name: "Welcomer",
      commands: [
        {
          name: "?greet",
          description: "Toggle welcome system",
          usage: "?greet <on/off>",
        },
        {
          name: "?leavechannel",
          description: "Set the channel for leave messages",
          usage: "?leavechannel <#channel>",
        },
        {
          name: "?leavemessage",
          description: "Set custom leave message",
          usage: "?leavemessage",
        },
        {
          name: "?autorole",
          description: "Set role to give on join",
          usage: "?autorole <@role>",
        },
        {
          name: "?greetautodelete",
          description: "Auto-delete welcome message after time",
          usage: "?greetautodelete <seconds>",
        },
        {
          name: "?greetchannel",
          description: "Set welcome message channel",
          usage: "?greetchannel <#channel>",
        },
        {
          name: "?greetconfig",
          description: "View current welcome settings",
          usage: "?greetconfig",
        },
        {
          name: "?greetedit",
          description: "Edit welcome message",
          usage: "?greetedit <message>",
        },
        {
          name: "?greetreset",
          description: "Reset all welcome settings",
          usage: "?greetreset",
        },
        {
          name: "?greettest",
          description: "Test welcome message",
          usage: "?greettest",
        },
        {
          name: "?greettoggle",
          description: "Toggle welcome messages on/off",
          usage: "?greettoggle",
        },
      ],
    },
    {
      name: "Info",
      commands: [
        {
          name: "?afk",
          description: "Set AFK status",
          usage: "?afk <message>",
        },
        {
          name: "?avatar",
          description: "Show user's avatar",
          usage: "?avatar [@user]",
        },
        {
          name: "?banner",
          description: "Show user's banner",
          usage: "?banner [@user]",
        },
        {
          name: "?calculator",
          description: "Simple math calculator",
          usage: "?calculator",
        },
        {
          name: "?emojilist",
          description: "List all server emojis",
          usage: "?emojilist",
        },
        {
          name: "?firstmsg",
          description: "Get first message in channel",
          usage: "?firstmsg",
        },
        {
          name: "?help",
          description: "Show command help",
          usage: "?help",
        },
        {
          name: "?invite",
          description: "Get bot invite link",
          usage: "?invite",
        },
        {
          name: "?membercount",
          description: "Show total members",
          usage: "?membercount",
        },
        {
          name: "?ping",
          description: "Check bot latency",
          usage: "?ping",
        },
        {
          name: "?report",
          description: "Report an issue with the bot",
          usage: "?report <issue>",
        },
        {
          name: "?suggest",
          description: "Submit a suggestion for the bot",
          usage: "?suggest <suggestion>",
        },
        {
          name: "?roleicon",
          description: "Show role icon",
          usage: "?roleicon <@role>",
        },
        {
          name: "?roleinfo",
          description: "Get role information",
          usage: "?roleinfo <@role>",
        },
        {
          name: "?serverbanner",
          description: "Show server banner",
          usage: "?serverbanner",
        },
        {
          name: "?servericon",
          description: "Show server icon",
          usage: "?servericon",
        },
        {
          name: "?serverinfo",
          description: "Get server details",
          usage: "?serverinfo",
        },
        {
          name: "?setboost",
          description: "Set boost channel",
          usage: "?setboost",
        },
        {
          name: "?stats",
          description: "Bot statistics",
          usage: "?stats",
        },
        {
          name: "?uptime",
          description: "Show bot uptime",
          usage: "?uptime",
        },
        {
          name: "?userinfo",
          description: "Get user info",
          usage: "?userinfo [@user]",
        },
        {
          name: "?boosterlist",
          description: "List server boosters",
          usage: "?boosterlist",
        },
        {
          name: "?snipe",
          description: "View last deleted message",
          usage: "? <number>",
        },
        {
          name: "?premium",
          description: "Check premium status",
          usage: "?premium <activate/revoke/validity/stats> ",
        },
      ],
    },
    {
      name: "Invite Tracker Beta",
      commands: [
        {
          name: "?addinvites",
          description: "Manually add invites to a user",
          usage: "?addinvites <@user> <amount>",
        },
        {
          name: "?inviteconfig",
          description: "Configure invite tracking",
          usage: "?inviteconfig",
        },
        {
          name: "?invitehelp",
          description: "Show invite tracker help",
          usage: "?invitehelp",
        },
        {
          name: "?inviteleaderboard",
          description: "Show top inviters",
          usage: "?inviteleaderboard",
        },
        {
          name: "?invites",
          description: "Check invites for a user",
          usage: "?invites [@user]",
        },
        {
          name: "?removeinvites",
          description: "Remove invites from a user",
          usage: "?removeinvites <@user> <amount>",
        },
        {
          name: "?resetinvites",
          description: "Reset invites for a user",
          usage: "?resetinvites <@user>",
        },
        {
          name: "?resetserverinvites",
          description: "Reset all server invites",
          usage: "?resetserverinvites",
        },
      ],
    },
    {
      name: "Voice",
      commands: [
        {
          name: "?vcban",
          description: "Ban user from voice channels",
          usage: "?vcban <@user>",
        },
        {
          name: "?vcunban",
          description: "Unban user from voice",
          usage: "?vcunban <@user>",
        },
        {
          name: "?j2c",
          description: "Join to create voice channel",
          usage: "?j2c",
        },
        {
          name: "?vcdeafen",
          description: "Deafen a user in voice",
          usage: "?vcdeafen <@user>",
        },
        {
          name: "?vcdeafenall",
          description: "Deafen all in voice",
          usage: "?vcdeafenall",
        },
        {
          name: "?vckick",
          description: "Kick user from voice",
          usage: "?vckick <@user>",
        },
        {
          name: "?vckickall",
          description: "Kick all from voice",
          usage: "?vckickall",
        },
        {
          name: "?vclist",
          description: "List users in voice",
          usage: "?vclist",
        },
        {
          name: "?vcmove",
          description: "Move user to another voice",
          usage: "?vcmove <@user> [Channel_ID]",
        },
        {
          name: "?vcmoveall",
          description: "Move all to another voice",
          usage: "?vcmoveall [Channel_ID]",
        },
        {
          name: "?vcmute",
          description: "Mute user in voice",
          usage: "?vcmute <@user>",
        },
        {
          name: "?vcmuteall",
          description: "Mute all in voice",
          usage: "?vcmuteall",
        },
        {
          name: "?vcrole",
          description: "Set voice role permissions",
          usage: "?vcrole <@role>",
        },
        {
          name: "?vcundeafen",
          description: "Undeafen user in voice",
          usage: "?vcundeafen <@user>",
        },
        {
          name: "?vcundeafenall",
          description: "Undeafen all",
          usage: "?vcundeafenall",
        },
        {
          name: "?vcunmute",
          description: "Unmute user in voice",
          usage: "?vcunmute <@user>",
        },
        {
          name: "?vcunmuteall",
          description: "Unmute all in voice",
          usage: "?vcunmuteall",
        },
      ],
    },
    {
      name: "Logging",
      commands: [
        {
          name: "?autologs",
          description: "Auto-setup all log channels",
          usage: "?autologs",
        },
        {
          name: "?channellog",
          description: "Set channel updates log",
          usage: "?channellog <#channel>",
        },
        {
          name: "?logall",
          description: "Set all logs to a single channel",
          usage: "?logall",
        },
        {
          name: "?memberlog",
          description: "Set member join/leave log",
          usage: "?memberlog <#channel>",
        },
        {
          name: "?messagelog",
          description: "Set message delete/edit log",
          usage: "?messagelog <#channel>",
        },
        {
          name: "?modlog",
          description: "Set moderation actionable log",
          usage: "?modlog <#channel>",
        },
        {
          name: "?logreset",
          description: "Reset all log settings",
          usage: "?logreset",
        },
        {
          name: "?rolelog",
          description: "Set role create/delete log",
          usage: "?rolelog <#channel>",
        },
        {
          name: "?showlogs",
          description: "Show current log settings",
          usage: "?showlogs",
        },
        {
          name: "?vclog",
          description: "Set voice activity log",
          usage: "?vclog <#channel>",
        },
      ],
    },
    {
      name: "Customrole",
      commands: [
        {
          name: "?customrole",
          description: "Create/manage custom roles",
          usage: "?customrole",
        },
      ],
    },
    {
      name: "Giveaway",
      commands: [
        {
          name: "?gstart",
          description: "Start a new giveaway",
          usage: "?gstart <channel> <time> <prize>",
        },
        {
          name: "?gpause",
          description: "Pause a giveaway",
          usage: "?gpause <message-id>",
        },
        {
          name: "?gresume",
          description: "Resume a paused giveaway",
          usage: "?gresume <message-id>",
        },
        {
          name: "?gend",
          description: "End a giveaway early",
          usage: "?gend <message-id>",
        },
        {
          name: "?greroll",
          description: "Reroll a giveaway",
          usage: "?greroll <message-id>",
        },
      ],
    },
    {
      name: "Autoresponder",
      commands: [
        {
          name: "?autoresponder",
          description: "Manage auto-responses",
          usage: "?autoresponder",
        },
      ],
    },
    {
      name: "Ticket",
      commands: [
        {
          name: "?ticketsetup",
          description: "Create and deploy a ticket panel",
          usage: "?ticketsetup",
        },
        {
          name: "?activetickets",
          description: "List all active tickets",
          usage: "?activetickets",
        },
        {
          name: "?categories",
          description: "Manage ticket categories",
          usage: "?categories",
        },
        {
          name: "?deletepanel",
          description: "Delete a ticket panel",
          usage: "?deletepanel <name>",
        },
        {
          name: "?ticketpanels",
          description: "List all ticket panels",
          usage: "?ticketpanels",
        },
      ],
    },
    {
      name: "Payment",
      commands: [
        {
          name: "?qr",
          description: "Generate payment QR code",
          usage: "?qr",
        },
        {
          name: "?qrreset",
          description: "Reset QR settings",
          usage: "?qrreset",
        },
        {
          name: "?setqr",
          description: "Set default QR image",
          usage: "?setqr <image-url>",
        },
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero */}
      <section className="py-16 md:py-24 border-b bg-gradient-to-br from-primary/10 via-chart-2/10 to-background">
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <Badge className="mb-4" data-testid="badge-commands">
            Commands
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
            Command Documentation
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the complete list of commands to manage your server and
            music experience.
          </p>
        </motion.div>
      </section>

      {/* Commands */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <Tabs defaultValue={commandCategories[0].name} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mb-8 overflow-x-auto">
              {commandCategories.map((category) => (
                <TabsTrigger
                  key={category.name}
                  value={category.name}
                  className="text-xs md:text-sm whitespace-nowrap"
                  data-testid={`tab-${category.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {commandCategories.map((category) => (
              <TabsContent
                key={category.name}
                value={category.name}
                className="space-y-6"
              >
                {category.commands.map((command, index) => (
                  <motion.div
                    key={command.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.03, duration: 0.4 }}
                  >
                    <Card
                      className="group hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                      data-testid={`card-command-${category.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}-${index}`}
                    >
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                          <Code className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                          <span
                            className="font-mono text-lg group-hover:text-primary transition-colors duration-300"
                            data-testid={`text-command-name-${category.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}-${index}`}
                          >
                            {command.name}
                          </span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p
                          className="text-muted-foreground"
                          data-testid={`text-command-description-${category.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}-${index}`}
                        >
                          {command.description}
                        </p>
                        <div>
                          <div className="text-sm font-medium mb-2">Usage:</div>
                          <code
                            className="block px-4 py-2 bg-muted rounded-md text-sm font-mono group-hover:bg-muted/80 transition-colors duration-300"
                            data-testid={`text-command-usage-${category.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}-${index}`}
                          >
                            {command.usage}
                          </code>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </motion.div>
  );
}
