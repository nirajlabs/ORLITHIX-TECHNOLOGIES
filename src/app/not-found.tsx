import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-24">
      <Container className="text-center">
        <span className="font-mono text-sm font-semibold uppercase tracking-widest text-[#40D6C5]">
          ERROR 404 // ROUTE_NOT_FOUND
        </span>
        <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold text-[#F4F6FF]">
          Coordinate Desynchronized
        </h1>
        <p className="mt-4 text-sm sm:text-base text-[#A5B2CC] max-w-md mx-auto">
          The requested architectural vector does not exist or has been relocated within the Orlithix topology.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/" variant="primary" size="md" icon={<ArrowLeft className="w-4 h-4" />} iconPosition="left">
            Return to Kernel Nexus
          </Button>
        </div>
      </Container>
    </div>
  );
}
