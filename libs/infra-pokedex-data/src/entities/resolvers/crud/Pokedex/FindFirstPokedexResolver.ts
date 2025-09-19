import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokedexArgs } from "./args/FindFirstPokedexArgs";
import { Pokedex } from "../../../models/Pokedex";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Pokedex)
export class FindFirstPokedexResolver {
  @TypeGraphQL.Query(_returns => Pokedex, {
    nullable: true
  })
  async findFirstPokedex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokedexArgs): Promise<Pokedex | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexes.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
