import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Car, CreditCard, HelpCircle, Key, MapPin, MessageCircle, Search } from "lucide-react"
import Link from "next/link"

const faqData = [
  {
    category: "Getting Started",
    icon: BookOpen,
    questions: [
      {
        question: "How do I create an account?",
        answer:
          "You can create an account by clicking the 'Sign Up' button on our homepage. Choose whether you're a car owner or parking lot owner, then fill in your details.",
      },
      {
        question: "Is Park'n'Pal free to use?",
        answer:
          "Creating an account and browsing parking spots is free. We only charge a small service fee when you make a booking.",
      },
      {
        question: "What cities is Park'n'Pal available in?",
        answer:
          "We're currently available in major cities across the US. Check our coverage map on the homepage to see if we're in your area.",
      },
    ],
  },
  {
    category: "Booking & Parking",
    icon: Car,
    questions: [
      {
        question: "How do I book a parking spot?",
        answer:
          "Use our map to find available spots near you, select a spot, choose your time, and confirm your booking. You'll receive a QR code for check-in.",
      },
      {
        question: "Can I cancel my booking?",
        answer:
          "Yes, you can cancel bookings according to the lot owner's cancellation policy. Most allow cancellation up to 2 hours before your booking time.",
      },
      {
        question: "What if I'm running late?",
        answer:
          "Contact the parking lot owner through the app. Many owners are flexible with arrival times, but policies vary.",
      },
      {
        question: "How do I check in to my parking spot?",
        answer:
          "Use the QR code in your booking confirmation to check in at the parking entrance or show it to the attendant.",
      },
    ],
  },
  {
    category: "Payments",
    icon: CreditCard,
    questions: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards, debit cards, and digital wallets. You can also add money to your Park'n'Pal wallet.",
      },
      {
        question: "When am I charged for a booking?",
        answer:
          "Payment is processed immediately when you confirm your booking. For wallet payments, funds are deducted from your balance.",
      },
      {
        question: "How do refunds work?",
        answer:
          "Refunds are processed according to the lot owner's policy. Approved refunds typically appear in your account within 3-5 business days.",
      },
    ],
  },
  {
    category: "For Lot Owners",
    icon: Key,
    questions: [
      {
        question: "How do I list my parking lot?",
        answer:
          "Sign up as a lot owner, verify your business license, and add your parking spaces with photos, pricing, and availability.",
      },
      {
        question: "How much commission does Park'n'Pal charge?",
        answer:
          "We charge a competitive commission rate that varies by location and volume. Contact our sales team for specific pricing.",
      },
      {
        question: "How do I receive payments?",
        answer:
          "Payments are automatically transferred to your bank account weekly, minus our commission. You can track all earnings in your dashboard.",
      },
    ],
  },
]

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 dark:from-slate-900 dark:to-slate-800">
      <header className="container mx-auto px-4 py-6">
        <Link href="/" className="flex items-center gap-2">
          <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          <span className="text-xl font-bold">Park'n'Pal</span>
        </Link>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold">Help Center</h1>
            <p className="mt-2 text-muted-foreground">Find answers to common questions and get support</p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Search Help Articles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search for help articles..." className="pl-8" />
              </div>
            </CardContent>
          </Card>

          <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader>
                <Car className="mx-auto h-8 w-8 text-blue-600" />
                <CardTitle className="text-lg">Car Owners</CardTitle>
                <CardDescription>Learn how to find and book parking</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  View Guide
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Key className="mx-auto h-8 w-8 text-purple-600" />
                <CardTitle className="text-lg">Lot Owners</CardTitle>
                <CardDescription>Manage your parking business</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  View Guide
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CreditCard className="mx-auto h-8 w-8 text-green-600" />
                <CardTitle className="text-lg">Payments</CardTitle>
                <CardDescription>Billing and payment help</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  View Guide
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <MessageCircle className="mx-auto h-8 w-8 text-orange-600" />
                <CardTitle className="text-lg">Contact Us</CardTitle>
                <CardDescription>Get in touch with support</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5" />
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              {faqData.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-6">
                  <div className="mb-4 flex items-center gap-2">
                    <category.icon className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold">{category.category}</h3>
                    <Badge variant="secondary">{category.questions.length}</Badge>
                  </div>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`}>
                        <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Still Need Help?</CardTitle>
              <CardDescription>Can't find what you're looking for? We're here to help!</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 sm:flex-row">
              <Button className="flex-1 gap-2">
                <MessageCircle className="h-4 w-4" />
                Live Chat
              </Button>
              <Button variant="outline" className="flex-1 gap-2">
                <MapPin className="h-4 w-4" />
                Email Support
              </Button>
              <Button variant="outline" className="flex-1 gap-2">
                <BookOpen className="h-4 w-4" />
                User Guide
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
