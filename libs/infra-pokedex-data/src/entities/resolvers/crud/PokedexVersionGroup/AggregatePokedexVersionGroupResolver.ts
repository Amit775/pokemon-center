import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokedexVersionGroupArgs } from "./args/AggregatePokedexVersionGroupArgs";
import { PokedexVersionGroup } from "../../../models/PokedexVersionGroup";
import { AggregatePokedexVersionGroup } from "../../outputs/AggregatePokedexVersionGroup";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokedexVersionGroup)
export class AggregatePokedexVersionGroupResolver {
  @TypeGraphQL.Query(_returns => AggregatePokedexVersionGroup, {
    nullable: false
  })
  async aggregatePokedexVersionGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokedexVersionGroupArgs): Promise<AggregatePokedexVersionGroup> {
    return getPrismaFromContext(ctx).pokedexVersionGroups.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
