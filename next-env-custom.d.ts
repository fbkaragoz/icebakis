declare module "next" {
  export interface PageProps {
  params?: Record<string, string> | Promise<Record<string, string>>
  searchParams?: Record<string, string | string[] | undefined> | Promise<Record<string, string | string[] | undefined>>
  }
}
