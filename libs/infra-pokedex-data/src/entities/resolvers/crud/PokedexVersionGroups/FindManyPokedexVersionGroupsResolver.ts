import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyPokedexVersionGroupsArgs } from "./args/FindManyPokedexVersionGroupsArgs";
import { PokedexVersionGroups } from "../../../models/PokedexVersionGroups";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokedexVersionGroups)
export class FindManyPokedexVersionGroupsResolver {
  @TypeGraphQL.Query(_returns => [PokedexVersionGroups], {
    nullable: false
  })
  async findManyPokedexVersionGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokedexVersionGroupsArgs): Promise<PokedexVersionGroups[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexVersionGroups.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
