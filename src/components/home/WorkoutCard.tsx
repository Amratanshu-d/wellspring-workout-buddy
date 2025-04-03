
import React from 'react';
import { Card } from '@/components/ui/card';
import { Dumbbell, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export type WorkoutType = {
  id: string;
  title: string;
  duration: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  exercises: number;
  category: string;
};

const WorkoutCard = ({ workout }: { workout: WorkoutType }) => {
  const { title, duration, difficulty, exercises, category } = workout;
  
  return (
    <Card className="flex flex-col h-full overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-4 flex flex-col h-full">
        <div className="flex items-center justify-between mb-3">
          <div className="text-xs font-medium px-2 py-1 rounded bg-gray-100 text-gray-600">
            {category}
          </div>
          <div className={`text-xs font-medium px-2 py-1 rounded 
            ${difficulty === 'Beginner' ? 'bg-green-100 text-green-600' : 
              difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-600' : 
              'bg-red-100 text-red-600'}`}>
            {difficulty}
          </div>
        </div>
        
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{duration} min</span>
          </div>
          <div className="flex items-center gap-1">
            <Dumbbell size={16} />
            <span>{exercises} exercises</span>
          </div>
        </div>
        
        <Button className="mt-auto flex items-center gap-2 w-full" variant="outline">
          Start Workout
          <ArrowRight size={16} />
        </Button>
      </div>
    </Card>
  );
};

export default WorkoutCard;
