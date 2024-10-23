import { FilledBrainAIIcon } from "@components/Icons/BrainAIIcon"
import { FilledShieldCheckedIcon } from "@components/Icons/FilledShieldCheck"
import { Button } from "@nextui-org/react"
import mainContentBg from "assets/images/main-content-bg.jpg"
import { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { createBot } from "services/chat"
import { mapMyDataToBot } from "services/user"
import FYIModal from "../Modal/FYIModal"
import UploadDataButton from "../UploadDataButton"

const MainContainerCreate: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [openFYIPopup, setOpenFYIPopupp] = useState<boolean>(false)
  const methods = useForm<any>({
    defaultValues: {
      uploadCV: [],
      uploadSocialLink: [],
      uploadPDFs: [],
      photosVideos: [],
    },
  })

  const onSubmit = async () => {
    const values = methods.getValues()
    const uploadCVValues = values.uploadCV.length > 0 ? values.uploadCV : []
    const uploadSocialLinkValues =
      values.uploadSocialLink.length > 0 ? values.uploadSocialLink : []
    const uploadPDFsValues =
      values.uploadPDFs.length > 0 ? values.uploadPDFs : []
    const photosVideosValues =
      values.photosVideos.length > 0 ? values.photosVideos : []

    const payloadData = [
      ...uploadCVValues,
      ...uploadSocialLinkValues,
      ...uploadPDFsValues,
      ...photosVideosValues,
    ]

    try {
      const createBotResponse = await createBot({ name: "Unnamed" })
      if (createBotResponse) {
        const botId = createBotResponse?.data?.id
        const payload = {
          botId,
          data: payloadData,
        }
        const response = await mapMyDataToBot(payload)
        console.log("🚀 ~ onSubmit ~ response:", response)
        toast.success("created bot successfully")
      }
    } catch (error) {
      console.log("error", error)
    }
  }

  return (
    <>
      <FormProvider {...methods}>
        <div
          className="relative h-full w-full flex-1 rounded-[22px] border border-white bg-mercury-30 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${mainContentBg})`,
          }}
        >
          <div className="flex-items-center relative h-full w-full flex-col justify-between">
            <UploadDataButton
              icon={<FilledBrainAIIcon />}
              label="Start your Private Agent"
              isDisable
              radiusFull={true}
              customClassName=" absolute top-1/2 -translate-y-1/2"
            />
            {children}
            <div className="absolute bottom-[60px] flex items-center gap-2 rounded-[22px] border border-mercury-200 p-4 text-center max-sm:max-w-[320px]">
              <div>
                <span className="text-base-14 text-mercury-800">
                  Your Private Agent is exclusively accessible to you unless you
                  choose to publish it on the Marketplace.
                </span>
                <div
                  className="flex-items-center mt-2 cursor-pointer gap-2"
                  onClick={() => setOpenFYIPopupp(true)}
                >
                  <FilledShieldCheckedIcon color="#A2845E" />
                  <span className="text-base-14-md text-brown-10">
                    How do we protect your private data?
                  </span>
                </div>
              </div>

              <Button
                className="h-[44px] rounded-full bg-mercury-950 text-white max-sm:h-[36px]"
                onClick={() => onSubmit()}
              >
                <span className="">Connect data</span>
              </Button>
            </div>
          </div>
        </div>
      </FormProvider>
      <FYIModal openPopup={openFYIPopup} setOpenPopup={setOpenFYIPopupp} />
    </>
  )
}

export default MainContainerCreate
