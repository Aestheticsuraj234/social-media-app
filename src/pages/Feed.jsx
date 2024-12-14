import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Share2 } from 'lucide-react';

const Feed = () => {
  const posts = [
    { id: 1, user: 'John Doe', content: 'This is a sample post', likes: 10, comments: 5 },
    { id: 2, user: 'Jane Smith', content: 'Another sample post', likes: 15, comments: 3 },
  ];

  return (
    <div className="container mx-auto p-4 space-y-4">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <div className="flex items-center">
              <Avatar className="h-8 w-8 mr-2">
                <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${post.user}`} />
                <AvatarFallback>{post.user[0]}</AvatarFallback>
              </Avatar>
              <span className="font-semibold">{post.user}</span>
            </div>
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
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Feed;

