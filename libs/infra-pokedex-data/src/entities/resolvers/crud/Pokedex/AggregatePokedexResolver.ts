import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokedexArgs } from "./args/AggregatePokedexArgs";
import { Pokedex } from "../../../models/Pokedex";
import { AggregatePokedex } from "../../outputs/AggregatePokedex";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Pokedex)
export class AggregatePokedexResolver {
  @TypeGraphQL.Query(_returns => AggregatePokedex, {
    nullable: false
  })
  async aggregatePokedex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokedexArgs): Promise<AggregatePokedex> {
    return getPrismaFromContext(ctx).pokedexes.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
