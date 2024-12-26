import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CelebrationCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CelebrationCard({ className, ...props }: CelebrationCardProps) {
  return (
    <Card className={cn("max-w-[640px] max-h-[480px] backdrop-blur", className)} {...props}>
      <CardHeader>
        <CardTitle className="text-4xl text-center">16 November 2025</CardTitle>
        <CardDescription className="text-xl text-center">
          Journée internationale de la tolérance
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-center text-muted-foreground">
          Journée dédiée à la promotion de la tolérance et du respect entre les cultures.
        </p>
      </CardContent>
      <CardFooter className="flex justify-center gap-4">
        <Button>En savoir plus</Button>
        <Button>Voir le calendrier</Button>
      </CardFooter>
    </Card>
  )
}