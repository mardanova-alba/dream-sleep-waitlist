
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

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

const WaitlistForm = ({
  isOpen,
  onClose
}: WaitlistFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    toast
  } = useToast();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitToSupabase = async (data: FormData): Promise<void> => {
    const {
      error
    } = await supabase.from('waitlist').insert([{
      name: data.name.trim(),
      email: data.email.trim().toLowerCase()
    }]);
    if (error) {
      if (error.code === '23505') {
        throw new Error("This email is already on our waitlist!");
      }
      throw new Error(error.message || "Failed to join waitlist");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);
    setErrors({});
    try {
      await submitToSupabase(formData);
      setIsSubmitted(true);
      toast({
        title: "Welcome to the waitlist!",
        description: "Thank you for joining! We'll be in touch soon."
      });
      setTimeout(() => {
        setFormData({
          name: "",
          email: ""
        });
        setIsSubmitted(false);
        onClose();
      }, 2000);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to join waitlist";
      setErrors({
        general: errorMessage
      });
      toast({
        title: "Submission failed",
        description: errorMessage,
        variant: "destructive"
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
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setFormData({
        name: "",
        email: ""
      });
      setErrors({});
      setIsSubmitted(false);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl shadow-xl max-w-sm sm:max-w-md mx-4">
        <DialogHeader className="text-center mb-4 sm:mb-6">
          <DialogTitle className="text-lg sm:text-xl font-bold text-sky-950 md:text-3xl">
            Join the Waitlist
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm text-slate-100 px-px md:text-sm">
            Be the first to experience the future of trading
          </DialogDescription>
        </DialogHeader>

        {errors.general && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-xs sm:text-sm" role="alert" aria-live="polite">
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
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border focus:ring-2 focus:ring-brand-accent/20 bg-sky-600 text-white placeholder:text-white/70 text-xs sm:text-sm md:text-base ${errors.name ? 'border-red-400 focus:border-red-400' : 'border-brand-accent/30 focus:border-brand-accent'}`} 
              aria-invalid={!!errors.name} 
              aria-describedby={errors.name ? "name-error" : undefined} 
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-xs text-red-600" role="alert">
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
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border focus:ring-2 focus:ring-brand-accent/20 bg-sky-600 text-white placeholder:text-white/70 text-xs sm:text-sm md:text-base ${errors.email ? 'border-red-400 focus:border-red-400' : 'border-brand-accent/30 focus:border-brand-accent'}`} 
              aria-invalid={!!errors.email} 
              aria-describedby={errors.email ? "email-error" : undefined} 
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-xs text-red-600" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2 sm:pt-4">
            <Button 
              type="button" 
              onClick={handleClose} 
              variant="outline" 
              disabled={isSubmitting} 
              className="flex-1 pill-button border-brand-accent/30 text-brand-text bg-gray-400 hover:bg-gray-300 disabled:opacity-50 text-xs sm:text-sm md:text-base py-2 sm:py-3"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={isSubmitting || isSubmitted} 
              className={`flex-1 pill-button text-xs sm:text-sm md:text-base font-extralight text-brand-text text-center disabled:opacity-50 disabled:cursor-not-allowed py-2 sm:py-3 ${isSubmitted ? 'bg-green-500 hover:bg-green-500' : 'bg-sky-400 hover:bg-sky-300'}`} 
              aria-live="polite"
            >
              {isSubmitted ? "You're on the List!" : isSubmitting ? "Joining..." : "Join Waitlist"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistForm;
