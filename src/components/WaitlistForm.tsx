
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface WaitlistFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  general?: string;
}

const WaitlistForm = ({ isOpen, onClose }: WaitlistFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validate name (required)
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Validate email (required and format)
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitToBackend = async (data: FormData): Promise<void> => {
    // Simulate backend API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate 90% success rate for demo purposes
        if (Math.random() > 0.1) {
          console.log("Waitlist data submitted:", data);
          resolve();
        } else {
          reject(new Error("Service temporarily unavailable"));
        }
      }, 1500);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      await submitToBackend(formData);
      
      setIsSubmitted(true);
      toast({
        title: "Welcome to the waitlist!",
        description: "Thank you for joining! We'll be in touch soon.",
      });

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({ name: "", email: "" });
        setIsSubmitted(false);
        onClose();
      }, 2000);

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to join waitlist";
      setErrors({ general: errorMessage });
      toast({
        title: "Submission failed",
        description: "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    
    // Clear field-specific error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setFormData({ name: "", email: "" });
      setErrors({});
      setIsSubmitted(false);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full card-shadow animate-scale-in">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-brand-text mb-2">
            Join the Waitlist
          </h3>
          <p className="text-brand-text/70">
            Be the first to experience the future of trading
          </p>
        </div>

        {errors.general && (
          <div 
            className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg"
            role="alert"
            aria-live="polite"
          >
            {errors.general}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <label htmlFor="waitlist-name" className="sr-only">
              Your Name
            </label>
            <Input
              id="waitlist-name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange('name')}
              required
              disabled={isSubmitting || isSubmitted}
              className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-brand-accent/20 bg-sky-600 text-white placeholder:text-white/70 ${
                errors.name 
                  ? 'border-red-400 focus:border-red-400' 
                  : 'border-brand-accent/30 focus:border-brand-accent'
              }`}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p 
                id="name-error" 
                className="mt-1 text-sm text-red-600"
                role="alert"
              >
                {errors.name}
              </p>
            )}
          </div>
          
          <div>
            <label htmlFor="waitlist-email" className="sr-only">
              Your Email
            </label>
            <Input
              id="waitlist-email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange('email')}
              required
              disabled={isSubmitting || isSubmitted}
              className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-brand-accent/20 bg-sky-600 text-white placeholder:text-white/70 ${
                errors.email 
                  ? 'border-red-400 focus:border-red-400' 
                  : 'border-brand-accent/30 focus:border-brand-accent'
              }`}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p 
                id="email-error" 
                className="mt-1 text-sm text-red-600"
                role="alert"
              >
                {errors.email}
              </p>
            )}
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              onClick={handleClose}
              variant="outline"
              disabled={isSubmitting}
              className="flex-1 pill-button border-brand-accent/30 text-brand-text bg-gray-400 hover:bg-gray-300 disabled:opacity-50"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`flex-1 pill-button text-base font-extralight text-brand-text text-center disabled:opacity-50 disabled:cursor-not-allowed ${
                isSubmitted 
                  ? 'bg-green-500 hover:bg-green-500' 
                  : 'bg-sky-400 hover:bg-sky-300'
              }`}
              aria-live="polite"
            >
              {isSubmitted 
                ? "You're on the Waitlist!" 
                : isSubmitting 
                  ? "Joining..." 
                  : "Join Waitlist"
              }
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WaitlistForm;
