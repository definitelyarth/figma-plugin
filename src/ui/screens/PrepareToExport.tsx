import { h } from "preact";
import Table from "../icons/Table";
import { Button } from "../components/Button";
import ExternalIcon from "../icons/ExternalIcon";

const PrepareToExport = () => {
  return (
    <div className={"flex flex-col min-h-full h-screen"}>
      <div className="flex flex-col gap-3 items-center justify-center self-center h-full">
        <div className={"rounded-lg p-4 bg-lightestGray w-fit"}>
          <Table />
        </div>
        <h1 className={"text-sm font-semibold"}>
          Select one or multiple object to get started
        </h1>
        <p
          className={"text-lightGray text-xs font-light text-center leading-5"}
        >
          The optimal outcome can be achieved by selecting <br />
          one key visual at a time.
        </p>
      </div>
      <div
        className={
          "flex justify-between bottom-0 absolute border-t w-screen left-0 p-4 items-center"
        }
      >
        <a
          href=""
          className={"text-brand flex gap-1 items-center font-semibold"}
        >
          <ExternalIcon />
          Guidelines for export Rktm
        </a>
        <Button>Prepare for Export</Button>
      </div>
    </div>
  );
};

export default PrepareToExport;
