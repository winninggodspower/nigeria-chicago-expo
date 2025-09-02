"use client"

import { useState, useEffect } from "react"

export function useModal() {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  useEffect(() => {
    if (showModal) {
      // Add the iframe to the DOM when modal should be shown
      const existingIframe = document.getElementById("popup-fnCAT2RCQRSSkWKVpdxz")
      if (!existingIframe) {
        const iframe = document.createElement("iframe")
        iframe.src = "https://links.chicagonigerians.com/widget/form/fnCAT2RCQRSSkWKVpdxz"
        iframe.style.display = "none"
        iframe.style.width = "100%"
        iframe.style.height = "100%"
        iframe.style.border = "none"
        iframe.style.borderRadius = "3px"
        iframe.id = "popup-fnCAT2RCQRSSkWKVpdxz"
        iframe.setAttribute("data-layout", '{"id":"POPUP"}')
        iframe.setAttribute("data-trigger-type", "alwaysShow")
        iframe.setAttribute("data-trigger-value", "")
        iframe.setAttribute("data-activation-type", "alwaysActivated")
        iframe.setAttribute("data-activation-value", "")
        iframe.setAttribute("data-deactivation-type", "neverDeactivate")
        iframe.setAttribute("data-deactivation-value", "")
        iframe.setAttribute("data-form-name", "NACR Contact/Join Form")
        iframe.setAttribute("data-height", "640")
        iframe.setAttribute("data-layout-iframe-id", "popup-fnCAT2RCQRSSkWKVpdxz")
        iframe.setAttribute("data-form-id", "fnCAT2RCQRSSkWKVpdxz")
        iframe.title = "NACR Contact/Join Form"

        document.body.appendChild(iframe)
      }
    } else {
      // Remove the iframe when modal should be hidden
      const existingIframe = document.getElementById("popup-fnCAT2RCQRSSkWKVpdxz")
      if (existingIframe) {
        existingIframe.remove()
      }
    }

    // Cleanup function
    return () => {
      if (!showModal) {
        const existingIframe = document.getElementById("popup-fnCAT2RCQRSSkWKVpdxz")
        if (existingIframe) {
          existingIframe.remove()
        }
      }
    }
  }, [showModal])

  return {
    showModal,
    openModal,
    closeModal,
  }
}
