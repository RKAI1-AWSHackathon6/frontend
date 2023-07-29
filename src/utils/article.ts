import { ArticleLabel } from "@/redux/interface";

export function sentimentToLabel(sentiment: number): ArticleLabel {
    if (sentiment === 1) 
        return ArticleLabel.Negative;
    if (sentiment === 2)
        return ArticleLabel.Positive;
    return ArticleLabel.Neutral
}