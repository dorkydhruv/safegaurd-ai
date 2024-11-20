import { Shield } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"

export function ReusableCard({
    title, subtitle
}:{
    title: string,
    subtitle: string
}){
    return <Card>
    <CardHeader>
      <Shield className="h-6 w-6 mb-2 text-primary" />
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{subtitle}</p>
    </CardContent>
  </Card>
}