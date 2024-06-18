import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface PostCardProps {
    title: string;
    time: string;
    content: string;
}

export default function PostCard({ title, time, content }: PostCardProps) {
    return (
        <Card className="max-w-xl">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{time}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{content}</p>
            </CardContent>
        </Card>
    );
}