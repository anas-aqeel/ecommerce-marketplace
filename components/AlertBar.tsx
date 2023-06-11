import { Terminal, Waves } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from './ui/alert'

export default function AlertBar({ content, isLoading}: { content: string, isLoading: boolean}) {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      
      <AlertTitle>{content}</AlertTitle>
    </Alert>
  )
}
