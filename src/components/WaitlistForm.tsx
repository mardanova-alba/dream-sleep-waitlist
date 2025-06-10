import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
interface WaitlistFormProps {
  isOpen: boolean;
  onClose: () => void;
}
const WaitlistForm = ({
  isOpen,
  onClose
}: WaitlistFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const isFormValid = formData.name.trim() && isValidEmail(formData.email);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Welcome to the waitlist!",
      description: "We'll notify you when MoneyDream.AI launches."
    });
    setIsSubmitting(false);
    onClose();
    setFormData({
      name: "",
      email: ""
    });
  };
  if (!isOpen) return null;
  return <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="rounded-2xl p-8 max-w-md w-full card-shadow animate-scale-in bg-sky-50">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-brand-text mb-2">
            Join the Waitlist
          </h3>
          <p className="text-brand-text/70">
            Be the first to experience the future of trading
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input type="text" placeholder="Your Name" value={formData.name} onChange={e => setFormData({
            ...formData,
            name: e.target.value
          })} className="w-full px-4 py-3 rounded-xl bg-brand-primary text-brand-text border border-brand-accent/30 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 placeholder:text-brand-text/60" required />
          </div>
          
          <div>
            <Input type="email" placeholder="Your Email" value={formData.email} onChange={e => setFormData({
            ...formData,
            email: e.target.value
          })} className="w-full px-4 py-3 rounded-xl bg-brand-primary text-brand-text border border-brand-accent/30 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 placeholder:text-brand-text/60" required />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" onClick={onClose} variant="outline" className="flex-1 pill-button border-brand-accent/30 text-brand-text hover:bg-brand-light">
              Cancel
            </Button>
            <Button type="submit" disabled={!isFormValid || isSubmitting} className="flex-1 pill-button bg-brand-accent text-brand-text hover:bg-brand-accent/90 disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? "Joining..." : "Join Waitlist"}
            </Button>
          </div>
        </form>
      </div>
    </div>;
};
export default WaitlistForm;