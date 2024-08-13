import { render } from "@testing-library/react-native"
import { AnimatedLine } from "../AnimatedLine"

describe('AniamatedLine', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  test('useAnimatedProps with react-native-svg test', () => {
    const path = () => screen.getByTestId('Path')

    const width = 200
    const duration = 100
    const screen = render(
      <AnimatedLine
        width={width}
        duration={duration}
        // You can set this to true in order to see that the shared value is
        // being updated when the jest timers run.
        debug={false}
      />
    )
    
    screen.debug()

    expect(path()).toHaveProp("strokeDashoffset", null)

    jest.advanceTimersByTime(100)

    try {
      expect(path()).toHaveProp("strokeDashoffset", 0)
    } catch(e) {
      console.log('`strokeDashoffset` prop did not change after running timers')

      try {
        expect(path()).toHaveAnimatedStyle({
          "strokeDashoffset": 0,
        })
      } catch(e) {
        console.log('`strokeDashoffset` is not testable via the animated styles API either.')
        throw e
      }
    }
  })
})
