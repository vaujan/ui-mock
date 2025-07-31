import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../../../components/ui/tabs";
import { Input } from "../../../../components/ui/input";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";
import { Select, SelectTrigger, SelectContent, SelectItem } from "../../../../components/ui/select";
import { Separator } from "../../../../components/ui/separator";
import { LockIcon, PlusIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, PlayIcon, SlidersVerticalIcon, TrashIcon, PencilIcon, LinkIcon, YoutubeIcon } from "lucide-react";

export const DashboardSection = (): JSX.Element => {
  // Data for the months in the chart
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  // Data for the y-axis values in the chart
  const yAxisValues = [300, 240, 180, 120, 60, 0];
  
  // Data for the task lists
  const todoLists = [
    {
      title: "To do",
      tasks: [
        { text: "Optimize mongoDB", hasDelete: true },
        { text: "Implement error handling middleware", hasDelete: false },
        { text: "Learn math 1", isInput: true }
      ],
      bgColor: "bg-[#12151b]",
      textColor: "text-[#ececed]"
    },
    {
      title: "To do",
      tasks: [
        { text: "Optimize mongoDB", hasDelete: true },
        { text: "Implement error handling middleware", hasDelete: false },
        { text: "Learn math 1", isInput: true }
      ],
      bgColor: "bg-[#12151b]",
      textColor: "text-[#ececed]"
    },
    {
      title: "On Progress",
      tasks: [
        { text: "Create API endpoint for CRUD", hasDelete: false },
        { text: "HTTP request tesing", hasEdit: true }
      ],
      bgColor: "bg-[#12151b]",
      textColor: "text-[#ececed]"
    },
    {
      title: "On Progress",
      tasks: [
        { text: "Create API endpoint for CRUD", hasDelete: false },
        { text: "HTTP request tesing", hasEdit: true }
      ],
      bgColor: "bg-[#12151b]",
      textColor: "text-[#ececed]"
    },
    {
      title: "Testing",
      tasks: [
        { text: "Install postman", hasDelete: false }
      ],
      bgColor: "bg-[#47104c]",
      textColor: "text-[#f9a7df]"
    },
    {
      title: "Completed",
      tasks: [
        { text: "Install postman", hasDelete: false }
      ],
      bgColor: "bg-[#4e0d30]",
      textColor: "text-[#f9a7df]"
    },
    {
      title: "Ice box",
      tasks: [
        { text: "Optimize mongoDB queries", hasDelete: false },
        { text: "Implement error handling middleware", hasEdit: true }
      ],
      bgColor: "bg-[#12151b]",
      textColor: "text-[#ececed]"
    },
    {
      title: "Ice box",
      tasks: [
        { text: "Optimize mongoDB queries", hasDelete: false },
        { text: "Implement error handling middleware", hasEdit: true }
      ],
      bgColor: "bg-[#12151b]",
      textColor: "text-[#ececed]"
    }
  ];

  // Data for resources
  const resources = [
    {
      title: "JavaScript | MDN",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      icon: "link"
    },
    {
      title: "Back End Development and APIs",
      url: "https://www.freecodecamp.org/learn/back-end-development-and-apis/",
      icon: "link"
    },
    {
      title: "JavaScript Essentials Course – Foundational JS Skills for New Developers Tutorial",
      url: "https://www.youtube.com/watch?v=876aSEUA_8c&pp=ygUKamF2YXNjcmlwdA%3D%3D",
      icon: "youtube"
    },
    {
      title: "Refresh Token Rotation and Reuse Detection in Node.js JWT Authentication",
      url: "https://www.youtube.com/watch?v=s-4k5TcGKHg",
      icon: "youtube"
    }
  ];

  return (
    <div className="flex flex-col items-start gap-8 pt-8 pb-12 px-0 relative flex-1 self-stretch grow z-0 bg-[#0c0e12] rounded-[40px_0px_0px_0px] overflow-hidden overflow-y-scroll">
{/* Header section */}
      <div className="flex flex-col items-start gap-4 px-8 py-0 relative self-stretch w-full">
<div className="flex-wrap items-center gap-[20px_16px] self-stretch w-full flex relative">
<div className="flex min-w-80 gap-1 flex-1 grow flex-col items-start relative">
<div className="relative self-stretch mt-[-1.00px] font-text-lg-semibold text-[#f7f7f7] text-[length:var(--text-lg-semibold-font-size)] tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)]">
Learn Backend JavaScript
            </div>
</div>
<div className="inline-flex gap-3 items-center relative">
<div className="inline-flex justify-center p-2.5 rounded-lg items-center relative overflow-hidden">
<LockIcon className="w-5 h-5 text-white" />
</div>
<Button variant="outline" className="bg-[#0c0e12] border-[#373a41] shadow-shadows-shadow-xs-skeuomorphic">
<PlusIcon className="w-5 h-5 mr-1" />
<span className="font-text-sm-semibold text-[#cecfd2]">Add Widget</span>
</Button>
</div>
</div>
</div>
{/* Main content section */}
      <div className="flex-col items-start gap-6 z-0 flex relative self-stretch w-full">
{/* First row with timer and chart */}
        <div className="flex items-start gap-5 px-8 py-0 relative self-stretch w-full">
{/* Timer widget */}
          <Card className="w-[332px] border-[#22262f] bg-transparent p-3 rounded-xl">
<CardContent className="p-0 space-y-4">
<Tabs defaultValue="focus" className="w-full">
<TabsList className="w-full bg-[#0c0e12] rounded-[10px]">
<TabsTrigger 
                    value="focus" 
                    className="flex-1 data-[state=active]:bg-[#12151b] data-[state=active]:text-[#cecfd2] data-[state=inactive]:text-[#94969c] rounded-md"
                  >
Focus
                  </TabsTrigger>
<TabsTrigger 
                    value="rest" 
                    className="flex-1 data-[state=active]:bg-[#12151b] data-[state=active]:text-[#cecfd2] data-[state=inactive]:text-[#94969c] rounded-md"
                  >
Rest
                  </TabsTrigger>
</TabsList>
<div className="absolute right-0 top-0">
<Button variant="ghost" size="icon" className="rounded-lg">
<SlidersVerticalIcon className="w-5 h-5" />
</Button>
</div>
</Tabs>
<div className="h-[220px] flex items-center justify-center px-16 py-5 relative">
<div className="inline-flex flex-col items-center">
<div className="self-stretch font-display-xs-semibold text-[#f7f7f7] text-center">
25
                  </div>
<div className="self-stretch font-text-xs-medium text-[#94969c] text-center">
MINUTES
                  </div>
</div>
<img
                  className="absolute w-[180px] h-[180px] top-5 left-16"
                  alt="Timer progress"
                  src="/ellipse-1.svg"
                />
</div>
<Button className="w-full h-14 bg-[#12151b] rounded-lg shadow-shadows-shadow-xs-skeuomorphic">
<PlayIcon className="w-5 h-5 mr-1.5" />
<span className="font-text-md-semibold text-[#cecfd2]">Start Session</span>
</Button>
</CardContent>
</Card>
{/* Chart widget */}
          <Card className="h-[372px] bg-[#12151b] border-[#22262f] flex-1 rounded-xl p-1.5">
<CardContent className="p-0 flex flex-col h-full">
<div className="flex items-center justify-between w-full">
<div className="px-1 py-0 flex-1">
<div className="font-text-sm-semibold text-[#cecfd2]">
Active Minutes
                  </div>
</div>
<Select defaultValue="12months">
<SelectTrigger className="w-auto bg-[#0c0e12] rounded-md shadow-shadows-shadow-xs-skeuomorphic">
<span className="font-text-xs-semibold text-[#cecfd2]">12 months</span>
</SelectTrigger>
<SelectContent>
<SelectItem value="12months">12 months</SelectItem>
<SelectItem value="6months">6 months</SelectItem>
<SelectItem value="3months">3 months</SelectItem>
</SelectContent>
</Select>
</div>
<ScrollArea className="flex-1 self-stretch w-full bg-[#0c0e12] rounded-lg mt-2 px-3 py-4">
<div className="relative flex-1 self-stretch min-w-[800px]">
<div className="flex w-[800px] h-[266px] items-start gap-1">
<div className="flex-col items-start flex-1 self-stretch grow flex relative">
<div className="flex flex-col items-start justify-between relative flex-1 self-stretch w-full grow">
{yAxisValues.map((value, index) => (
                          <div key={`y-axis-${index}`} className="flex h-[22px] items-center gap-2 relative self-stretch w-full">
<div className="w-10 font-text-xs-regular text-[#94969c] text-right">
{value}
                            </div>
<div className="relative flex-1 grow h-px">
<img
                                className="absolute w-[752px] h-px top-px left-0 object-cover"
                                alt="Divider"
                                src="/divider.svg"
                              />
</div>
</div>
))}
                      </div>
<div className="flex items-center justify-between pl-16 pr-6 py-0 relative self-stretch w-full">
{months.map((month, index) => (
                          <div key={`month-${index}`} className="font-text-xs-regular text-[#94969c] text-center whitespace-nowrap">
{month}
                          </div>
))}
                      </div>
<div className="absolute w-[752px] h-[214px] top-0 left-12">
<div className="relative h-[189px] top-[25px] bg-[url(/series-1.png)] bg-[100%_100%]">
<img
                            className="absolute w-[752px] h-[52px] top-20 left-0"
                            alt="Series"
                            src="/series-2.png"
                          />
</div>
</div>
</div>
</div>
</div>
<ScrollBar orientation="horizontal" className="h-2" />
</ScrollArea>
</CardContent>
</Card>
</div>
{/* Task board section */}
        <div className="flex-col items-start justify-center gap-6 flex relative self-stretch w-full">
<div className="flex flex-col items-start justify-center gap-6 px-8 py-0 relative self-stretch w-full">
<Card className="border-[#22262f] bg-transparent p-3 rounded-xl w-full">
<CardContent className="p-0 space-y-4">
<div className="flex items-center justify-between w-full">
<Button variant="outline" className="bg-[#0c0e12] border-[#373a41] shadow-shadows-shadow-xs-skeuomorphic">
<PlusIcon className="w-5 h-5 mr-1" />
<span className="font-text-sm-semibold text-[#cecfd2]">Add List</span>
</Button>
<Button variant="ghost" size="icon" className="rounded-lg">
<SlidersVerticalIcon className="w-5 h-5" />
</Button>
</div>
<ScrollArea className="w-full" orientation="horizontal">
<div className="flex items-center gap-4">
{todoLists.map((list, listIndex) => (
                      <div 
                        key={`list-${listIndex}`} 
                        className={`flex flex-col w-[300px] items-start gap-3 p-2 relative ${list.bgColor} rounded-lg`}
                      >
<div className="flex items-center justify-between w-full">
<div className="flex items-center justify-center gap-2.5 p-1 flex-1">
<div className={`flex-1 font-text-sm-medium ${list.textColor}`}>
{list.title}
                            </div>
</div>
<div className="inline-flex items-center gap-0.5">
<Button variant="ghost" size="icon" className="h-8 w-8 p-1.5 rounded-md">
<SlidersVerticalIcon className="w-4 h-4" />
</Button>
</div>
</div>
{list.tasks.map((task, taskIndex) => (
                          task.isInput ? (
                            <div key={`task-input-${listIndex}-${taskIndex}`} className="gap-1.5 flex flex-col items-start relative self-stretch w-full">
<Input 
                                className="bg-[#0c0e12] border-[#373a41] rounded-lg text-[#85888e] font-text-sm-regular"
                                defaultValue={task.text}
                              />
<div className="flex gap-0.5 self-stretch w-full items-center">
<Button size="sm" className="bg-[#155dee] text-white rounded-md">
<span className="font-text-xs-semibold">Add Card</span>
</Button>
<Button variant="ghost" size="sm" className="text-[#94969c]">
<span className="font-text-xs-semibold">Cancel</span>
</Button>
</div>
</div>
) : (
                            <div 
                              key={`task-${listIndex}-${taskIndex}`} 
                              className="flex items-start gap-2.5 p-2.5 relative self-stretch w-full bg-[#0c0e12] rounded-md"
                            >
<div className="flex-1 font-text-sm-medium text-[#cecfd2]">
{task.text}
                              </div>
{task.hasDelete && (
                                <div className="w-6 h-6 bg-[#22262f] rounded flex items-center justify-center p-1.5 relative">
<TrashIcon className="w-4 h-4" />
</div>
)}
                              {task.hasEdit && (
                                <Button variant="ghost" size="icon" className="h-8 w-8 p-1.5">
<PencilIcon className="w-4 h-4" />
</Button>
)}
                            </div>
)
                        ))}

                        {!list.tasks.some(t => t.isInput) && (
                          <Button 
                            variant={list.bgColor === "bg-[#12151b]" ? "secondary" : "ghost"}
                            className={`gap-1 w-full justify-start ${list.bgColor === "bg-[#12151b]" ? "bg-[#22262f]" : ""}`}
                          >
<PlusIcon className="w-5 h-5" />
<span className={`font-text-xs-semibold ${list.bgColor === "bg-[#12151b]" ? "text-[#cecfd2]" : "text-[#94969c]"}`}>
Add Card
                            </span>
</Button>
)}
                      </div>
))}
                  </div>
<ScrollBar orientation="horizontal" className="h-2" />
<ScrollBar orientation="horizontal" className="h-2" />
</ScrollArea>
</CardContent>
</Card>
</div>
</div>
{/* Bottom row with quote, resources, and scratch pad */}
        <div className="flex items-start gap-5 px-8 py-0 relative self-stretch w-full">
{/* Quote widget */}
          <Card className="flex-1 bg-[#12151b] rounded-xl p-1.5">
<CardContent className="p-0 flex flex-col h-full">
<div className="flex items-center justify-between w-full">
<div className="inline-flex gap-1">
<Button variant="ghost" size="icon" className="bg-[#0c0e12] rounded-md shadow-shadows-shadow-xs-skeuomorphic">
<ChevronLeftIcon className="w-5 h-5" />
</Button>
<Button variant="ghost" size="icon" className="bg-[#0c0e12] rounded-md shadow-shadows-shadow-xs-skeuomorphic">
<ChevronRightIcon className="w-5 h-5" />
</Button>
</div>
<Button variant="ghost" size="icon" className="rounded-lg">
<SlidersVerticalIcon className="w-5 h-5" />
</Button>
</div>
<div className="flex flex-col items-start justify-end gap-2.5 px-3 py-4 mt-2 bg-[#0c0e12] rounded-lg">
<div className="h-[216px] gap-3 flex flex-col items-start">
<p className="self-stretch [font-family:'EB_Garamond',Helvetica] font-medium text-white text-xl tracking-[0] leading-8 italic">
You become what you give your attention.
                  </p>
<p className="self-stretch [font-family:'EB_Garamond',Helvetica] font-medium text-white text-xl tracking-[0] leading-8 italic">
If you yourself don&apos;t choose what thoughts and images you expose yourself to,
                  </p>
<p className="self-stretch [font-family:'EB_Garamond',Helvetica] font-medium text-white text-xl tracking-[0] leading-8 italic">
someone else will.
                  </p>
</div>
<div className="self-stretch font-text-xs-medium text-[#94969c]">
STOIC LAW OF DISCIPLINE
                </div>
</div>
</CardContent>
</Card>
{/* Resources widget */}
          <Card className="flex-1 bg-[#22262f] rounded-xl p-1.5">
<CardContent className="p-0 flex flex-col h-full">
<div className="flex items-center justify-between w-full">
<div className="px-1 py-0 flex-1">
<div className="font-text-sm-semibold text-[#cecfd2]">
Resources
                  </div>
</div>
<div className="flex items-center gap-2">
<Button variant="ghost" size="icon" className="rounded-lg">
<SlidersVerticalIcon className="w-5 h-5" />
</Button>
<Button variant="ghost" size="icon" className="rounded-lg">
<PlusIcon className="w-5 h-5" />
</Button>
</div>
</div>
<div className="flex items-center justify-between flex-1 self-stretch w-full mt-2">
<ScrollArea className="flex-1 self-stretch bg-[#12151b] rounded-[10px] p-1.5 h-[340px]">
{[...resources, ...resources].map((resource, index) => (
                    <div key={`resource-${index}`} className="flex items-start p-4 rounded-lg">
<div className="flex items-center gap-3 flex-1">
<div className="w-10 h-10 bg-[#22262f] rounded-lg flex items-center justify-center">
{resource.icon === "youtube" ? (
                            <YoutubeIcon className="w-5 h-5" />
) : (
                            <LinkIcon className="w-5 h-5" />
)}
                        </div>
<div className="flex flex-col gap-1 flex-1">
<div className="font-text-sm-medium text-[#cecfd2]">
{resource.title}
                          </div>
<div className="font-text-sm-regular text-[#94969c]">
{resource.url}
                          </div>
</div>
</div>
</div>
))}
                </ScrollArea>
</div>
</CardContent>
</Card>
{/* Scratch Pad widget */}
          <Card className="flex-1 bg-[#101222] rounded-xl p-1.5 shadow-shadows-shadow-xs">
<CardContent className="p-0 flex flex-col h-full">
<div className="flex items-center justify-between w-full">
<div className="px-1 py-0 flex-1">
<div className="font-text-sm-semibold text-[#b2b8db]">
Scratch Pad
                  </div>
</div>
<div className="flex items-center gap-2">
<Button variant="ghost" size="icon" className="rounded-lg">
<SlidersVerticalIcon className="w-5 h-5" />
</Button>
<Button variant="ghost" size="icon" className="rounded-lg">
<PlusIcon className="w-5 h-5" />
</Button>
</div>
</div>
<div className="flex items-start self-stretch w-full mt-2">
<ScrollArea className="flex-1 max-h-[340px] bg-[#0d0f1b] rounded-lg p-2">
<div className="text-[#f7f7f7] font-text-sm-regular whitespace-nowrap">
env for base
                  </div>
<div className="flex items-center gap-2.5 p-3 mt-3 bg-[#101222] rounded-lg">
<div className="w-full gap-px flex flex-col items-start">
<div className="self-stretch [font-family:'JetBrains_Mono',Helvetica] font-normal text-xs leading-5">
<span className="text-[#f570c7]">
PUBLIC_TESTONLOCAL_PROJECT_ID=
                        </span>
<span className="text-[#f7f7f7]">
&#34;2zkz7bpd&#34;
                        </span>
</div>
<div className="self-stretch [font-family:'JetBrains_Mono',Helvetica] font-normal text-xs leading-5">
<span className="text-[#f570c7]">
PUBLIC_TESTONLOCAL_DATASET=
                        </span>
<span className="text-[#f7f7f7]">&#34;test&#34;</span>
</div>
</div>
</div>
<div className="text-[#f7f7f7] font-text-sm-regular whitespace-nowrap mt-3">
simple snippet for schema
                  </div>
<div className="flex items-center gap-2.5 p-3 mt-3 bg-[#101222] rounded-lg">
<div className="w-full gap-px flex flex-col items-start">
<div className="self-stretch [font-family:'JetBrains_Mono',Helvetica] font-normal text-xs leading-5">
<span className="text-[#47cd89]">
// Schema
                        </span>
</div>
<div className="self-stretch [font-family:'JetBrains_Mono',Helvetica] font-normal text-xs leading-5">
<span className="text-[#f570c7]">const</span>
<span className="text-[#f7f7f7]">&nbsp;</span>
<span className="text-[#53b0fd]">schema</span>
<span className="text-[#f7f7f7]"> = </span>
<span className="text-[#f570c7]">new</span>
<span className="text-[#f7f7f7]"> Schema({"{"}</span>
</div>
<div className="self-stretch [font-family:'JetBrains_Mono',Helvetica] font-normal text-xs leading-5">
<span className="text-[#f7f7f7]">&nbsp;&nbsp;</span>
<span className="text-[#53b0fd]">name</span>
<span className="text-[#f7f7f7]">: {"{"}</span>
</div>
<div className="self-stretch [font-family:'JetBrains_Mono',Helvetica] font-normal text-xs leading-5">
<span className="text-[#f7f7f7]">&nbsp;&nbsp;&nbsp;&nbsp;</span>
<span className="text-[#53b0fd]">type</span>
<span className="text-[#f7f7f7]">: String,</span>
</div>
<div className="self-stretch [font-family:'JetBrains_Mono',Helvetica] font-normal text-xs leading-5">
<span className="text-[#f7f7f7]">&nbsp;&nbsp;&nbsp;&nbsp;</span>
<span className="text-[#53b0fd]">required</span>
<span className="text-[#f7f7f7]">: true</span>
</div>
<div className="self-stretch [font-family:'JetBrains_Mono',Helvetica] font-normal text-xs leading-5">
<span className="text-[#f7f7f7]">&nbsp;&nbsp;{"}"},</span>
</div>
<div className="self-stretch [font-family:'JetBrains_Mono',Helvetica] font-normal text-xs leading-5">
<span className="text-[#f7f7f7]">&nbsp;&nbsp;</span>
<span className="text-[#53b0fd]">description</span>
<span className="text-[#f7f7f7]">: {"{"}</span>
</div>
<div className="self-stretch [font-family:'JetBrains_Mono',Helvetica] font-normal text-xs leading-5">
<span className="text-[#f7f7f7]">&nbsp;&nbsp;&nbsp;&nbsp;</span>
<span className="text-[#53b0fd]">type</span>
<span className="text-[#f7f7f7]">: String</span>
</div>
<div className="self-stretch [font-family:'JetBrains_Mono',Helvetica] font-normal text-xs leading-5">
<span className="text-[#f7f7f7]">&nbsp;&nbsp;{"}"}</span>
</div>
<div className="self-stretch [font-family:'JetBrains_Mono',Helvetica] font-normal text-xs leading-5">
<span className="text-[#f7f7f7]">{"}"}, {"{"}</span>
<span className="text-[#53b0fd]">timestamps</span>
<span className="text-[#f7f7f7]">: true{"}"})</span>
                      </div>
<div className="self-stretch [font-family:'JetBrains_Mono',Helvetica] font-normal text-xs leading-5">
<span className="text-[#47cd89]"><br /></span>
</div>
<div className="self-stretch [font-family:'JetBrains_Mono',Helvetica] font-normal text-xs leading-5">
<span className="text-[#47cd89]">// Model</span>
</div>
<div className="self-stretch [font-family:'JetBrains_Mono',Helvetica] font-normal text-xs leading-5">
<span className="text-[#f570c7]">export default</span>
<span className="text-[#f7f7f7]"> untitled.model(</span>
<span className="text-[#53b0fd]">collection</span>
<span className="text-[#f7f7f7]">, </span>
<span className="text-[#53b0fd]">schema</span>
<span className="text-[#f7f7f7]">, </span>
<span className="text-[#53b0fd]">collection</span>
<span className="text-[#f7f7f7]">)</span>
</div>
</div>
</div>
</ScrollArea>
</div>
</CardContent>
</Card>
</div>
</div>
</div>
);
};