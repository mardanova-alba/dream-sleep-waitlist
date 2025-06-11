
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface WaitlistFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistForm = ({ isOpen, onClose }: WaitlistFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    general: ""
  });
  const { toast } = useToast();

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const newErrors = { name: "", email: "", general: "" };
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.general;
  };

  const submitToBackend = async (data: { name: string; email: string }) => {
    // Simulate API call for now - in production, this would be a real backend endpoint
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate occasional failure for testing
        if (Math.random() > 0.95) {
          reject(new Error("Server temporarily unavailable"));
        } else {
          console.log("Waitlist submission:", {
            ...data,
            timestamp: new Date().toISOString(),
            id: Math.random().toString(36).substr(2, 9)
          });
          resolve(data);
        }
      }, 1000);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setErrors({ name: "", email: "", general: "" });

    try {
      await submitToBackend(formData);
      
      setIsSubmitted(true);
      toast({
        title: "Welcome to the waitlist!",
        description: "We'll notify you when MoneyDream.AI launches."
      });
      
      // Close form after a short delay
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setFormData({ name: "", email: "" });
      }, 2000);
      
    } catch (error) {
      setErrors({
        name: "",
        email: "",
        general: "Something went wrong. Please try again later."
      });
      toast({
        title: "Submission failed",
        description: "Please check your connection and try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
      setFormData({ name: "", email: "" });
      setErrors({ name: "", email: "", general: "" });
      setIsSubmitted(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="waitlist-title"
    >
      <div className="bg-white rounded-2xl p-8 max-w-md w-full card-shadow animate-scale-in">
        {isSubmitted ? (
          <div className="text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-brand-text mb-2">
              You're on the list!
            </h3>
            <p className="text-brand-text/70">
              Thank you for joining. We'll be in touch soon!
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <h3 id="waitlist-title" className="text-2xl font-bold text-brand-text mb-2">
                Join the Waitlist
              </h3>
              <p className="text-brand-text/70">
                Be the first to experience the future of trading
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <Input
                  type="text"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      name: e.target.value
                    });
                    if (errors.name) {
                      setErrors({ ...errors, name: "" });
                    }
                  }}
                  required
                  className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-brand-accent/20 bg-sky-600 text-white placeholder:text-white/70 ${
                    errors.name 
                      ? 'border-red-400 focus:border-red-400' 
                      : 'border-brand-accent/30 focus:border-brand-accent'
                  }`}
                  aria-label="Your name (required)"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-red-500 text-sm mt-1" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      email: e.target.value
                    });
                    if (errors.email) {
                      setErrors({ ...errors, email: "" });
                    }
                  }}
                  required
                  className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-brand-accent/20 bg-sky-600 text-white placeholder:text-white/70 ${
                    errors.email 
                      ? 'border-red-400 focus:border-red-400' 
                      : 'border-brand-accent/30 focus:border-brand-accent'
                  }`}
                  aria-label="Your email address (required)"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              {errors.general && (
                <div className="text-red-500 text-sm text-center" role="alert">
                  {errors.general}
                </div>
              )}

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
                  disabled={isSubmitting}
                  className="flex-1 pill-button disabled:opacity-50 disabled:cursor-not-allowed bg-sky-400 hover:bg-sky-300 text-base font-extralight text-brand-text text-center"
                  aria-label={isSubmitting ? "Submitting waitlist form" : "Submit waitlist form"}
                >
                  {isSubmitting ? "Joining..." : "Join Waitlist"}
                </Button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default WaitlistForm;
