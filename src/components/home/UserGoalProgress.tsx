
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Trophy, Calendar } from 'lucide-react';

type GoalProgressProps = {
  weeklyWorkouts: {
    completed: number;
    target: number;
  };
  workoutStreak: number;
};

const UserGoalProgress = ({ weeklyWorkouts, workoutStreak }: GoalProgressProps) => {
  const percentage = Math.min(100, (weeklyWorkouts.completed / weeklyWorkouts.target) * 100);
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Your Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">Weekly workouts</span>
              <span className="text-muted-foreground">{weeklyWorkouts.completed}/{weeklyWorkouts.target}</span>
            </div>
            <Progress value={percentage} className="h-2" />
          </div>
          
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="bg-muted/50 rounded-lg p-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-fitness-blue/10 flex items-center justify-center text-fitness-blue">
                <Trophy size={20} />
              </div>
              <div>
                <div className="text-2xl font-bold">{workoutStreak}</div>
                <div className="text-xs text-muted-foreground">Day streak</div>
              </div>
            </div>
            
            <div className="bg-muted/50 rounded-lg p-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-fitness-orange/10 flex items-center justify-center text-fitness-orange">
                <Calendar size={20} />
              </div>
              <div>
                <div className="text-2xl font-bold">{weeklyWorkouts.completed}</div>
                <div className="text-xs text-muted-foreground">This week</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserGoalProgress;
