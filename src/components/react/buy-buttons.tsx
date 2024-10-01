import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

interface Props {
	title: string;
	description: string;
}

export default function BuyButtons({ title, description }: Props) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="default">{title} NGOLD</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle className="text-center text-balance text-primary">
						{title} NGOLD
					</DialogTitle>
					<DialogDescription className="text-pretty">
						{description}
					</DialogDescription>
				</DialogHeader>
				<div className="flex flex-col gap-4">
					<Button
						className="bg-primary text-foreground dark:text-background transition-all ease-in-out hover:scale-105 duration-300"
						variant="link"
						asChild
					>
						<a
							href="https://dex.ngoldio.io"
							target="_blank"
							rel="noreferrer noopener"
						>
							DEX
						</a>
					</Button>
					<Button
						className="bg-primary text-foreground dark:text-background transition-all ease-in-out hover:scale-105 duration-300"
						variant="link"
						asChild
					>
						<a
							href="https://dex-p2p.ngoldio.io"
							target="_blank"
							rel="noreferrer noopener"
						>
							DEX-P2P
						</a>
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
}
