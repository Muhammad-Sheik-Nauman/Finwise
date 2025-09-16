"use client"
import React from "react"
import { Drawer } from "./ui/drawer"
import { DrawerTrigger } from "./ui/drawer"
import { DrawerContent } from "./ui/drawer"
import { DrawerHeader } from "./ui/drawer"
import { DrawerTitle } from "./ui/drawer"  
import { useState } from "react" 



const CreateAccountDrawer = ({children}) => {

const[open,setOpen]=useState(false);
  return (
    <Drawer open={open} onOpenChange={setOpen}>
  <DrawerTrigger>{children}</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
    </DrawerHeader>
  </DrawerContent>
</Drawer>
  )
}

export default CreateAccountDrawer