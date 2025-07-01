"use client";
import CustomizeDialog from "@/components/organisms/CustomizeDialog/CustomizeDialog";
import { useColorTheme } from "@/hooks/useColorTheme";
import { useState } from "react";

export default function Home() {
  const [customizeDialogOpen, setCustomizeDialogOpen] = useState(false);
  const { resetColors } = useColorTheme();

  return (
    <div className="bg-background-dark h-screen overflow-auto">
      <div className="h-full">
        <header className="flex px-4 py-2 border-b border-background-bluevariant w-full h-[32px] text-[12px] text-text-blue">
          <div className="flex-[0.8]">Token</div>{" "}
          <div className="flex-1 pl-3">Balance</div>
          <div className="flex-1">Amount</div>
          <div className="flex-1">Fees</div>
          <div className="flex flex-[0.5] justify-end">Actions</div>
        </header>
        <main className="text-[13px] text-text-white">
          {new Array(10).fill(0).map((_, index) => {
            const amount = (Math.random() * 10).toFixed(3);
            const positive = Math.random() > 0.5;
            const value = (Math.random() * 100).toFixed(2);
            return (
              <div
                key={index}
                className="flex hover:bg-hover-button px-4 border-b border-background-bluevariant w-full duration-200 cursor-pointer"
              >
                <div className="flex-[0.8] py-1">
                  <p className="font-medium">SOL</p>
                  <p className="text-text-blue">Solana</p>
                </div>
                <div
                  style={{
                    background: `linear-gradient(to right, var(--color-background-green-low-opacity) 0%, transparent ${Math.ceil(+value)}%)`,
                  }}
                  className={"flex-1 flex items-center pl-3 "}
                >
                  {value} SOL
                </div>
                <div
                  className={
                    (positive ? "text-text-green " : "text-text-red ") +
                    "flex-1 flex items-center"
                  }
                >
                  {amount} SOL
                </div>
                <div className="flex flex-1 items-center gap-1">
                  0.01 <span className="text-text-blue">(0.78%)</span>
                </div>
                <div className="flex flex-[0.5] justify-end items-center text-text-red">
                  <button className="p-1 rounded hover:bg-text-red/10 duration-200 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-4"
                    >
                      <path d="M3 6h18" />
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                      <line x1="10" x2="10" y1="11" y2="17" />
                      <line x1="14" x2="14" y1="11" y2="17" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </main>
        <div className="flex justify-center items-center gap-4 mt-3">
          <button
            onClick={() => setCustomizeDialogOpen(true)}
            className="bg-background-lightblue hover:brightness-110 my-3 px-4 py-1.5 rounded font-medium text-[14px] duration-200 cursor-pointer"
          >
            Customize
          </button>
          <button
            onClick={resetColors}
            className="hover:bg-hover-button my-3 px-4 py-1.5 rounded font-medium text-[14px] text-text-blue duration-200 cursor-pointer"
          >
            Reset Default
          </button>
        </div>
        <CustomizeDialog
          open={customizeDialogOpen}
          onClose={() => setCustomizeDialogOpen(false)}
        />
      </div>
    </div>
  );
}
