export const useAnimationProfile = () => {
  return {
    isReload: false,
    duration: (initial: number) => initial,
    delay: (initial: number) => initial,
    stagger: (initial: number) => initial,
    ease: [0.16, 1, 0.3, 1] as const,
  }
}

export default useAnimationProfile
