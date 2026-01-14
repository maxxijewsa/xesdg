import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Settings, Volume2, Music, Shield, Bell } from "lucide-react";

export default function Dashboard() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 border-b bg-gradient-to-br from-primary/10 via-chart-2/10 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4" data-testid="badge-dashboard">
            <Settings className="h-3 w-3 mr-1" />
            Dashboard
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
            Server Management
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Configure Wild protection and moderation settings for your Discord server.
          </p>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* Auth Notice */}
          <Card className="mb-8 border-primary/50" data-testid="card-auth-notice">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold mb-1">Authentication Required</h3>
                  <p className="text-sm text-muted-foreground">
                    Connect with Discord to manage your server settings. This dashboard will be fully functional once authentication is implemented.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-8">
            {/* Audio Settings */}
            <Card data-testid="card-audio-settings">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Volume2 className="h-5 w-5 text-primary" />
                  Audio Settings
                </CardTitle>
                <CardDescription>Configure default audio settings for your server</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="default-volume">Default Volume</Label>
                    <p className="text-sm text-muted-foreground">Set the default volume level (1-100)</p>
                  </div>
                  <Input
                    id="default-volume"
                    type="number"
                    min="1"
                    max="100"
                    defaultValue="50"
                    className="w-24"
                    data-testid="input-default-volume"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="audio-quality">Audio Quality</Label>
                    <p className="text-sm text-muted-foreground">Select preferred audio streaming quality</p>
                  </div>
                  <Select defaultValue="high">
                    <SelectTrigger className="w-40" id="audio-quality" data-testid="select-audio-quality">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="premium">Premium (320kbps)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="volume-normalization">Volume Normalization</Label>
                    <p className="text-sm text-muted-foreground">Ensure consistent volume across tracks</p>
                  </div>
                  <Switch id="volume-normalization" defaultChecked data-testid="switch-volume-normalization" />
                </div>
              </CardContent>
            </Card>

            {/* Playback Settings */}
            <Card data-testid="card-playback-settings">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Music className="h-5 w-5 text-primary" />
                  Playback Settings
                </CardTitle>
                <CardDescription>Control how music is played in your server</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="autoplay">AutoPlay</Label>
                    <p className="text-sm text-muted-foreground">Automatically play related songs when queue ends</p>
                  </div>
                  <Switch id="autoplay" data-testid="switch-autoplay" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="24-7-mode">24/7 Mode</Label>
                    <p className="text-sm text-muted-foreground">Keep bot in voice channel 24/7 (Premium only)</p>
                  </div>
                  <Switch id="24-7-mode" disabled data-testid="switch-24-7-mode" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="duplicate-prevention">Duplicate Prevention</Label>
                    <p className="text-sm text-muted-foreground">Prevent adding duplicate songs to queue</p>
                  </div>
                  <Switch id="duplicate-prevention" defaultChecked data-testid="switch-duplicate-prevention" />
                </div>
              </CardContent>
            </Card>

            {/* Permissions */}
            <Card data-testid="card-permissions">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  DJ Role & Permissions
                </CardTitle>
                <CardDescription>Manage who can control the music bot</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="dj-role">DJ Role</Label>
                    <p className="text-sm text-muted-foreground">Assign a role for music control privileges</p>
                  </div>
                  <Button variant="outline" data-testid="button-select-dj-role">Select Role</Button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="vote-skip">Vote Skip</Label>
                    <p className="text-sm text-muted-foreground">Require votes to skip songs</p>
                  </div>
                  <Switch id="vote-skip" defaultChecked data-testid="switch-vote-skip" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="vote-threshold">Skip Vote Threshold</Label>
                    <p className="text-sm text-muted-foreground">Percentage of listeners needed to skip</p>
                  </div>
                  <Input
                    id="vote-threshold"
                    type="number"
                    min="1"
                    max="100"
                    defaultValue="50"
                    className="w-24"
                    data-testid="input-vote-threshold"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card data-testid="card-notifications">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-primary" />
                  Notifications
                </CardTitle>
                <CardDescription>Configure notification preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="now-playing">Now Playing Messages</Label>
                    <p className="text-sm text-muted-foreground">Show message when a new song starts</p>
                  </div>
                  <Switch id="now-playing" defaultChecked data-testid="switch-now-playing" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="queue-updates">Queue Updates</Label>
                    <p className="text-sm text-muted-foreground">Notify when songs are added to queue</p>
                  </div>
                  <Switch id="queue-updates" data-testid="switch-queue-updates" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="error-notifications">Error Notifications</Label>
                    <p className="text-sm text-muted-foreground">Alert when playback errors occur</p>
                  </div>
                  <Switch id="error-notifications" defaultChecked data-testid="switch-error-notifications" />
                </div>
              </CardContent>
            </Card>

            {/* Save Button */}
            <div className="flex justify-end">
              <Button size="lg" data-testid="button-save-settings">
                Save Settings
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
