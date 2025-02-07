"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Confetti from "react-confetti"
import { WavyBackground } from "@/components/ui/wavy-background"
import { div } from "framer-motion/client"

const images = [
  "/img1.png",
  "/img2.png",
  "/img3.png",
  "/img5.png",
  "/img4.png",
  "/img6.png",
  "/us.png", // Final Yes page
]

const buttonTexts = [
  "No",
  "Are you sure?",
  "Are you really really sure?",
  "You're breaking my heart 💔",
  "Enough! I will turn evil! 😈",
  "Now you have no option! Hehe 😈",
]

// SVG background pattern
const backgroundSvg = `
<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'>
  <g fill-rule='evenodd'>
    <g fill='%23FF69B4' fill-opacity='0.4'>
      <path d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/>
    </g>
  </g>
</svg>
`

export default function ValentinePage() {
  const [step, setStep] = useState(0)
  const [accepted, setAccepted] = useState(false)

  // Ensure step does not exceed available images
  const currentImage = images[accepted ? 6 : Math.min(step, images.length - 1)]
  const currentButtonText = buttonTexts[Math.min(step, buttonTexts.length - 1)]

  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
    <div
      className="flex flex-col items-center justify-center min-h-screen p-4 text-center"
      // style={{
      //   backgroundColor: "#FFB6C1", // Light pink
      //   backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(backgroundSvg)}")`,
      // }}
    >
      {accepted && <Confetti />}

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        {currentImage && (
          <Image
            src={currentImage || "/placeholder.svg"}
            width={200}
            height={200}
            alt="Emotion"
            className="rounded-lg  mb-6"
          />
        )}

        <h1 className="text-2xl font-bold mb-6 text-white drop-shadow-lg">
          {accepted ?  "Yay! I knew you'd say yes! ❤️ \n\n\n\n From the moment I met you, my heart knew you were special. Every smile, every laugh, and every moment with you is a gift. Thank you for making my world brighter. Happy Valentine's Day Wifey! ❤️ i love you so much " : "Will you be my Valentine?"}
        </h1>

        {!accepted ? (
          <div className="flex flex-col space-y-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 text-white px-6 py-3 rounded-full text-lg transition"
              onClick={() => setAccepted(true)}
            >
              Yes
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-400 text-white px-6 py-3 rounded-full text-lg  hover:bg-red-600 transition"
              onClick={() => setStep((prev) => Math.min(prev + 1, buttonTexts.length - 1))}
            >
              {currentButtonText}
            </motion.button>
          </div>
        ) : (
           <div></div>
        )}
      </motion.div>
    </div>
    </WavyBackground>
  )
}

