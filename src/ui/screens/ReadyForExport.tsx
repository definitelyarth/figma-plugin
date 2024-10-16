import { h } from "preact";
import { useScreenContext } from "../contexts/ScreenContext";
import Accordion from "../components/Accordion";
import CirclesIcon from "../icons/CirclesIcon";

const ReadyForExport = () => {
  const { preview } = useScreenContext();
  console.log({ preview });

  if (preview === undefined) {
    return (
      <div
        className={
          "flex flex-col w-full h-full p-2 text-black animate-pulse items-center justify-center"
        }
      >
        Loading...
      </div>
    );
  }

  return (
    <div className={"flex flex-col w-full h-full p-2"}>
      <div className={"px-2 py-1 text-sm"}>Ready For Export</div>
      <Accordion
        items={preview.map((variant, idx) => {
          return {
            content: (
              <div>
                {variant.sizes.map((size, idx) => {
                  const imageUrl = URL.createObjectURL(
                    new Blob([size.imageData], { type: "image/png" })
                  );
                  return (
                    <div
                      className={`flex items-center py-2 gap-6`}
                      style={{ borderTopWidth: `${idx !== 0 ? 1 : 0}` }}
                    >
                      <div
                        className={
                          "rounded-md bg-white flex items-center justify-center"
                        }
                        style={{
                          borderWidth: 1,
                          height: 60,
                          width: 60,
                          padding: 1,
                        }}
                      >
                        <img
                          src={imageUrl}
                          alt={size.name}
                          className={"w-full max-w-[60px]"}
                          style={{ maxWidth: 60 }}
                        />
                      </div>
                      {size.name}
                    </div>
                  );
                })}
              </div>
            ),
            Icon: <CirclesIcon />,
            title: `Variant ${idx}`,
          };
        })}
      />
    </div>
  );
};

export default ReadyForExport;
