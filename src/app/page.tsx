"use client";
import CustomizeDialog from "@/components/CustomizeDialog";
import { useState } from "react";

export default function Home() {
  const [customizeDialogOpen, setCustomizeDialogOpen] = useState(false);

  return (
    <div className="bg-background-dark h-screen overflow-auto">
      <div className="h-full">
        <header className="border-background-bluevariant py-2 px-4 w-full h-[32px] flex text-[12px] text-text-blue border-b">
          <div className="flex-[0.8]">Token</div>{" "}
          <div className="flex-1 pl-3">Balance</div>
          <div className="flex-1">Amount</div>
          <div className="flex-1">Fees</div>
          <div className="flex-[0.5] flex justify-end">Actions</div>
        </header>
        <main className="text-text-white text-[13px]">
          {new Array(10).fill(0).map((_, index) => {
            const amount = (Math.random() * 10).toFixed(3);
            const positive = Math.random() > 0.5;
            const value = (Math.random() * 100).toFixed(2);
            return (
              <div className="flex cursor-pointer duration-200 border-b border-background-bluevariant px-4 w-full hover:bg-hover-button">
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
                <div className="flex-1 flex items-center gap-1">
                  0.01 <span className="text-text-blue">(0.78%)</span>
                </div>
                <div className="flex-[0.5] flex items-center text-text-red justify-end">
                  <button className="hover:bg-text-red/10 cursor-pointer duration-200 rounded p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
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
        <div className="flex gap-4 items-center justify-center mt-3">
          <button
            onClick={() => setCustomizeDialogOpen(true)}
            className="my-3 bg-background-lightblue text-[14px] font-medium hover:brightness-110 duration-200 rounded py-1.5 cursor-pointer px-4"
          >
            Customize
          </button>
          <button className="my-3 text-text-blue text-[14px] duration-200 hover:bg-hover-button font-medium rounded py-1.5 cursor-pointer px-4">
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
