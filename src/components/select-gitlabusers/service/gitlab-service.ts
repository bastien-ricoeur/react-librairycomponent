import { IGitlabService } from "./gitlab-service.interface";

export class GitlabService implements IGitlabService {
  fetchUsers(gitLabUrl: string, privateToken: string): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        fetch(`${gitLabUrl}/api/v4/users`, {
          headers: new Headers({
            "PRIVATE-TOKEN": privateToken,
          }),
        })
          .then((response) => {
            if (response.status >= 200 && response.status < 300) {
              resolve(response.json());
            } else {
              reject(new Error("Error while fetching gitlab api"));
            }
          })
          .catch(() => reject(new Error("Error while fetching gitlab api")));
      } catch {
        reject(new Error("Error while fetching gitlab api"));
      }
    });
  }
}
