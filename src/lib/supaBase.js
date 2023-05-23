import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
	'https://qbcbkcqslwiuxgyskijr.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFiY2JrY3FzbHdpdXhneXNraWpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExOTM4NjQsImV4cCI6MTk5Njc2OTg2NH0.pQueq4guVyXK-YQHn60hhMtbkrrVX3dW1TaT2YkJfxQ'
);
