const createURL = (path: string) => window.location.origin + path;

export const updateEntry = async (id: string, content: string) => {
  const res = await fetch(
    new Request(createURL(`/api/journal/${id}`), {
      method: "PATCH",
      body: JSON.stringify({ content }),
    })
  );

  if (res.ok) {
    const data = await res.json();
    return data.data;
  }
};

export const createNewEntry = async () => {
  const res = await fetch(
    new Request(createURL("/api/journal"), {
      method: "POST",
    })
  );

  if (res.ok) {
    const data = await res.json();
    return data.data;
  }
};

export const deleteEntry = async (id: string) => {
  const res = await fetch(
    new Request(createURL(`/api/journal`), {
      method: "DELETE",
      body: JSON.stringify({ id }),
    })
  );
};

export const askQuestion = async (question: string) => {
  const res = await fetch(
    new Request(createURL("/api/question"), {
      method: "POST",
      body: JSON.stringify({ question }),
    })
  );
  if (res.ok) {
    const data = await res.json();
    return data.data;
  }
};
