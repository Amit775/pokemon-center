import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokedexVersionGroupsArgs } from "./args/AggregatePokedexVersionGroupsArgs";
import { PokedexVersionGroups } from "../../../models/PokedexVersionGroups";
import { AggregatePokedexVersionGroups } from "../../outputs/AggregatePokedexVersionGroups";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokedexVersionGroups)
export class AggregatePokedexVersionGroupsResolver {
  @TypeGraphQL.Query(_returns => AggregatePokedexVersionGroups, {
    nullable: false
  })
  async aggregatePokedexVersionGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokedexVersionGroupsArgs): Promise<AggregatePokedexVersionGroups> {
    return getPrismaFromContext(ctx).pokedexVersionGroups.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
