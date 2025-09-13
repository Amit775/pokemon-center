import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokedexVersionGroupsArgs } from "./args/FindUniquePokedexVersionGroupsArgs";
import { PokedexVersionGroups } from "../../../models/PokedexVersionGroups";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokedexVersionGroups)
export class FindUniquePokedexVersionGroupsResolver {
  @TypeGraphQL.Query(_returns => PokedexVersionGroups, {
    nullable: true
  })
  async findUniquePokedexVersionGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokedexVersionGroupsArgs): Promise<PokedexVersionGroups | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexVersionGroups.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
