import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPokemonItemsArgs } from "./args/CreateManyAndReturnPokemonItemsArgs";
import { PokemonItems } from "../../../models/PokemonItems";
import { CreateManyAndReturnPokemonItems } from "../../outputs/CreateManyAndReturnPokemonItems";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonItems)
export class CreateManyAndReturnPokemonItemsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokemonItems], {
    nullable: false
  })
  async createManyAndReturnPokemonItems(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonItemsArgs): Promise<CreateManyAndReturnPokemonItems[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonItems.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
