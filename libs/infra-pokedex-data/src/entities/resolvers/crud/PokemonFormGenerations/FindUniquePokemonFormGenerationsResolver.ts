import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokemonFormGenerationsArgs } from "./args/FindUniquePokemonFormGenerationsArgs";
import { PokemonFormGenerations } from "../../../models/PokemonFormGenerations";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonFormGenerations)
export class FindUniquePokemonFormGenerationsResolver {
  @TypeGraphQL.Query(_returns => PokemonFormGenerations, {
    nullable: true
  })
  async findUniquePokemonFormGenerations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonFormGenerationsArgs): Promise<PokemonFormGenerations | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormGenerations.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
