import { streamingContainerBg } from "@assets/images"
import { ArrowsSort } from "@components/Icons/Arrow"
import { ExternalLink } from "@components/Icons/ExternalLink"
import { StreamingContainer } from "@components/Icons/SteamingContainer"
import { Button } from "@nextui-org/react"

const LeftContent: React.FC = () => {
  return (
    <div className="w-[320px]">
      <div className="relative h-[568px] w-[320px]">
        <img src={streamingContainerBg} className="absolute left-0 top-0" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <StreamingContainer />
        </div>
        <div className="absolute bottom-[10%] flex w-full items-center">
          <span className="text-center text-[20px] font-semibold text-white">
            Go all in on Bitcoin, broked101. Nothing else comes close. It’s
            <br />
            the future—plain and simple.
          </span>
        </div>
      </div>

      <div className="my-6 flex items-center justify-between gap-2">
        <Button className="h-[44px] w-full rounded-full bg-mercury-70 text-white">
          <ExternalLink />
          <span className="text-base text-mercury-900">Twitter</span>
        </Button>
        <Button className="h-[44px] w-full rounded-full bg-mercury-950 text-white">
          <ArrowsSort color="#FFFF" />
          <span className="text-base text-white">Trade BTCMX</span>
        </Button>
      </div>

      <div>
        <h1 className="text-base-b">Description</h1>
        <span className="text-base">
          Mr. Elon Belfort, known as “Bitcoin Maxi,” is a staunch Bitcoin
          maximalist with a larger-than-life personality. He believes
          passionately that Bitcoin is the only true form of digital currency
          and is skeptical of anything else in the crypto space, which he calls
          “crypto-nonsense.” Despite his rough edges and unyielding stance, Max
          has a strong sense of loyalty and conviction, making him both an
          intimidating and inspiring figure to those around him.
        </span>
      </div>
    </div>
  )
}
export default LeftContent