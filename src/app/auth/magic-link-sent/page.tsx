
export default function magicLinkSent() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="mx-auto max-w-lg space-y-8 border border-border rounded p-8">
          <h2 className="font-normal tracking-tighter text-xl">Link enviado</h2>
          <p className="text-gray-500 dark:text-gray-400 !mt-0">
            Por favor, verifique seu email para obter um link de login.
          </p>
      </div>
    </div>
  );
}
