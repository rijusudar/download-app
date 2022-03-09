export interface LayoutWrapperProps
  extends React.HtmlHTMLAttributes<HTMLElement> {
  element:
    | "div"
    | "section"
    | "main"
    | "article"
    | "nav"
    | "ul"
    | "ol"
    | "li"
    | "header"
    | "footer";
}
