'use client';
import * as Avatar from "@radix-ui/react-avatar";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {AppAuthGuard} from "./AppAuthGuard";

export default function Home() {
    return (
        <AppAuthGuard>
            <div
                className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
                <header
                    className="w-full flex flex-row items-center justify-between">
                    <h1 className="text-5xl font-bold">Billee</h1>
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Avatar.Root
                                className="inline-flex size-[45px] select-none items-center justify-center overflow-hidden rounded-full bg-gray-800 align-middle text-billee-background-secondary">
                                <Avatar.Fallback>
                                    M
                                </Avatar.Fallback>
                            </Avatar.Root>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Portal>
                            <DropdownMenu.Content className="bg-billee-background-secondary p-2 rounded-lg">
                                <DropdownMenu.Item>Perfil</DropdownMenu.Item>
                                <DropdownMenu.Item>Cerrar
                                    session</DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Root>
                </header>
                <main
                    className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                    <h2>Hola</h2>
                </main>
                <footer
                    className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                    <h2>Hola soy un footer</h2>
                </footer>
            </div>
        </AppAuthGuard>
    );
}
