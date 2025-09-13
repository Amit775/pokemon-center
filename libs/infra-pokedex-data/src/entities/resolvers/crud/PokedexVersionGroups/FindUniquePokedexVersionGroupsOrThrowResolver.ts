import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokedexVersionGroupsOrThrowArgs } from "./args/FindUniquePokedexVersionGroupsOrThrowArgs";
import { PokedexVersionGroups } from "../../../models/PokedexVersionGroups";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokedexVersionGroups)
export class FindUniquePokedexVersionGroupsOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokedexVersionGroups, {
    nullable: true
  })
  async findUniquePokedexVersionGroupsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokedexVersionGroupsOrThrowArgs): Promise<PokedexVersionGroups | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexVersionGroups.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
