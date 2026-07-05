import { Truck, Box, Layers, Container, HardHat, FlaskConical, Fuel } from "lucide-react";
import type { Product } from "@/lib/types";

export const ICON_MAP: Record<Product["iconKey"], React.ComponentType<{ size?: number; className?: string }>> = {
  Truck,
  Box,
  Layers,
  Container,
  HardHat,
  FlaskConical,
  Fuel,
};
