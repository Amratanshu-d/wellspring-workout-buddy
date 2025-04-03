
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, MessageSquare, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export type ActivityPost = {
  id: string;
  user: {
    id: string;
    name: string;
    avatar?: string;
  };
  content: string;
  workout?: {
    title: string;
    duration: number;
  };
  likes: number;
  comments: number;
  time: string;
};

const ActivityFeed = ({ posts }: { posts: ActivityPost[] }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold mb-2">Friend Activity</h2>
      
      {posts.map((post) => (
        <Card key={post.id} className="overflow-hidden">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <Avatar>
                <AvatarImage src={post.user.avatar} />
                <AvatarFallback>{post.user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold">{post.user.name}</span>
                  <span className="text-xs text-muted-foreground">{post.time}</span>
                </div>
                
                <p className="text-sm mb-2">{post.content}</p>
                
                {post.workout && (
                  <div className="bg-muted/30 p-3 rounded-lg mb-3">
                    <div className="font-medium text-sm">{post.workout.title}</div>
                    <div className="text-xs text-muted-foreground">{post.workout.duration} min</div>
                  </div>
                )}
                
                <div className="flex items-center gap-4 mt-2">
                  <Button variant="ghost" size="sm" className="flex items-center gap-1 text-xs">
                    <Heart size={16} /> {post.likes}
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center gap-1 text-xs">
                    <MessageSquare size={16} /> {post.comments}
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center gap-1 text-xs">
                    <Share2 size={16} /> Share
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ActivityFeed;
