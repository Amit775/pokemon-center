import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokedexVersionGroupOrThrowArgs } from "./args/FindUniquePokedexVersionGroupOrThrowArgs";
import { PokedexVersionGroup } from "../../../models/PokedexVersionGroup";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokedexVersionGroup)
export class FindUniquePokedexVersionGroupOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokedexVersionGroup, {
    nullable: true
  })
  async getPokedexVersionGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokedexVersionGroupOrThrowArgs): Promise<PokedexVersionGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexVersionGroups.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
