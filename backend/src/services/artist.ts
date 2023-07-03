import { UserService } from "./user";
import database from "../../src/db";
import { IContext } from "../common/interface/context";
import { Artist } from "@prisma/client";
import { ISaveResponseArgs } from "./interfaces/question-service.interfaces";
import { IFetchArtistStaticsInfo } from "./interfaces/artist-service.interfaces";

export class artistService {
  private readonly userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async fetchArtist(name: string, context: IContext): Promise<Artist> {
    await this.userService.authUser(context);

    return database.artist.findFirst({
      where: {
        name,
      },
    });
  }

  async fetchArtistStatistics(): Promise<IFetchArtistStaticsInfo[]> {
    let artists;
    let sum;

    await database.$transaction(async (database) => {
      artists = await database.artist.findMany({
        select: {
          name: true,
          amount: true,
          defined: true,
        },
        orderBy: {
          amount: "desc",
        },
      });

      sum = await database.artist.aggregate({
        _sum: {
          amount: true,
        },
      });
    });

    const amounts = sum._sum.amount;

    artists.forEach((artist) => {
      const per = String((artist.amount / amounts) * 100);
      artist["per"] = `${per.slice(0, 5)}%`;
    });

    return artists;
  }

  async getTotalUsers(): Promise<Number> {
    const users = await database.artist.aggregate({
      _sum: {
        amount: true,
      },
    });

    return users._sum.amount;
  }
}
