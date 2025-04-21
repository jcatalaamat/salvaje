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
    <div className="max-w-xl mx-auto p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-earth-100 relative overflow-hidden">
      {/* Organic decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 -mt-12 -mr-12 opacity-[0.05]">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="var(--color-clay)" d="M37.9,-65.7C48.7,-58.5,56.9,-47.6,64.4,-35.7C71.9,-23.8,78.9,-11.9,78.5,-0.2C78.1,11.4,70.4,22.8,62.7,34.1C55,45.4,47.2,56.6,36.7,63.9C26.2,71.2,13.1,74.5,-0.1,74.6C-13.2,74.8,-26.5,71.7,-37.2,64.5C-48,57.4,-56.3,46.3,-62.8,34.2C-69.3,22.1,-74,9.1,-74.2,-4.1C-74.4,-17.3,-70,-34.6,-60.2,-43.8C-50.4,-53,-35.1,-54.1,-22.9,-60.1C-10.7,-66.1,-1.4,-77.1,7.8,-78.1C17,-79.1,34,-73,37.9,-65.7Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 left-0 w-48 h-48 -mb-24 -ml-12 opacity-[0.05]">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="var(--color-amber-gold)" d="M48.8,-75.3C63.9,-69.7,77.5,-58.6,84.4,-44.5C91.3,-30.4,91.5,-13.1,87.7,2.2C83.9,17.5,76.1,30.8,67.1,43.9C58.1,57,47.9,69.9,34.9,75.3C21.9,80.7,6.1,78.7,-8.3,74.3C-22.7,69.9,-35.7,63.2,-47.3,54.1C-59,45,-69.3,33.7,-75.1,19.5C-80.9,5.3,-82.2,-11.8,-76.6,-26.2C-71,-40.6,-58.6,-52.3,-44.8,-58.4C-31,-64.5,-15.5,-65,0.7,-66.1C16.9,-67.1,33.8,-68.8,48.8,-75.3Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <h2 className="text-2xl font-serif font-semibold text-earth-800 mb-8 text-center relative">
        Community Task Tracker
        {/* Sacred symbol above the title */}
        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full text-earth-400 opacity-70 text-sm">✦</span>
      </h2>
      
      {/* Add todo form */}
      <div className="mb-8 space-y-4 relative">
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 p-3 border border-earth-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-earth-300 bg-white/90 font-light placeholder:text-earth-400"
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          />
          <button
            onClick={addTodo}
            className="px-5 py-3 bg-earth-600 text-white rounded-lg hover:bg-earth-700 transition-all duration-300 transform hover:scale-105 font-medium shadow-sm"
          >
            Add
          </button>
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-full sm:w-auto">
            <label className="text-sm text-earth-600 block mb-1 font-medium">Category:</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as any)}
              className="w-full sm:w-auto p-2.5 border border-earth-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-earth-300 bg-white/90 appearance-none pr-8 relative"
              style={{
                backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23a49080' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                backgroundPosition: "right 0.5rem center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "1.5em 1.5em"
              }}
            >
              <option value="personal">Personal</option>
              <option value="community">Community</option>
              <option value="land">Land</option>
              <option value="education">Education</option>
            </select>
          </div>
          
          <div className="w-full sm:w-auto">
            <label className="text-sm text-earth-600 block mb-1 font-medium">Due Date (optional):</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full sm:w-auto p-2.5 border border-earth-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-earth-300 bg-white/90"
            />
          </div>
        </div>
      </div>
      
      {/* Filter buttons */}
      <div className="flex mb-6 space-x-3 border-b border-earth-100 pb-4">
        <button
          onClick={() => setFilter('all')}
          className={cn(
            "px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium",
            filter === 'all' 
              ? "bg-earth-600 text-white shadow-sm" 
              : "bg-earth-50 text-earth-800 hover:bg-earth-100"
          )}
        >
          All Tasks
        </button>
        <button
          onClick={() => setFilter('active')}
          className={cn(
            "px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium",
            filter === 'active' 
              ? "bg-earth-600 text-white shadow-sm" 
              : "bg-earth-50 text-earth-800 hover:bg-earth-100"
          )}
        >
          Active
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={cn(
            "px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium",
            filter === 'completed' 
              ? "bg-earth-600 text-white shadow-sm" 
              : "bg-earth-50 text-earth-800 hover:bg-earth-100"
          )}
        >
          Completed
        </button>
      </div>
      
      {/* Todo list */}
      <div className="space-y-3">
        <AnimatePresence>
          {filteredTodos.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-10 bg-earth-50/40 rounded-2xl border border-dashed border-earth-200"
            >
              <div className="w-16 h-16 mb-4 text-earth-400 opacity-60">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              </div>
              <p className="text-center text-earth-600 font-serif text-lg">
                No tasks to display
              </p>
              <p className="text-earth-500 text-sm mt-1">
                Add a new task to get started
              </p>
            </motion.div>
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
                  "p-4 rounded-xl border-l-4 flex items-center justify-between gap-4 shadow-sm hover:shadow-md transition-all duration-300",
                  getCategoryColor(todo.category),
                  todo.completed ? "opacity-60" : ""
                )}
                style={{
                  borderRadius: index % 2 === 0 ? '0.75rem 0.5rem 0.75rem 0.5rem' : '0.5rem 0.75rem 0.5rem 0.75rem' 
                }}
              >
                <div className="flex items-start gap-3 flex-1">
                  <div className="mt-1">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                      className="h-5 w-5 rounded-full border-earth-300 text-earth-600 focus:ring-earth-500 cursor-pointer"
                    />
                  </div>
                  <div className="flex-1">
                    <p className={cn(
                      "font-medium text-earth-900 mb-1 transition-all duration-300",
                      todo.completed ? "line-through text-earth-600" : ""
                    )}>
                      {todo.text}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="px-2.5 py-1 rounded-full bg-white/80 text-xs text-earth-600 font-medium backdrop-blur-sm">
                        {todo.category}
                      </span>
                      {todo.dueDate && (
                        <span className="px-2.5 py-1 rounded-full bg-white/80 text-xs text-earth-600 font-medium backdrop-blur-sm">
                          Due: {new Date(todo.dueDate).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-earth-400 hover:text-earth-700 p-1.5 rounded-full hover:bg-earth-100 transition-colors"
                  aria-label="Delete task"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
      
      {/* Task count */}
      {filteredTodos.length > 0 && (
        <div className="mt-6 pt-4 border-t border-earth-100 flex justify-between items-center text-sm text-earth-600">
          <span>
            {todos.filter(todo => !todo.completed).length} active tasks
          </span>
          <span>
            {todos.filter(todo => todo.completed).length} completed
          </span>
        </div>
      )}
      
      {/* Sacred bottom decoration */}
      <div className="mt-8 text-center">
        <span className="inline-block text-earth-400 opacity-40">✧</span>
      </div>
    </div>
  );
} 