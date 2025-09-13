import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyPokedexesArgs } from "./args/FindManyPokedexesArgs";
import { Pokedexes } from "../../../models/Pokedexes";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Pokedexes)
export class FindManyPokedexesResolver {
  @TypeGraphQL.Query(_returns => [Pokedexes], {
    nullable: false
  })
  async findManyPokedexes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokedexesArgs): Promise<Pokedexes[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexes.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
