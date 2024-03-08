import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getScreenshot, getActiveSource } from "../features/auth/authSlice";
import * as faceapi from 'face-api.js';
import { detectFaces, getStyles, setFacenetError, setStyles } from "../features/auth/facenetSlice";

export const Preview = (props) => {
    const { containerRef } = props;
    const dispatch = useDispatch();
    const screenshot = useSelector(getScreenshot);
    const styles = useSelector(getStyles);

    const canvasRef = useRef(null);
    const previewRef = useRef(null);

    useEffect(() => {
        const handleScreenshot = async () => {
            if (!screenshot) return;

            const { blobW, blobH } = await getScreenshotDims(screenshot);
            cropImage(blobW, blobH);
            dispatch(setFacenetError(null));

            dispatch(detectFaces({ previewRef, canvasRef })).then(r => {
                const faces = r.payload;
                if (faces && faces.length > 0) {
                    const options = {
                        lineWidth: 4,
                        boxColor: (faces.length === 1 && faces[0].detection.score > 0.75) ? '#00ff00' : '#f00000',
                        drawLabelOptions: { fontColor: '#1e40af' }
                    };
                    faces.forEach(face => {
                        const box = face.detection.box;
                        options.label = 'Score: ' + (Math.round(face.detection.score * 100) / 100);
                        const drawBox = new faceapi.draw.DrawBox(box, options);
                        drawBox.draw(canvasRef.current);
                    });
                }
            });
        };

        handleScreenshot();
    }, [screenshot, dispatch]);

    const getScreenshotDims = (blob) => {
        return new Promise((resolve, reject) => {
            const i = new Image();
            i.onload = () => resolve({ blobW: i.width, blobH: i.height });
            i.src = blob;
        });
    };

    const cropImage = (imgW, imgH) => {
        const css = {};
        const contW = containerRef.current.clientWidth;
        const contH = containerRef.current.clientHeight;
        const scaledW = Math.round((imgW * contH * 100) / imgH) / 100;
        const scaledH = Math.round((imgH * contW * 100) / imgW) / 100;
        const left = Math.round((contW - scaledW) * 50) / 100;
        const top = Math.round((contH - scaledH) * 50) / 100;

        if (scaledW <= contW) {
            css.preview = { width: 150, height: 150, top: 0, left: left };
            css.canvas = { top: 0, left: left };
        } else {
            css.preview = { width: 150, height: 150, top: top, left: 0 };
            css.canvas = { top: top, left: 0 };
        }
        dispatch(setStyles(css));
    };
    const activeSource = useSelector(getActiveSource)


    return (
        <>
            <div className="preview">
                {
                    screenshot && (
                        <>
                            <canvas id="preview-canvas" ref={canvasRef} style={{...styles.canvas, ...(activeSource !== 'webcam' ? { marginLeft: '-25px' } : {})}}>Your browser does not support the HTML canvas tag.</canvas>
                            <img className="" ref={previewRef} src={screenshot} alt="preview" style={{ ...styles.preview, borderRadius: '50%', ...(activeSource !== 'webcam' ? { marginLeft: '-25px' } : {}) }} />
                        </>
                    )
                }
            </div>
            <div className={`camera-overlay ${!screenshot && 'hidden'}`} />
        </>
    );
};
