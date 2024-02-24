export default function Page() {
  return (
    <main>
      <section className="m-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Adatok
        </h1>
        <div className="my-6 w-full overflow-y-auto">
          <table className="w-full">
            <tbody>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Cégnév
                </td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  MIMA-LAK KFT
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Kapcsolat 1
                </td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  06209818024
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Kapcsolat 2
                </td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  06702758557
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Email
                </td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  mimalak.kft@gmail.com
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
