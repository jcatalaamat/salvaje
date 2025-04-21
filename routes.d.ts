// deno-lint-ignore-file
/* eslint-disable */
// biome-ignore: needed import
import type { OneRouter } from 'one'

declare module 'one' {
  export namespace OneRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/_sitemap` | `/components/CommunitySection` | `/components/Footer` | `/components/Hero` | `/components/JoinSection` | `/components/LandSection` | `/components/LocationSection` | `/components/Navbar` | `/components/ProgramsSection` | `/components/VisionSection` | `/page`
      DynamicRoutes: never
      DynamicRouteTemplate: never
      IsTyped: true
    }
  }
}