import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from 'sonner';


const UpdatePost = () => {
  const [content, setContent] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    // Fetch post data based on id
    // This is a mock implementation
    setContent(`This is the content of post ${id}`);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle post update logic here
    console.log('Update Post:', { id, content });
    toast({
      title: "Post Updated",
      description: "Your post has been successfully updated.",
    });
    navigate('/');
  };

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Update Post</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={4}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button type="submit">Update Post</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default UpdatePost;

