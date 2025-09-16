import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

interface EmailCaptureProps {
  onSubmit?: (email: string) => void;
}

export const EmailCapture = ({ onSubmit }: EmailCaptureProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: 'Invalid email',
        description: 'Please enter a valid email address.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      onSubmit?.(email);
      setIsSubmitted(true);
      
      toast({
        title: 'Welcome aboard!',
        description: 'You\'ll be notified the moment Aura launches.',
      });
    } catch (error) {
      toast({
        title: 'Something went wrong',
        description: 'Please try again in a moment.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center fade-in animate">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-primary/10 rounded-full">
          <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="section-headline mb-4">Welcome.</h3>
        <p className="body-large text-muted-foreground">We'll be in touch.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-6">
      <div className="space-y-4">
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-14 text-lg bg-card border-border/20 focus:border-primary/50 transition-colors"
          disabled={isLoading}
        />
        <Button
          type="submit"
          size="lg"
          disabled={isLoading}
          className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300 hover:shadow-[0_0_60px_hsl(36_100%_50%_/_0.6)]"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
              Processing...
            </div>
          ) : (
            'Secure My Spot'
          )}
        </Button>
      </div>
    </form>
  );
};