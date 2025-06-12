
-- Create waitlist table
CREATE TABLE public.waitlist (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert into waitlist (public signup)
CREATE POLICY "Anyone can join waitlist" 
  ON public.waitlist 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy to allow reading waitlist data (for admin purposes)
CREATE POLICY "Allow read access to waitlist" 
  ON public.waitlist 
  FOR SELECT 
  USING (true);
