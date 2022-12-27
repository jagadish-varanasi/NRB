export const getGithubMembersByCity = async (city) => {
  const response = await fetch(
    `https://api.github.com/search/users?q=location:${city}`
  );
  const data = await response.json();
  return data?.items;
};
