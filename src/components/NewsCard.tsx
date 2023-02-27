import { CardHeader, Collapse } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import LinkIcon from "@mui/icons-material/Link";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import { FC, useState } from "react";
import { Article } from "../redux/news/operations";
import moment from "moment";
import Link from "@mui/material/Link";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../redux/hooks";
import { deleteNews } from "../redux/news/newsSlice";

const DEFAULT_IMAGE = "https://source.unsplash.com/random";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const truncateString = (str: string, num: number = 16): string =>
  str.length <= num ? str : str.substring(0, num) + "...";

interface Props {
  articleData: Article;
}

export const NewsCard: FC<Props> = ({ articleData }) => {
  const { author, title, description, url, urlToImage, content, publishedAt } =
    articleData;

  const {
    i18n: { language },
  } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const dispatch = useAppDispatch();

  const handleExpandClick = () => {
    setExpanded((prevState) => !prevState);
  };
  const handleDelete = () => {
    setExpanded(false);
    dispatch(deleteNews(publishedAt));
  };

  const articleAuthor = author || "Author unknown";
  const date = moment(publishedAt).format("MMMM Do YYYY");

  const numbOfTitleSymbols = language === "ua" ? 14 : 16;
  const truncateTitle = truncateString(title, numbOfTitleSymbols) || "No title";
  const truncateDescription =
    truncateString(description, 200) || "No description";

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader title={truncateTitle} subheader={date} />
        <CardMedia
          component="img"
          height="194"
          image={urlToImage || DEFAULT_IMAGE}
          alt={title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" height={150}>
            {truncateDescription}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Link href={url} target="_blanl">
            <IconButton aria-label="share">
              <LinkIcon />
            </IconButton>
          </Link>
          <IconButton aria-label="share" onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography
              paragraph
              fontWeight={600}
              sx={{ wordWrap: "break-word" }}
            >
              {articleAuthor}
            </Typography>
            <Typography paragraph fontWeight={600}>
              {title}
            </Typography>
            <Typography paragraph>{content}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
};
