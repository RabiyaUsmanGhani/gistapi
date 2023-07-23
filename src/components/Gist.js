import "./style.scss";
import {
  CodeIcon,
  RepoForkedIcon,
  CommentIcon,
  StarFillIcon,
  FileIcon,
} from "@primer/octicons-react";
import moment from "moment/moment";
import { Nav } from "react-bootstrap";
import { Avatar } from "@primer/react";

const Gist = ({ gist }) => {
  return (
    <div className="gist">
      <Nav className="header">
        <div className="title">
          <Avatar src={gist?.owner?.avatar_url} size={50} className="avatar" />
          <Nav.Item>
            <Nav.Link href={gist?.owner?.html_url}>
              {gist?.owner?.login}
            </Nav.Link>
          </Nav.Item>
        </div>
        <div className="d-flex">
          <Nav.Item>
            <Nav.Link href="#">
              <CodeIcon size={16} className="mr-2 font-weight-bold" />
              {Object?.keys(gist?.files)?.length} Files
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href={gist?.forks_url}>
              {" "}
              <RepoForkedIcon size={16} className="mr-2" />
              Fork
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href={gist?.comments_url}>
              <CommentIcon size={16} className="mr-2" />
              Comments
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href={gist?.owner?.starred_url}>
              <StarFillIcon size={16} className="mr-2" />
              Stars
            </Nav.Link>
          </Nav.Item>
        </div>
      </Nav>

      <div>
        <p>
          Created at: {moment(gist?.created_at).format("L")}{" "}
          <span className="ml-3">
            Last updated: {moment(gist?.updated_at).format("L")}
          </span>
        </p>
      </div>
      <h5>{gist?.description}</h5>
      <Nav>
        {Object?.keys(gist?.files)?.map((file, i) => {
          return (
            <Nav.Item key={i}>
              <Nav.Link href={gist?.files[file]?.raw_url}>
                <FileIcon size={16} className="mr-2" />
                {file}
              </Nav.Link>
            </Nav.Item>
          );
        })}
      </Nav>
    </div>
  );
};
export default Gist;
