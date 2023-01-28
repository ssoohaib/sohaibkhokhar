import React from 'react'
import { Document,Page } from 'react-pdf'
import lol from './resume/resume.pdf'

export default function () {
  return (
    <iframe style={{height:'99.7vh', width:'100%'}} src={lol} frameborder="0"></iframe>
  )
}
