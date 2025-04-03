
import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Navigation from '@/components/layout/Navigation';
import WorkoutCard, { WorkoutType } from '@/components/home/WorkoutCard';
import UserGoalProgress from '@/components/home/UserGoalProgress';
import ActivityFeed, { ActivityPost } from '@/components/social/ActivityFeed';
import FriendSuggestions, { FriendSuggestion } from '@/components/social/FriendSuggestions';
import { Button } from '@/components/ui/button';
import { Search, UserPlus, ArrowRight } from 'lucide-react';

// Mock data
const recommendedWorkouts: WorkoutType[] = [
  {
    id: '1',
    title: 'Full Body Strength',
    duration: 45,
    difficulty: 'Intermediate',
    exercises: 12,
    category: 'Strength'
  },
  {
    id: '2',
    title: 'HIIT Cardio Blast',
    duration: 30,
    difficulty: 'Advanced',
    exercises: 8,
    category: 'Cardio'
  },
  {
    id: '3',
    title: 'Yoga for Beginners',
    duration: 60,
    difficulty: 'Beginner',
    exercises: 15,
    category: 'Yoga'
  }
];

const activityPosts: ActivityPost[] = [
  {
    id: '1',
    user: {
      id: '101',
      name: 'Sarah Johnson',
      avatar: 'https://source.unsplash.com/random/100x100/?person=1'
    },
    content: 'Just completed my morning workout! Feeling energized 💪',
    workout: {
      title: 'Morning HIIT',
      duration: 30
    },
    likes: 24,
    comments: 3,
    time: '2h ago'
  },
  {
    id: '2',
    user: {
      id: '102',
      name: 'Mike Williams',
      avatar: 'https://source.unsplash.com/random/100x100/?person=2'
    },
    content: 'New personal record on deadlifts today! Thanks for the tips @coach_ryan',
    likes: 18,
    comments: 7,
    time: '5h ago'
  }
];

const friendSuggestions: FriendSuggestion[] = [
  {
    id: '201',
    name: 'Alex Chen',
    avatar: 'https://source.unsplash.com/random/100x100/?person=3',
    mutualFriends: 3,
    goals: ['Weight Loss', 'Strength']
  },
  {
    id: '202',
    name: 'Jordan Taylor',
    avatar: 'https://source.unsplash.com/random/100x100/?person=4',
    mutualFriends: 2,
    goals: ['Running', 'Flexibility']
  }
];

const userProgress = {
  weeklyWorkouts: {
    completed: 3,
    target: 5
  },
  workoutStreak: 7
};

const Index = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 pb-20 sm:pb-0 sm:ml-64">
        <div className="max-w-5xl mx-auto px-4 py-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
            <div>
              <h1 className="text-2xl font-bold">Welcome back, Ryan!</h1>
              <p className="text-muted-foreground">Let's continue your fitness journey today</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex gap-2">
                <Search size={16} />
                <span className="hidden sm:inline">Search</span>
              </Button>
              <Button variant="outline" className="flex gap-2">
                <UserPlus size={16} />
                <span className="hidden sm:inline">Invite Friends</span>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {/* Progress card */}
              <UserGoalProgress 
                weeklyWorkouts={userProgress.weeklyWorkouts}
                workoutStreak={userProgress.workoutStreak}
              />
              
              {/* Recommended Workouts */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-bold">Recommended Workouts</h2>
                  <Button variant="ghost" size="sm" className="flex items-center gap-1">
                    View all <ArrowRight size={16} />
                  </Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {recommendedWorkouts.map(workout => (
                    <WorkoutCard key={workout.id} workout={workout} />
                  ))}
                </div>
              </div>
              
              {/* Activity Feed */}
              <ActivityFeed posts={activityPosts} />
            </div>
            
            <div className="space-y-6">
              {/* Friend Suggestions */}
              <FriendSuggestions suggestions={friendSuggestions} />
              
              {/* Upcoming Events or Challenge Card */}
              <div className="bg-gradient-to-br from-fitness-blue to-fitness-darkBlue text-white rounded-xl p-5">
                <h3 className="font-bold text-lg mb-1">Weekend Challenge</h3>
                <p className="text-sm mb-3 opacity-90">Complete 3 workouts this weekend to earn a badge!</p>
                <div className="mb-2 w-full bg-white/20 h-2 rounded-full overflow-hidden">
                  <div className="bg-white h-full w-1/3" />
                </div>
                <div className="text-xs">1 of 3 completed</div>
                <Button className="mt-4 bg-white text-fitness-blue hover:bg-white/90 hover:text-fitness-blue">
                  Join Challenge
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Navigation />
    </div>
  );
};

export default Index;
