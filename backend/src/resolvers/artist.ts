import { Artist } from "@prisma/client";
import { IContext } from "../common/interface/context";
import { artistService } from "../services/artist";
import { IFetchArtistStaticsInfo } from "../services/interfaces/artist-service.interfaces";

class ArtistResolver {
  private readonly artistService: artistService;

  constructor() {
    this.artistService = new artistService();
  }
  async fetchArtist(
    _,
    { name }: { name: string },
    context: IContext
  ): Promise<Artist> {
    try {
      return await this.artistService.fetchArtist(name, context);
    } catch (error) {
      throw error;
    }
  }

  async fetchArtistStatistics(): Promise<IFetchArtistStaticsInfo[]> {
    try {
      return await this.artistService.fetchArtistStatistics();
    } catch (error) {
      throw error;
    }
  }
  async getTotalUsers(): Promise<Number> {
    try {
      return await this.artistService.getTotalUsers();
    } catch (error) {
      throw error;
    }
  }
}

const resolver = new ArtistResolver();

export const artistResolvers = {
  Query: {
    fetchArtist: (_, args, context) => resolver.fetchArtist(_, args, context),
    fetchArtistStatistics: () => resolver.fetchArtistStatistics(),
    getTotalUsers: () => resolver.getTotalUsers(),
  },
};
