import { IGitlabService } from '../gitlab-service.interface';

export class DefaultMockService implements IGitlabService {
  fetchUsers(_gitLabUrl: string, _privateToken: string): Promise<any> {
    return new Promise((resolve) => {
      const users = [
        { name: 'User 1', id: 1, avatar_url: 'user1.img' },
        { name: 'User 2', id: 2, avatar_url: 'user2.img' },
      ];
      resolve(users);
    });
  }
}

export class ErrorMockService implements IGitlabService {
  fetchUsers(_gitLabUrl: string, _privateToken: string): Promise<any> {
    return new Promise((_resolve, reject) => {
      reject(new Error('Error'));
    });
  }
}

export class DelayMockService implements IGitlabService {
  async fetchUsers(_gitLabUrl: string, _privateToken: string): Promise<any> {
    await new Promise((r) => setTimeout(r, 2000));
    return new Promise((resolve) => {
      const users = [
        { name: 'User 1', id: 1, avatar_url: 'user1.img' },
        { name: 'User 2', id: 2, avatar_url: 'user2.img' },
      ];
      resolve(users);
    });
  }
}
