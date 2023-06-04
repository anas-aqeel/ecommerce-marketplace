export const apiVersion =
  process.env.SANITY_STUDIO_NEXT_PUBLIC_SANITY_API_VERSION || '2023-06-04'

export const dataset = assertValue(
  process.env.SANITY_STUDIO_NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: SANITY_STUDIO_NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.SANITY_STUDIO_NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: SANITY_STUDIO_NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    console.log(process.env)
    throw new Error(errorMessage)
  }

  return v
}
