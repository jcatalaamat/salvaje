import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * A utility function that merges multiple class values into a single string.
 * It combines clsx for conditional classes with tailwind-merge for handling
 * Tailwind CSS class conflicts.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
} 