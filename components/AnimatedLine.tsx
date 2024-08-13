import { Path, Svg } from "react-native-svg";
import Animated, {
  interpolate,
  useAnimatedProps,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated'

const AnimatedPathBase = Animated.createAnimatedComponent(Path)

interface AnimatedLineProps {
  width?: number
  duration?: number
  debug?: boolean
}

export function AnimatedLine({
  width = 100,
  duration = 500,
  debug = false,
}: AnimatedLineProps) {
  const start = 0
  const end = width * -1
  const offset = useSharedValue(0)

  offset.value = withRepeat(
    withSequence(
      withTiming(1, { duration }),
      withTiming(0, { duration }),
    ),
    -1
  )

  const animatedOffset = useAnimatedProps(() => {
    const nextValue = interpolate(offset.value, [0, 1], [start, end])
    if (debug) console.log('nextValue:', nextValue)
    return {
      strokeDashoffset: nextValue,
    }
  })

  return (
    <Svg>
      <AnimatedPathBase
        testID="Path"
        d="M0 0 L100 0"
        stroke="red"
        strokeWidth={4}
        strokeDasharray={[width, width]}
        animatedProps={animatedOffset}
      />
    </Svg>
  )
}

