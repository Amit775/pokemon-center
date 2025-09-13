import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokedexesArgs } from "./args/AggregatePokedexesArgs";
import { Pokedexes } from "../../../models/Pokedexes";
import { AggregatePokedexes } from "../../outputs/AggregatePokedexes";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Pokedexes)
export class AggregatePokedexesResolver {
  @TypeGraphQL.Query(_returns => AggregatePokedexes, {
    nullable: false
  })
  async aggregatePokedexes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokedexesArgs): Promise<AggregatePokedexes> {
    return getPrismaFromContext(ctx).pokedexes.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
