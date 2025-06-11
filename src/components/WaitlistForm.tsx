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
      <div className="bg-white rounded-2xl p-8 max-w-md w-full card-shadow animate-scale-in">
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
          })} required className="w-full px-4 py-3 rounded-xl border border-brand-accent/30 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 bg-sky-800" />
          </div>
          
          <div>
            <Input type="email" placeholder="Your Email" value={formData.email} onChange={e => setFormData({
            ...formData,
            email: e.target.value
          })} required className="w-full px-4 py-3 rounded-xl border border-brand-accent/30 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 bg-sky-800" />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" onClick={onClose} variant="outline" className="flex-1 pill-button border-brand-accent/30 text-brand-text bg-gray-400 hover:bg-gray-300">
              Cancel
            </Button>
            <Button type="submit" disabled={!isFormValid || isSubmitting} className="flex-1 pill-button disabled:opacity-50 disabled:cursor-not-allowed bg-sky-400 hover:bg-sky-300 text-base font-extralight text-brand-text text-center">
              {isSubmitting ? "Joining..." : "Join Waitlist"}
            </Button>
          </div>
        </form>
      </div>
    </div>;
};
export default WaitlistForm;