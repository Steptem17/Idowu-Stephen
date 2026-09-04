export const useAnimationProfile = () => {
  return {
    isReload: false,
    duration: (initial: number) => initial,
    delay: (initial: number) => initial,
    stagger: (initial: number) => initial,
    ease: [0.22, 1, 0.36, 1] as const,
  }
}

export default useAnimationProfile
