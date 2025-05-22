export default async function Group({
  params,
}: {
  params: Promise<{ group: string }>;
}) {
  const { group } = await params;
  return <div>Viewing group: {group}</div>;
}
