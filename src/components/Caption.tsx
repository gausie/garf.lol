import * as React from "react";

type Props = {
  author: string;
  date: string;
  html: string;
};

export default function Caption({ author, date, html }: Props) {
  return (
    <div>
      <p>
        By <b>{author}</b> dated <i>{date}</i>
      </p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
