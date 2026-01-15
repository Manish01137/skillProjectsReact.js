/* eslint-disable no-unused-vars */
import { useState } from "react"
import "./TrainingGallery.css"

import video1 from "../../assets/videos/video1.mp4"
import video2 from "../../assets/videos/video2.mp4"
import video3 from "../../assets/videos/video3.mp4"
import video4 from "../../assets/videos/video4.mp4"
import video5 from "../../assets/videos/vido5.mp4"
import video6 from "../../assets/videos/video6.mp4"
import video7 from "../../assets/videos/video7.mp4"

const videos = [
  video1,
  video2,
  video3,
  video4,
  video5,
  video6,
  video7,
]

const TrainingGallery = () => {
  const [activeVideo, setActiveVideo] = useState(null)

  return (
    <section className="training-gallery" id="gallery">
      <h2>
        Training <span>Sessions</span>
      </h2>

      <p className="gallery-subtitle">
        Explore our expert-led training sessions designed to transform leaders
        and elevate team performance.
      </p>

      {/* Infinite Marquee */}
      <div className="gallery-marquee">
        <div className="gallery-track">
          {[...videos, ...videos].map((video, index) => (
            <div
              key={index}
              className="gallery-card"
              onClick={() => setActiveVideo(video)}
            >
              <video
                src={video}
                muted
                loop
                autoPlay
                playsInline
              />
              <div className="gallery-overlay">
                <span>▶</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="gallery-lightbox" onClick={() => setActiveVideo(null)}>
          <video
            src={activeVideo}
            controls
            autoPlay
            playsInline
          />
        </div>
      )}
    </section>
  )
}

export default TrainingGallery
