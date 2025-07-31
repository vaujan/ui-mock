import { ChevronsUpDownIcon, PlusIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";

export const NavigationSection = (): JSX.Element => {
  // Workspace data for mapping
  const workspaces = [
    {
      name: "Learn Backend JavaScript",
      isActive: true,
    },
    {
      name: "UTBK Prep.",
      isActive: false,
    },
    {
      name: "Boot.dev Course",
      isActive: false,
    },
  ];

  return (
    <aside className="flex w-[296px] h-full bg-[#0c0e12]">
      <div className="flex flex-col justify-between py-6 w-full bg-[#0c0e12] shadow-shadows-shadow-xs">
        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-col w-full">
            <div className="px-5 pb-1">
              <h3 className="font-text-xs-bold text-[#94969c] text-[length:var(--text-xs-bold-font-size)] tracking-[var(--text-xs-bold-letter-spacing)] leading-[var(--text-xs-bold-line-height)]">
                Workspaces
              </h3>
            </div>

            <div className="flex flex-col px-4 pb-5 w-full">
              {workspaces.map((workspace, index) => (
                <div key={index} className="py-0.5 w-full">
                  <Button
                    variant="ghost"
                    className={`flex items-center w-full px-3 py-2 rounded-md ${
                      workspace.isActive
                        ? "bg-[#22262f] text-[#ececed]"
                        : "bg-[#0c0e12] text-[#cecfd2]"
                    }`}
                  >
                    <span className="font-text-md-semibold text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap">
                      {workspace.name}
                    </span>
                  </Button>
                </div>
              ))}

              <Button
                variant="outline"
                size="icon"
                className="flex justify-center p-2 w-full mt-0.5 bg-[#0c0e12] rounded-lg border border-[#373a41] shadow-shadows-shadow-xs-skeuomorphic"
              >
                <PlusIcon className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <footer className="px-4 pb-4 w-full">
          <Card className="flex items-start gap-4 p-3 border-none bg-transparent rounded-xl">
            <div className="flex items-center gap-2 flex-1">
              <Avatar className="w-10 h-10 border-[0.5px] border-[#00000014]">
                <AvatarImage src="/avatar.png" alt="User avatar" />
                <AvatarFallback>FF</AvatarFallback>
              </Avatar>

              <div className="flex flex-col items-start">
                <span className="font-text-sm-semibold text-[#f7f7f7] text-[length:var(--text-sm-semibold-font-size)] tracking-[var(--text-sm-semibold-letter-spacing)] leading-[var(--text-sm-semibold-line-height)]">
                  Fauzan Feynman
                </span>
                <span className="font-text-sm-regular text-[#94969c] text-[length:var(--text-sm-regular-font-size)] tracking-[var(--text-sm-regular-letter-spacing)] leading-[var(--text-sm-regular-line-height)]">
                  ahmadojan@email.com
                </span>
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="w-8 h-8 p-1.5 rounded-md absolute top-1.5 right-4"
            >
              <ChevronsUpDownIcon className="w-5 h-5" />
            </Button>
          </Card>
        </footer>
      </div>
    </aside>
  );
};
