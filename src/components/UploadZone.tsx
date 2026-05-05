import React, { useCallback, useState } from 'react';
import { UploadCloud, FileVideo } from 'lucide-react';

interface UploadZoneProps {
  onUpload: (file: File) => void;
}

export function UploadZone({ onUpload }: UploadZoneProps) {
  const [isDragActive, setIsDragActive] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragActive(true);
    } else if (e.type === 'dragleave') {
      setIsDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('video/')) {
        onUpload(file);
      } else {
        alert('Please upload a valid video file.');
      }
    }
  }, [onUpload]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      onUpload(e.target.files[0]);
    }
  }, [onUpload]);

  return (
    <div 
      className={`glass-panel upload-zone ${isDragActive ? 'drag-active' : ''}`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      onClick={() => document.getElementById('file-upload')?.click()}
    >
      <input
        id="file-upload"
        type="file"
        accept="video/*"
        className="file-input"
        onChange={handleChange}
      />
      
      <div className="upload-content">
        <div className="upload-icon-wrapper">
          {isDragActive ? <FileVideo size={32} /> : <UploadCloud size={32} />}
        </div>
        <h3 className="upload-title text-gradient">
          {isDragActive ? 'Drop your video here' : 'Click or drag video to upload'}
        </h3>
        <p className="upload-subtitle">
          MP4, WebM, or OGG (Max 500MB)
        </p>
      </div>
    </div>
  );
}
