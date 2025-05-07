import React, { useState } from "react";
import { Card, CardContent } from "./components/ui/card.jsx";
import { Button } from "./components/ui/button.jsx";
import { Input } from "./components/ui/input.jsx";

const initialHabits = {
  daily: [],
  routine: []
};

export default function HabitsApp() {
  const [habits, setHabits] = useState(initialHabits);
  const [dailyInput, setDailyInput] = useState("");
  const [routineInput, setRoutineInput] = useState("");

  const addHabit = (type) => {
    if (type === "daily" && dailyInput.trim()) {
      setHabits({ ...habits, daily: [...habits.daily, { name: dailyInput, done: false }] });
      setDailyInput("");
    }
    if (type === "routine" && routineInput.trim()) {
      setHabits({ ...habits, routine: [...habits.routine, { name: routineInput, done: false }] });
      setRoutineInput("");
    }
  };

  const toggleHabit = (type, index) => {
    const updated = habits[type].map((h, i) => i === index ? { ...h, done: !h.done } : h);
    setHabits({ ...habits, [type]: updated });
  };

  const renderHabitList = (type) => (
    <div className="space-y-2">
      {habits[type].map((habit, index) => (
        <div key={index} className="flex items-center justify-between">
          <span className={habit.done ? "line-through" : ""}>{habit.name}</span>
          <Button variant="outline" onClick={() => toggleHabit(type, index)}>
            {habit.done ? "✓" : "○"}
          </Button>
        </div>
      ))}
    </div>
  );

  return (
    <main className="p-4 max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">🧘‍♂️ HÁBITOS</h1>

      <Card>
        <CardContent className="p-4 space-y-4">
          <h2 className="font-semibold">Hábitos diarios</h2>
          {renderHabitList("daily")}
          <div className="flex space-x-2">
            <Input
              placeholder="Ej: Estudiar 1h"
              value={dailyInput}
              onChange={(e) => setDailyInput(e.target.value)}
            />
            <Button onClick={() => addHabit("daily")}>Agregar</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 space-y-4">
          <h2 className="font-semibold">Hábitos rutinarios</h2>
          {renderHabitList("routine")}
          <div className="flex space-x-2">
            <Input
              placeholder="Ej: Ir al gym"
              value={routineInput}
              onChange={(e) => setRoutineInput(e.target.value)}
            />
            <Button onClick={() => addHabit("routine")}>Agregar</Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}