"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ComponentsDemo() {
	return (
		<div className="p-6 max-w-3xl mx-auto space-y-8">
			<h1 className="text-3xl font-bold text-green-600">
				🎨 ShadCN UI Showcase
			</h1>

			<Card>
				<CardHeader>
					<CardTitle>Inputs & Controls</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<div>
						<Label htmlFor="input">Input</Label>
						<Input id="input" placeholder="Type here..." />
					</div>

					<div>
						<Label htmlFor="textarea">Textarea</Label>
						<Textarea id="textarea" placeholder="Write something..." />
					</div>

					<div className="flex items-center space-x-2">
						<Checkbox id="check" />
						<Label htmlFor="check">Check me</Label>
					</div>

					<div className="flex items-center space-x-2">
						<Switch id="switch" />
						<Label htmlFor="switch">Toggle me</Label>
					</div>

					<div>
						<Label>Select</Label>
						<Select>
							<SelectTrigger>
								<SelectValue placeholder="Choose one" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="one">One</SelectItem>
								<SelectItem value="two">Two</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<RadioGroup defaultValue="option-1">
						<div className="flex items-center space-x-2">
							<RadioGroupItem value="option-1" id="r1" />
							<Label htmlFor="r1">Option 1</Label>
						</div>
						<div className="flex items-center space-x-2">
							<RadioGroupItem value="option-2" id="r2" />
							<Label htmlFor="r2">Option 2</Label>
						</div>
					</RadioGroup>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Buttons, Badges & Tabs</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="space-x-2">
						<Button>Primary</Button>
						<Button variant="outline">Outline</Button>
						<Button variant="ghost">Ghost</Button>
						<Button variant="destructive">Destructive</Button>
					</div>

					<div className="space-x-2">
						<Badge>Default</Badge>
						<Badge variant="outline">Outline</Badge>
					</div>

					<Tabs defaultValue="tab1">
						<TabsList>
							<TabsTrigger value="tab1">Tab 1</TabsTrigger>
							<TabsTrigger value="tab2">Tab 2</TabsTrigger>
						</TabsList>
						<TabsContent value="tab1">This is Tab 1</TabsContent>
						<TabsContent value="tab2">This is Tab 2</TabsContent>
					</Tabs>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Modals & Side Panels</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<Dialog>
						<DialogTrigger asChild>
							<Button>Open Dialog</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogTitle>Dialog Title</DialogTitle>
							<DialogDescription>This is a simple dialog.</DialogDescription>
							<DialogFooter>
								<DialogClose asChild>
									<Button type="button" variant="secondary">
										Close
									</Button>
								</DialogClose>
							</DialogFooter>
						</DialogContent>
					</Dialog>

					<Sheet>
						<SheetTrigger asChild>
							<Button variant="outline">Open Sheet</Button>
						</SheetTrigger>
						<SheetContent>
							<SheetHeader>
								<SheetTitle>Sheet Title</SheetTitle>
								<SheetDescription>This is a sliding sheet.</SheetDescription>
							</SheetHeader>
						</SheetContent>
					</Sheet>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Other Elements</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<Tooltip>
						<TooltipTrigger asChild>
							<Button variant="outline">Hover me</Button>
						</TooltipTrigger>
						<TooltipContent>
							<p>I am a tooltip 👋</p>
						</TooltipContent>
					</Tooltip>

					<Alert>
						<AlertTitle>Heads up!</AlertTitle>
						<AlertDescription>This is an alert message.</AlertDescription>
					</Alert>

					<Avatar>
						<AvatarImage src="https://github.com/luizvidal.png" />
						<AvatarFallback>LV</AvatarFallback>
					</Avatar>

					<Separator />
					<p className="text-muted-foreground text-sm">
						All components rendered with{" "}
						<span className="font-medium">rose theme</span> and{" "}
						<span className="font-medium">rounded-md</span>.
					</p>
				</CardContent>
			</Card>
		</div>
	);
}
