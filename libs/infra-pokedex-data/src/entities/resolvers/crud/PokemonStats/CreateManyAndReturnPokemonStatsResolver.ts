import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPokemonStatsArgs } from "./args/CreateManyAndReturnPokemonStatsArgs";
import { PokemonStats } from "../../../models/PokemonStats";
import { CreateManyAndReturnPokemonStats } from "../../outputs/CreateManyAndReturnPokemonStats";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonStats)
export class CreateManyAndReturnPokemonStatsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokemonStats], {
    nullable: false
  })
  async createManyAndReturnPokemonStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonStatsArgs): Promise<CreateManyAndReturnPokemonStats[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonStats.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
