import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}

export default function StatusPage() {
  const response = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  return (
    <>
      <h1>Status</h1>
      <UpdatedAt />
      <PostgresVersion />
    </>
  );
}

function UpdatedAt() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let updatedAtText = "Carregando...";
  if (!isLoading && data) {
    updatedAtText = new Date(data.updated_at).toLocaleString("pt-BR");
  }

  return <div> Última Atualização: {updatedAtText}</div>;
}

function PostgresVersion() {
  const responseBody = useSWR("/api/v1/status", fetchAPI);
  const postgresVersion = JSON.stringify(
    responseBody.data.dependencies.database.version,
  );
  const curentConnections = JSON.stringify(
    responseBody.data.dependencies.database.current_connections,
  );
  const maxConnections = JSON.stringify(
    responseBody.data.dependencies.database.max_connections,
  );

  const displayData = `Versao do Postgress: ${postgresVersion} - Conexões abertas: ${curentConnections} - Máximo de conexões: ${maxConnections}`;
  return displayData;
}
