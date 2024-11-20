import { Link, Shield } from "lucide-react";

export function Appbar() {
  return (
    <header className='px-4 lg:px-6 h-14 flex items-center'>
      <div className='flex items-center justify-center'>
        <Shield className='h-6 w-6 text-primary' />
        <span className='ml-2 text-lg font-bold'>SafeGuard AI</span>
      </div>
      <nav className='ml-auto flex gap-4 sm:gap-6'>
        <div className='text-sm font-medium hover:underline underline-offset-4'>
          About
        </div>
        <div className='text-sm font-medium hover:underline underline-offset-4'>
          Register
        </div>
      </nav>
    </header>
  );
}
