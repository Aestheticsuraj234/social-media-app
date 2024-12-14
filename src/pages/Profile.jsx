import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react'

// Mock data for demonstration
const userData = {
  name: "John Doe",
  username: "@johndoe",
  bio: "Passionate photographer and travel enthusiast",
  followers: 1234,
  following: 567,
  avatar: "https://github.com/shadcn.png"
}

const mockPosts = [
  { id: 1, content: "Just visited the most amazing place!", likes: 42, comments: 5, saved: true },
  { id: 2, content: "New camera day! Can't wait to try it out.", likes: 78, comments: 12, saved: false },
  { id: 3, content: "Throwback to last summer's adventure.", likes: 103, comments: 24, saved: true },
]

const PostCard = ({ post }) => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle>{userData.name}</CardTitle>
      <CardDescription>{userData.username}</CardDescription>
    </CardHeader>
    <CardContent>
      <p>{post.content}</p>
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button variant="ghost" size="sm">
        <Heart className="mr-2 h-4 w-4" />
        {post.likes}
      </Button>
      <Button variant="ghost" size="sm">
        <MessageCircle className="mr-2 h-4 w-4" />
        {post.comments}
      </Button>
      <Button variant="ghost" size="sm">
        <Share2 className="mr-2 h-4 w-4" />
        Share
      </Button>
      <Button variant="ghost" size="sm">
        <Bookmark className="mr-2 h-4 w-4" fill={post.saved ? "currentColor" : "none"} />
        {post.saved ? "Saved" : "Save"}
      </Button>
    </CardFooter>
  </Card>
)

const Profile = () => {
  const [activeTab, setActiveTab] = useState("posts")

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-6">
        <CardContent className="flex items-center space-x-4 pt-6">
          <Avatar className="h-24 w-24">
            <AvatarImage src={userData.avatar} />
            <AvatarFallback>{userData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-2xl font-bold">{userData.name}</h2>
            <p className="text-muted-foreground">{userData.username}</p>
            <p className="mt-2">{userData.bio}</p>
            <div className="mt-2 flex space-x-4">
              <span><strong>{userData.followers}</strong> Followers</span>
              <span><strong>{userData.following}</strong> Following</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="posts" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="posts" onClick={() => setActiveTab("posts")}>Posts</TabsTrigger>
          <TabsTrigger value="liked" onClick={() => setActiveTab("liked")}>Liked</TabsTrigger>
          <TabsTrigger value="saved" onClick={() => setActiveTab("saved")}>Saved</TabsTrigger>
        </TabsList>
        <TabsContent value="posts">
          {mockPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </TabsContent>
        <TabsContent value="liked">
          {mockPosts.filter(post => post.likes > 50).map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </TabsContent>
        <TabsContent value="saved">
          {mockPosts.filter(post => post.saved).map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Profile

