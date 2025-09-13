import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokedexVersionGroupsArgs } from "./args/FindFirstPokedexVersionGroupsArgs";
import { PokedexVersionGroups } from "../../../models/PokedexVersionGroups";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokedexVersionGroups)
export class FindFirstPokedexVersionGroupsResolver {
  @TypeGraphQL.Query(_returns => PokedexVersionGroups, {
    nullable: true
  })
  async findFirstPokedexVersionGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokedexVersionGroupsArgs): Promise<PokedexVersionGroups | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexVersionGroups.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
