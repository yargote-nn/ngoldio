"use client";

import { motion } from "framer-motion";

export default function RotatingCoin() {
	return (
		<div className="flex items-center justify-center h-screen bg-transparent">
			<motion.div
				animate={{ rotateY: 360 }}
				transition={{
					duration: 10,
					repeat: Number.POSITIVE_INFINITY,
					ease: "linear",
				}}
				className="w-64 h-64"
			>
				<img
					src="/assets/images/ngoldio-coin.png"
					alt="NGOLD Cryptocurrency Coin"
					width={256}
					height={256}
					className="w-full h-full object-contain"
				/>
			</motion.div>
		</div>
	);
}
