export interface IGitlabService {
  fetchUsers: (_gitLabUrl: string, _privateToken: string) => Promise<any>;
}
