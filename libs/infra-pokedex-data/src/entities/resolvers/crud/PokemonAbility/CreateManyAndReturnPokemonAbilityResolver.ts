import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPokemonAbilityArgs } from "./args/CreateManyAndReturnPokemonAbilityArgs";
import { PokemonAbility } from "../../../models/PokemonAbility";
import { CreateManyAndReturnPokemonAbility } from "../../outputs/CreateManyAndReturnPokemonAbility";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonAbility)
export class CreateManyAndReturnPokemonAbilityResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokemonAbility], {
    nullable: false
  })
  async createManyAndReturnPokemonAbility(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonAbilityArgs): Promise<CreateManyAndReturnPokemonAbility[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonAbilities.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
