import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

type PortalProps = {
	children: React.ReactNode
}

type PortalReturnType = {
	openPop: () => void
	closePop: () => void
	Portal: React.FunctionComponent<PortalProps>
}

const usePortal = (): PortalReturnType => {
	const [mount, setMount] = useState<boolean>(false)
	const elementRef = useRef<HTMLDivElement | null>(null)

	const openPop = () => setMount(true)

	const closePop = () => setMount(false)

	useEffect(() => {
		elementRef.current = document.getElementById('root-portal') as HTMLDivElement
	}, [])

	const Portal = ({ children }: PortalProps) => {
		if (!(mount && elementRef.current)) return null

		return createPortal(<>{children}</>, elementRef.current)
	}

	return {
		openPop,
		closePop,
		Portal,
	}
}

export default usePortal
