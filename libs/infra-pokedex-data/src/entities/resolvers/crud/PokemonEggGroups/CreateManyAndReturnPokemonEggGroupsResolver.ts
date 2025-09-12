import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPokemonEggGroupsArgs } from "./args/CreateManyAndReturnPokemonEggGroupsArgs";
import { PokemonEggGroups } from "../../../models/PokemonEggGroups";
import { CreateManyAndReturnPokemonEggGroups } from "../../outputs/CreateManyAndReturnPokemonEggGroups";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonEggGroups)
export class CreateManyAndReturnPokemonEggGroupsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokemonEggGroups], {
    nullable: false
  })
  async createManyAndReturnPokemonEggGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonEggGroupsArgs): Promise<CreateManyAndReturnPokemonEggGroups[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEggGroups.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
