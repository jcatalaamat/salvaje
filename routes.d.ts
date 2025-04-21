// deno-lint-ignore-file
/* eslint-disable */
// biome-ignore: needed import
import type { OneRouter } from 'one'

declare module 'one' {
  export namespace OneRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/_sitemap` | `/components/CommunitySection` | `/components/EducationPrograms` | `/components/EducationSection` | `/components/Footer` | `/components/Hero` | `/components/HeroSection` | `/components/JoinSection` | `/components/LandSection` | `/components/LocationSection` | `/components/Navbar` | `/components/OurVision` | `/components/ProgramsSection` | `/components/Todo` | `/components/Vision` | `/components/VisionSection` | `/utils/cn`
      DynamicRoutes: never
      DynamicRouteTemplate: never
      IsTyped: true
    }
  }
}