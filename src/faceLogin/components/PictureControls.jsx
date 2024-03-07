import React, { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCameraStatus, getScreenshot, setCameraStatus, setScreenshot, setIsFlashing, getActiveTab, setAuthError, getActiveSource, setActiveSource, setScreenshotFromURL, getURL, setURL } from "../features/auth/authSlice"
import { setFacenetError, setFacenetMessage, setOutline } from "../features/auth/facenetSlice"

export const PictureControls = () => {

    const dispatch = useDispatch()
    const cameraStatus = useSelector(getCameraStatus)
    const screenshot = useSelector(getScreenshot)
    const activeTab = useSelector(getActiveTab)
    const activeSource = useSelector(getActiveSource)
    const imageURL = useSelector(getURL)
    const fileInputRef = useRef()


    const handleActiveSource = (source) => {
        dispatch(setActiveSource(source))
        if (source === 'file') {
            dispatch(setCameraStatus('closed'))
        }
        dispatch(setScreenshot(null))
        dispatch(setURL(null))
        dispatch(setAuthError({ login: { serverErr: null } }))
        dispatch(setAuthError({ register: { serverErr: null } }))
    }

    const handleCameraClosing = () => {
        dispatch(setCameraStatus('closed'))
        dispatch(setScreenshot(null))
        dispatch(setOutline('#ddd'))
        dispatch(setFacenetMessage('Place the face in the oval.'))
    }

    const handleCameraOpening = () => {
        dispatch(setCameraStatus('opened'))
        dispatch(setScreenshot(null))
        dispatch(setOutline('#ddd'))
        dispatch(setFacenetMessage('Place the face in the oval.'))
    }

    const handleFileInputClick = () => {
        dispatch(setCameraStatus('closed'))
        dispatch(setScreenshot(null))
        dispatch(setFacenetError(null))
        fileInputRef.current.value = ''
        fileInputRef.current.click()
    }

    const handleFileUpload = () => {
        const input = fileInputRef.current
        const err = {}
        if (input.files && input.files[0]) {
            const reader = new FileReader()
            reader.onload = (r) => {
                dispatch(setScreenshot(r.target.result))
                dispatch(setIsFlashing(true))
                err[activeTab] = { screenshot: null }
                dispatch(setAuthError(err))
            }
            reader.readAsDataURL(input.files[0])
        } else if (input.files && input.files[0]) {
            err[activeTab] = { screenshot: 'The IMAGE file too large (max 1.5 MB).' }
            dispatch(setAuthError(err))
        } else {
            err[activeTab] = { screenshot: 'No IMAGE selected.' }
            dispatch(setAuthError(err))
        }
    }

    const handleSendURL = async () => {
        dispatch(setScreenshot(null))
        dispatch(setScreenshotFromURL({ url: imageURL }))
    }

    return (
        <>
            <div className="wrap-input100-image">
                <div className="form-check source-box">
                    <div className="source-nav" style={{
                        display: 'flex',
                        justifyContent: 'space-around'
                    }
                    }>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '11px',
                            width: '46%',
                        }}>
                            <button
                                style={{ width: '100%', margin: '0' }}
                                type="button"
                                className={'btn nav-link ' + (activeSource === 'webcam' ? 'active' : 'btn-secondary ')}
                                onClick={() => handleActiveSource('webcam')}
                            >Webcam</button>
                        </div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '11px',
                            width: '46%',
                        }}>
                            <button
                                style={{ width: '100%', margin: '0' }}
                                type="button"
                                className={'btn nav-link ' + (activeSource === 'file' ? 'active' : 'btn-secondary ')}
                                onClick={() => handleActiveSource('file')}
                            >File</button>
                        </div>
                    </div>
                </div>
                {
                    activeSource === 'webcam' &&
                    <button
                        style={{
                            width: '100%',
                            height: '55px',
                            margin: '17px 0px',
                        }}
                        type="button"
                        className="zoom-out"
                        onClick={() => cameraStatus === 'closed' ? handleCameraOpening() : handleCameraClosing()}
                    >{screenshot != null ? 'Capture new image' : (cameraStatus === 'opened' ? 'Close Camera' : 'Open Camera')}</button>
                }
                {
                    activeSource === 'file' &&
                    <><button
                        style={{
                            width: '97%',
                            height: '55px'
                        }}
                        type="button"
                        className="zoom-out"
                        onClick={() => handleFileInputClick()}
                    >{screenshot == null ? 'Choose Photo' : 'Choose New Photo'}</button>
                        <input
                            style={{
                                width: '97%',
                                height: '55px'
                            }}
                            type="file"
                            className="hidden"
                            ref={fileInputRef}
                            accept="image/*"
                            onChange={() => handleFileUpload()}
                        /></>
                }
            </div>
        </>
    )
}