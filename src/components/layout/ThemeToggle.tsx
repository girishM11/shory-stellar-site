
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    localStorage.getItem('theme') as 'light' | 'dark' || 'light'
  );

  useEffect(() => {
    // On mount, read the preferred theme from localStorage
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  useEffect(() => {
    // Whenever theme changes, update localStorage and document classes
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      return newTheme;
    });
  };

  return (
    <div className="relative">
      <button
        onClick={toggleTheme}
        className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? (
          <Moon size={18} className="text-primary animate-fade-in" />
        ) : (
          <Sun size={18} className="text-gold-300 animate-fade-in" />
        )}
      </button>
    </div>
  );
}
