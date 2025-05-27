'use client';

export enum ChannelType {
  CATEGORY,
  TEXT,
  AUDIO,
}
import {
  generateUploadButton,
  generateUploadDropzone,
} from '@uploadthing/react';
import type { OurFileRouter } from '@/app/api/uploadthing/core';

export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
