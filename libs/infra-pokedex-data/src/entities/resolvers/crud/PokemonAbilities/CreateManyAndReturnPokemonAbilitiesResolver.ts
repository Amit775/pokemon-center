import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPokemonAbilitiesArgs } from "./args/CreateManyAndReturnPokemonAbilitiesArgs";
import { PokemonAbilities } from "../../../models/PokemonAbilities";
import { CreateManyAndReturnPokemonAbilities } from "../../outputs/CreateManyAndReturnPokemonAbilities";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonAbilities)
export class CreateManyAndReturnPokemonAbilitiesResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokemonAbilities], {
    nullable: false
  })
  async createManyAndReturnPokemonAbilities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonAbilitiesArgs): Promise<CreateManyAndReturnPokemonAbilities[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonAbilities.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
