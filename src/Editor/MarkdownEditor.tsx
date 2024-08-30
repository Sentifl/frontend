import AWS from 'aws-sdk';
import JSZip from 'jszip';
import Quill from 'quill';
import 'quill/dist/quill.bubble.css';
import React, { useEffect, useMemo, useRef } from 'react';
import { uploadTempZipToS3, uploadToS3 } from '../services/s3Service';
import * as S from './Styles/Editor.style';


AWS.config.update({
    region: process.env.REACT_APP_AWS_REGION,
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
});

interface MarkdownEditorProps {
    loadFromTempSave: boolean;
    initialDelta?: any;
    title: string;
    setTitle: (title: string) => void;
    images: Array<{ imageName: string; imageUrl: string }>;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ loadFromTempSave, initialDelta, title, setTitle, images }) => {
    const quillRef = useRef<Quill | null>(null);

    const imageHandler = async () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = async () => {
            const file = input.files ? input.files[0] : null;
            if (file) {
                try {
                    const s3Url = await uploadToS3(file);
                    const editor = quillRef.current;
                    if (editor) {
                        const range = editor.getSelection(true);
                        if (range) {
                            editor.insertEmbed(range.index, 'image', s3Url); // S3 URL 삽입
                        }
                    } else {
                        console.error('Quill editor is not initialized');
                    }
                } catch (error) {
                    console.error('Error uploading image:', error);
                }
            }
        };
    };

    const modules = useMemo(() => {
        return {
            toolbar: {
                container: [
                    [{ 'header': 2 }],
                    [{ 'header': 3 }],
                    ['bold', 'italic', 'underline', 'strike'],
                    ['link', 'image'],
                    ['clean']
                ],
                handlers: {
                    image: imageHandler
                }
            },
            imageResize: {
                displayStyles: {
                    backgroundColor: 'black',
                    border: 'none',
                    color: 'white'
                },
                modules: ['Resize', 'DisplaySize']
            },
            history: {
                delay: 500,
                maxStack: 100,
                userOnly: true,
            },
        };
    }, [imageHandler]);

    const handleTemporarySave = async () => {
        if (!quillRef.current) return;

        const editorContent = quillRef.current.getContents(); // Delta 형식으로 콘텐츠 가져오기
        const editorDelta = JSON.stringify(editorContent); // Delta 형식을 JSON으로 변환
        const zip = new JSZip();
        let imageCounter = 1;

        const jsonContent = {
            title: title,
            content: editorDelta,  // Delta 형식의 콘텐츠 포함
        };

        // JSON 형식으로 저장
        zip.file("content.json", JSON.stringify(jsonContent, null, 2));

        // 콘텐츠를 이미지 처리
        const imagePromises = editorContent.ops.map(async (op: any) => {
            if (op.insert && op.insert.image) {
                const imageUrl = op.insert.image;
                const imageExtension = imageUrl.split('.').pop();
                const imageName = `image${imageCounter++}.${imageExtension}`;  // 고유한 이미지 이름 생성

                // 이미지 URL에서 파일 데이터를 가져와 압축 파일에 추가
                const response = await fetch(imageUrl);
                const blob = await response.blob();
                zip.file(imageName, blob);
            }
        });

        await Promise.all(imagePromises);

        const zipBlob = await zip.generateAsync({ type: "blob" });

        try {
            const s3Url = await uploadTempZipToS3(new File([zipBlob], 'tempSaved.zip'));
            console.log('File uploaded to S3:', s3Url);
        } catch (error) {
            console.error('Error uploading zip file to S3:', error);
        }
    };

    useEffect(() => {
        const quill = new Quill('#editor', {
            theme: 'bubble',
            modules: modules,
        });

        quillRef.current = quill;

        if (initialDelta && quill) {
            quill.setContents(initialDelta); // Delta 형식을 Quill 에디터에 적용
        }
    }, [modules, initialDelta]);

    return (
        <S.EditorWrapper>
            <S.SaveBtn>
                <button onClick={handleTemporarySave}>임시저장</button>
            </S.SaveBtn>
            <S.Title
                type="text"
                placeholder="제목을 작성해주세요."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <S.EditorContainer>
                <S.Editor id="editor" />
            </S.EditorContainer>

        </S.EditorWrapper>
    );
};

export default MarkdownEditor;