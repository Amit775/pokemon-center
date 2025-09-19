import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonDexNumberArgs } from "./args/AggregatePokemonDexNumberArgs";
import { PokemonDexNumber } from "../../../models/PokemonDexNumber";
import { AggregatePokemonDexNumber } from "../../outputs/AggregatePokemonDexNumber";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonDexNumber)
export class AggregatePokemonDexNumberResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonDexNumber, {
    nullable: false
  })
  async aggregatePokemonDexNumber(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonDexNumberArgs): Promise<AggregatePokemonDexNumber> {
    return getPrismaFromContext(ctx).pokemonDexNumbers.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
