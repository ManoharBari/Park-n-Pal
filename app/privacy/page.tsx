import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
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
            <CardTitle className="text-3xl">Privacy Policy</CardTitle>
            <p className="text-muted-foreground">Last updated: June 6, 2024</p>
          </CardHeader>
          <CardContent className="prose prose-slate max-w-none dark:prose-invert">
            <h2>1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you:</p>
            <ul>
              <li>Create an account</li>
              <li>Make a booking</li>
              <li>Contact customer support</li>
              <li>Participate in surveys or promotions</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices and support messages</li>
              <li>Communicate with you about products, services, and events</li>
            </ul>

            <h2>3. Location Information</h2>
            <p>
              With your consent, we collect location information to help you find nearby parking spaces and provide
              navigation assistance. You can disable location sharing in your device settings at any time.
            </p>

            <h2>4. Information Sharing</h2>
            <p>We may share your information in the following circumstances:</p>
            <ul>
              <li>With parking lot owners when you make a booking</li>
              <li>With service providers who assist in our operations</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a merger, acquisition, or sale of assets</li>
            </ul>

            <h2>5. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction.
            </p>

            <h2>6. Data Retention</h2>
            <p>
              We retain your information for as long as necessary to provide our services and fulfill the purposes
              outlined in this policy, unless a longer retention period is required by law.
            </p>

            <h2>7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access and update your personal information</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications</li>
              <li>Request a copy of your data</li>
            </ul>

            <h2>8. Cookies and Tracking</h2>
            <p>
              We use cookies and similar technologies to enhance your experience, analyze usage patterns, and deliver
              personalized content. You can control cookie settings through your browser.
            </p>

            <h2>9. Children's Privacy</h2>
            <p>
              Our service is not intended for children under 13. We do not knowingly collect personal information from
              children under 13.
            </p>

            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any material changes by posting
              the new policy on this page and updating the "Last updated" date.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:privacy@parknpal.com">privacy@parknpal.com</a>.
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
