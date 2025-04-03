
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { UserPlus, X } from 'lucide-react';

export type FriendSuggestion = {
  id: string;
  name: string;
  avatar?: string;
  mutualFriends: number;
  goals: string[];
};

const FriendSuggestions = ({ suggestions }: { suggestions: FriendSuggestion[] }) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">People You May Know</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {suggestions.map((suggestion) => (
            <div key={suggestion.id} className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={suggestion.avatar} />
                <AvatarFallback>{suggestion.name.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">{suggestion.name}</div>
                <div className="text-xs text-muted-foreground">
                  {suggestion.mutualFriends} mutual friends
                </div>
              </div>
              
              <div className="flex gap-1">
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                  <X size={16} />
                </Button>
                <Button size="sm" className="h-8 w-8 p-0">
                  <UserPlus size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FriendSuggestions;
