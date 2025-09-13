import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokemonFormGenerationsOrThrowArgs } from "./args/FindUniquePokemonFormGenerationsOrThrowArgs";
import { PokemonFormGenerations } from "../../../models/PokemonFormGenerations";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonFormGenerations)
export class FindUniquePokemonFormGenerationsOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonFormGenerations, {
    nullable: true
  })
  async findUniquePokemonFormGenerationsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonFormGenerationsOrThrowArgs): Promise<PokemonFormGenerations | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormGenerations.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
