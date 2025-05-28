import * as React from "react"
import { cn } from "@/lib/utils"

// Table Component
const Table = React.forwardRef(({ className, ...props }, ref) => (
  <div
    className={cn(
      "relative w-full overflow-x-auto", // horizontal scroll on small screens
      "rounded-md border border-border bg-background", // border & background for table container
      className
    )}
  >
    <table
      ref={ref}
      className={cn(
        "w-full min-w-[600px] caption-bottom text-sm", // min-width ensures table doesn't shrink too small
        className
      )}
      {...props}
    />
  </div>
))
Table.displayName = "Table"

// TableHeader Component
const TableHeader = React.forwardRef(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
))
TableHeader.displayName = "TableHeader"

// TableBody Component
const TableBody = React.forwardRef(({ className, children, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  >
    {React.Children.toArray(children).filter(React.isValidElement)}
  </tbody>
))
TableBody.displayName = "TableBody"

// TableFooter Component
const TableFooter = React.forwardRef(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
))
TableFooter.displayName = "TableFooter"

// TableRow Component
const TableRow = React.forwardRef(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  />
))
TableRow.displayName = "TableRow"

// TableHead Component
const TableHead = React.forwardRef(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "whitespace-nowrap h-12 px-4 text-left align-middle font-medium text-muted-foreground",
      "[&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
))
TableHead.displayName = "TableHead"

// TableCell Component
const TableCell = React.forwardRef(({ className, children, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "whitespace-normal p-4 align-middle",
      "[&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  >
    {children}
  </td>
))
TableCell.displayName = "TableCell"

// TableCaption Component
const TableCaption = React.forwardRef(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground text-center", className)}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
