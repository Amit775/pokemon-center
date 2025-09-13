import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonDexNumbersArgs } from "./args/AggregatePokemonDexNumbersArgs";
import { PokemonDexNumbers } from "../../../models/PokemonDexNumbers";
import { AggregatePokemonDexNumbers } from "../../outputs/AggregatePokemonDexNumbers";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonDexNumbers)
export class AggregatePokemonDexNumbersResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonDexNumbers, {
    nullable: false
  })
  async aggregatePokemonDexNumbers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonDexNumbersArgs): Promise<AggregatePokemonDexNumbers> {
    return getPrismaFromContext(ctx).pokemonDexNumbers.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
