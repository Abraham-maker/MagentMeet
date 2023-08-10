import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  UploadContainerLayout,
  UploadContainer,
  UploadContainerHeader,
  ButtonStories,
  UploadContainerBody,
  UploadContainerFooter,
} from "../../styles/UploadStorie";
import {
  handleModalPermission,
  handleModalBloqued,
} from "../../store/actions/modals";
import { useDispatch } from "react-redux";
import { getUserData, uploadStorie } from "../../store/actions/auth";
import { FormMessage } from "../auth";

const UploadStorie = ({ setShowUploadStorie }) => {
  const dispatch = useDispatch();
  const videoRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [previewURL, setPreviewURL] = useState("");
  const [videoFile, setVideoFile] = useState(false);
  const [success, setSuccess] = useState(false);

  const startRecording = async () => {
    try {
      dispatch(handleModalPermission());
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      videoRef.current.srcObject = stream;
      videoRef.current.play();
      setRecording(true);

      const mediaRecorder = new MediaRecorder(stream);
      const chunks = [];

      mediaRecorder.addEventListener("dataavailable", (event) => {
        if (event.data && event.data.size > 0) {
          chunks.push(event.data);
        }
      });

      mediaRecorder.addEventListener("stop", () => {
        const file = new File(chunks, "file", { type: "video/mp4" });
        console.log(file);
        const previewURL = URL.createObjectURL(file);
        setPreviewURL(previewURL);
        setVideoFile(file);
      });

      dispatch(handleModalPermission());
      mediaRecorder.start();

      setTimeout(() => {
        mediaRecorder.stop();
        videoRef.current.srcObject = null;
        setRecording(false);
      }, 1000);
    } catch (error) {
      dispatch(handleModalBloqued());
      dispatch(handleModalPermission());
      console.log("Error accessing camera:", error);
    }
  };

  const uploadStories = async () => {
    const response = dispatch(uploadStorie(videoFile));
    if (response.status === "Success") {
      setSuccess({ status: 200, message: response.message });

      setTimeout(() => {
        dispatch(getUserData());
        setSuccess(false);
        setShowUploadStorie(false);
      }, 3000);
    }
  };

  return (
    <UploadContainerLayout>
      <UploadContainer>
        <UploadContainerHeader>
          *asegúrate de que tu cara se vea bien y con suficiente luz*
        </UploadContainerHeader>
        <UploadContainerBody>
          <video
            ref={videoRef}
            autoPlay
            style={{ display: recording ? "flex" : "none" }}
          />
          <video
            src={previewURL}
            controls
            style={{ display: !recording && previewURL ? "flex" : "none" }}
          />
        </UploadContainerBody>
        <UploadContainerFooter>
          {recording && (
            <ButtonStories
              $type="cancel"
              onClick={() => {
                setShowUploadStorie(false);
              }}
            >
              Cancelar
            </ButtonStories>
          )}
          {!recording && !previewURL && (
            <>
              {" "}
              <ButtonStories
                $type="cancel"
                onClick={() => {
                  setShowUploadStorie(false);
                }}
              >
                Cancelar
              </ButtonStories>
              <ButtonStories $type="save" onClick={startRecording}>
                Grabar historia
              </ButtonStories>
            </>
          )}
          {!recording && previewURL && (
            <>
              <ButtonStories $type="cancel" onClick={startRecording}>
                Repetir
              </ButtonStories>
              <ButtonStories $type="save" onClick={uploadStories}>
                Subir historia
              </ButtonStories>
            </>
          )}
        </UploadContainerFooter>
        {success.status === 200 && (
          <FormMessage style={{ marginTop: "20px" }}>
            {success.message}
          </FormMessage>
        )}
      </UploadContainer>
    </UploadContainerLayout>
  );
};

export default UploadStorie;
