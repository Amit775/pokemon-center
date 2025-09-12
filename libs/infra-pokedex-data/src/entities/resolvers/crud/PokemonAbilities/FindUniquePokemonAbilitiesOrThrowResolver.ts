import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokemonAbilitiesOrThrowArgs } from "./args/FindUniquePokemonAbilitiesOrThrowArgs";
import { PokemonAbilities } from "../../../models/PokemonAbilities";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonAbilities)
export class FindUniquePokemonAbilitiesOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonAbilities, {
    nullable: true
  })
  async findUniquePokemonAbilitiesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonAbilitiesOrThrowArgs): Promise<PokemonAbilities | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonAbilities.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
