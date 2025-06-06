import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 dark:from-slate-900 dark:to-slate-800">
      <header className="container mx-auto px-4 py-6">
        <Link href="/" className="flex items-center gap-2">
          <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          <span className="text-xl font-bold">Park'n'Pal</span>
        </Link>
      </header>

      <main className="container mx-auto px-4 py-12">
        <Card className="mx-auto max-w-4xl">
          <CardHeader>
            <CardTitle className="text-3xl">Terms of Service</CardTitle>
            <p className="text-muted-foreground">Last updated: June 6, 2024</p>
          </CardHeader>
          <CardContent className="prose prose-slate max-w-none dark:prose-invert">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using Park'n'Pal ("the Service"), you accept and agree to be bound by the terms and
              provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              Park'n'Pal is a smart parking platform that connects car owners with parking lot owners, enabling users to
              find, book, and pay for parking spaces in real-time.
            </p>

            <h2>3. User Accounts</h2>
            <p>
              To use certain features of the Service, you must register for an account. You are responsible for
              maintaining the confidentiality of your account credentials and for all activities that occur under your
              account.
            </p>

            <h2>4. Booking and Payment</h2>
            <p>
              When you make a booking through Park'n'Pal, you enter into a contract with the parking lot owner. Payment
              is processed securely through our platform, and fees are clearly displayed before confirmation.
            </p>

            <h2>5. Cancellation Policy</h2>
            <p>
              Cancellation policies vary by parking lot owner. Please review the specific cancellation terms before
              making a booking. Refunds, if applicable, will be processed according to the lot owner's policy.
            </p>

            <h2>6. User Conduct</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the Service for any unlawful purpose</li>
              <li>Interfere with or disrupt the Service</li>
              <li>Attempt to gain unauthorized access to any part of the Service</li>
              <li>Provide false or misleading information</li>
            </ul>

            <h2>7. Privacy</h2>
            <p>
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the
              Service, to understand our practices.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              Park'n'Pal shall not be liable for any indirect, incidental, special, consequential, or punitive damages
              resulting from your use of the Service.
            </p>

            <h2>9. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of any material changes via
              email or through the Service.
            </p>

            <h2>10. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at{" "}
              <a href="mailto:legal@parknpal.com">legal@parknpal.com</a>.
            </p>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
