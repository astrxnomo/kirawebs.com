import { PlusIcon, X } from "lucide-react"
import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { usePriceSimulator } from "./price-simulator-provider"

export function SectionsStep() {
  const { formData, updateFormData } = usePriceSimulator()
  const [newSection, setNewSection] = useState("")

  const addSection = () => {
    if (newSection && !formData.sections.includes(newSection)) {
      updateFormData("sections", [...formData.sections, newSection])
      setNewSection("")
    }
  }

  const removeSection = (section: string) => {
    updateFormData(
      "sections",
      formData.sections.filter((s) => s !== section),
    )
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="newSection">Añade secciones</Label>
        <div className="flex gap-2">
          <Input
            value={newSection}
            onChange={(event) => setNewSection(event.target.value)}
            placeholder="Nueva Sección (ej. Galería, Blog, Contacto)"
            className="grow"
          />
          <Button onClick={addSection} type="button">
            <PlusIcon className="size-4" /> Añadir
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {formData.sections.map((section) => (
          <Badge
            key={section}
            variant="outline"
            className="rounded border-primary bg-primary/5 px-2 py-1"
          >
            {section}
            <button
              className="-my-1 -me-2 -ms-1 inline-flex size-7 shrink-0 items-center justify-center rounded p-0 opacity-60 transition-opacity hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70"
              onClick={() => removeSection(section)}
              aria-label="Delete"
            >
              <X size={14} strokeWidth={2} aria-hidden="true" />
            </button>
          </Badge>
        ))}
      </div>
    </div>
  )
}
