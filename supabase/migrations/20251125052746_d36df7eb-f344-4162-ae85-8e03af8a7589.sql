-- Create runners table
CREATE TABLE public.runners (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  bib_number TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  race_category TEXT NOT NULL CHECK (race_category IN ('3km', '5km', '10km', '21km', '42km')),
  start_time TIMESTAMPTZ,
  finish_time TIMESTAMPTZ,
  status TEXT DEFAULT 'registered' CHECK (status IN ('registered', 'started', 'finished', 'dnf')),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create runner_positions table for GPS tracking
CREATE TABLE public.runner_positions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  runner_id UUID NOT NULL REFERENCES public.runners(id) ON DELETE CASCADE,
  latitude DOUBLE PRECISION NOT NULL,
  longitude DOUBLE PRECISION NOT NULL,
  altitude DOUBLE PRECISION,
  speed DOUBLE PRECISION,
  distance_covered DOUBLE PRECISION DEFAULT 0,
  timestamp TIMESTAMPTZ DEFAULT now(),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create index for better performance
CREATE INDEX idx_runner_positions_runner_id ON public.runner_positions(runner_id);
CREATE INDEX idx_runner_positions_timestamp ON public.runner_positions(timestamp DESC);
CREATE INDEX idx_runners_bib_number ON public.runners(bib_number);

-- Enable Row Level Security
ALTER TABLE public.runners ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.runner_positions ENABLE ROW LEVEL SECURITY;

-- RLS Policies - Public read access for race tracking
CREATE POLICY "Anyone can view runners"
  ON public.runners
  FOR SELECT
  USING (true);

CREATE POLICY "Anyone can view runner positions"
  ON public.runner_positions
  FOR SELECT
  USING (true);

-- Only authenticated users can insert/update (for admin/race officials)
CREATE POLICY "Authenticated users can insert runners"
  ON public.runners
  FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can update runners"
  ON public.runners
  FOR UPDATE
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can insert positions"
  ON public.runner_positions
  FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

-- Enable realtime for both tables
ALTER PUBLICATION supabase_realtime ADD TABLE public.runners;
ALTER PUBLICATION supabase_realtime ADD TABLE public.runner_positions;

-- Set replica identity for realtime updates
ALTER TABLE public.runners REPLICA IDENTITY FULL;
ALTER TABLE public.runner_positions REPLICA IDENTITY FULL;