import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// Local implementation of cn utility function
const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
  category: 'personal' | 'community' | 'land' | 'education';
  dueDate?: string;
}

export default function Todo() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState<'all' | 'completed' | 'active'>('all');
  const [category, setCategory] = useState<'personal' | 'community' | 'land' | 'education'>('personal');
  const [dueDate, setDueDate] = useState('');

  // Load todos from localStorage on mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to localStorage when they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Add a new todo
  const addTodo = () => {
    if (input.trim() !== '') {
      const newTodo: TodoItem = {
        id: Date.now().toString(),
        text: input,
        completed: false,
        category,
        dueDate: dueDate || undefined
      };
      
      setTodos([...todos, newTodo]);
      setInput('');
      setDueDate('');
    }
  };

  // Toggle a todo's completed status
  const toggleTodo = (id: string) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Filter todos based on the selected filter
  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true; // 'all' filter
  });

  // Animation variants for the todo list items
  const todoVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: "easeOut"
      }
    }),
    exit: { 
      opacity: 0, 
      x: -20,
      transition: {
        duration: 0.2
      }
    }
  };

  // Get appropriate color based on category
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'personal':
        return 'bg-earth-200 border-earth-400';
      case 'community':
        return 'bg-earth-100 border-earth-300';
      case 'land':
        return 'bg-forest-200 border-forest-400';
      case 'education':
        return 'bg-ocean-200 border-ocean-400';
      default:
        return 'bg-gray-100 border-gray-300';
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-lg border border-earth-100">
      <h2 className="text-2xl font-serif font-semibold text-earth-800 mb-6">
        Community Task Tracker
      </h2>
      
      {/* Add todo form */}
      <div className="mb-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 p-2 border border-earth-200 rounded focus:outline-none focus:ring-2 focus:ring-earth-300"
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          />
          <button
            onClick={addTodo}
            className="px-4 py-2 bg-earth-600 text-white rounded hover:bg-earth-700 transition-colors"
          >
            Add
          </button>
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-full sm:w-auto">
            <label className="text-sm text-earth-700 block mb-1">Category:</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as any)}
              className="w-full sm:w-auto p-2 border border-earth-200 rounded focus:outline-none focus:ring-2 focus:ring-earth-300"
            >
              <option value="personal">Personal</option>
              <option value="community">Community</option>
              <option value="land">Land</option>
              <option value="education">Education</option>
            </select>
          </div>
          
          <div className="w-full sm:w-auto">
            <label className="text-sm text-earth-700 block mb-1">Due Date (optional):</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full sm:w-auto p-2 border border-earth-200 rounded focus:outline-none focus:ring-2 focus:ring-earth-300"
            />
          </div>
        </div>
      </div>
      
      {/* Filter buttons */}
      <div className="flex mb-6 space-x-2">
        <button
          onClick={() => setFilter('all')}
          className={cn(
            "px-3 py-1 rounded transition-colors",
            filter === 'all' 
              ? "bg-earth-600 text-white" 
              : "bg-earth-100 text-earth-800 hover:bg-earth-200"
          )}
        >
          All
        </button>
        <button
          onClick={() => setFilter('active')}
          className={cn(
            "px-3 py-1 rounded transition-colors",
            filter === 'active' 
              ? "bg-earth-600 text-white" 
              : "bg-earth-100 text-earth-800 hover:bg-earth-200"
          )}
        >
          Active
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={cn(
            "px-3 py-1 rounded transition-colors",
            filter === 'completed' 
              ? "bg-earth-600 text-white" 
              : "bg-earth-100 text-earth-800 hover:bg-earth-200"
          )}
        >
          Completed
        </button>
      </div>
      
      {/* Todo list */}
      <div className="space-y-2">
        <AnimatePresence>
          {filteredTodos.length === 0 ? (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-earth-500 py-6"
            >
              No tasks to display
            </motion.p>
          ) : (
            filteredTodos.map((todo, index) => (
              <motion.div
                key={todo.id}
                custom={index}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={todoVariants}
                className={cn(
                  "p-3 rounded-lg border-l-4 flex items-center justify-between",
                  getCategoryColor(todo.category),
                  todo.completed ? "opacity-70" : ""
                )}
              >
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    className="mt-1 h-4 w-4 rounded border-earth-300 text-earth-600 focus:ring-earth-500"
                  />
                  <div>
                    <p className={cn(
                      "text-earth-900 font-medium",
                      todo.completed ? "line-through" : ""
                    )}>
                      {todo.text}
                    </p>
                    <div className="flex gap-2 mt-1 text-xs text-earth-600">
                      <span className="px-2 py-0.5 rounded-full bg-white bg-opacity-60">
                        {todo.category}
                      </span>
                      {todo.dueDate && (
                        <span className="px-2 py-0.5 rounded-full bg-white bg-opacity-60">
                          Due: {new Date(todo.dueDate).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-earth-500 hover:text-earth-700"
                  aria-label="Delete todo"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
} 