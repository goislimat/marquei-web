import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Plus } from "@/components/ui/icons";

export default function ScheduleDrawer() {
  return (
    <Drawer>
      <DrawerTrigger>
        <Button
          variant="outline"
          className="flex items-center gap-1 rounded-full"
        >
          <Plus />
          <p className="text-indigo-950 font-bold text-xs">Agendar</p>
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            Esse é o placeholder do botão de agendamento.
          </DrawerTitle>
          <DrawerDescription>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            recusandae ipsum facilis placeat explicabo illum quia quibusdam
            fuga! Possimus quam sunt saepe exercitationem voluptatum molestias
            praesentium in aliquid, minima laboriosam!
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button className="bg-indigo-950">Agendar</Button>
          <DrawerClose>
            <Button variant="outline">Cancelar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
