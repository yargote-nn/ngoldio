import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface Props {
	children: React.ReactNode;
	title: string;
}

export default function ButtonWithDialog({ children, title }: Props) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="default">{title} NGOLD</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<div className="grid gap-4 py-4">{children}</div>
			</DialogContent>
		</Dialog>
	);
}
