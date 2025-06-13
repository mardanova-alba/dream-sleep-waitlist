
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

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

    if (!formData.name.trim()) {
      newErrors.name = "name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitToSupabase = async (data: FormData): Promise<void> => {
    const { error } = await supabase
      .from('waitlist')
      .insert([
        {
          name: data.name.trim(),
          email: data.email.trim().toLowerCase()
        }
      ]);

    if (error) {
      if (error.code === '23505') {
        throw new Error("this email is already on our waitlist!");
      }
      throw new Error(error.message || "failed to join waitlist");
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
        title: "welcome to the waitlist!",
        description: "thank you for joining! we'll be in touch soon.",
      });

      setTimeout(() => {
        setFormData({ name: "", email: "" });
        setIsSubmitted(false);
        onClose();
      }, 2000);

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "failed to join waitlist";
      setErrors({ general: errorMessage });
      toast({
        title: "submission failed",
        description: errorMessage,
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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-6 sm:p-8 max-w-md w-full mx-4 shadow-2xl border border-white/30 animate-scale-in">
        <div className="text-center mb-6">
          <h3 className="text-xl sm:text-2xl font-light text-white mb-2 lowercase tracking-wide">
            join the waitlist
          </h3>
          <p className="text-sm text-white/70 font-light lowercase">
            be the first to experience the future of trading
          </p>
        </div>

        {errors.general && (
          <div 
            className="mb-4 p-3 bg-red-200/20 border border-red-300/30 text-red-100 rounded-2xl text-sm backdrop-blur-sm"
            role="alert"
            aria-live="polite"
          >
            {errors.general}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <label htmlFor="waitlist-name" className="sr-only">
              your name
            </label>
            <Input
              id="waitlist-name"
              type="text"
              placeholder="your name"
              value={formData.name}
              onChange={handleInputChange('name')}
              required
              disabled={isSubmitting || isSubmitted}
              className={`w-full px-4 py-3 rounded-2xl border bg-white/20 text-white placeholder:text-white/60 focus:ring-2 focus:ring-white/40 backdrop-blur-sm text-center lowercase ${
                errors.name 
                  ? 'border-red-300/50 focus:border-red-300/50' 
                  : 'border-white/30 focus:border-white/50'
              }`}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p 
                id="name-error" 
                className="mt-1 text-xs text-red-200"
                role="alert"
              >
                {errors.name}
              </p>
            )}
          </div>
          
          <div>
            <label htmlFor="waitlist-email" className="sr-only">
              your email
            </label>
            <Input
              id="waitlist-email"
              type="email"
              placeholder="your email"
              value={formData.email}
              onChange={handleInputChange('email')}
              required
              disabled={isSubmitting || isSubmitted}
              className={`w-full px-4 py-3 rounded-2xl border bg-white/20 text-white placeholder:text-white/60 focus:ring-2 focus:ring-white/40 backdrop-blur-sm text-center lowercase ${
                errors.email 
                  ? 'border-red-300/50 focus:border-red-300/50' 
                  : 'border-white/30 focus:border-white/50'
              }`}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p 
                id="email-error" 
                className="mt-1 text-xs text-red-200"
                role="alert"
              >
                {errors.email}
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="button"
              onClick={handleClose}
              variant="outline"
              disabled={isSubmitting}
              className="flex-1 bg-white/10 border-white/30 text-white hover:bg-white/20 disabled:opacity-50 rounded-2xl py-3 lowercase font-light backdrop-blur-sm"
            >
              cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`flex-1 font-light text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed py-3 rounded-2xl lowercase shadow-lg hover:shadow-xl transition-all duration-300 ${
                isSubmitted 
                  ? 'bg-green-200/80 hover:bg-green-200/80' 
                  : 'bg-gradient-to-r from-purple-200/80 to-blue-200/80 hover:from-purple-300/90 hover:to-blue-300/90'
              }`}
              aria-live="polite"
            >
              {isSubmitted 
                ? "you're on the list!" 
                : isSubmitting 
                  ? "joining..." 
                  : "dream with us"
              }
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WaitlistForm;
