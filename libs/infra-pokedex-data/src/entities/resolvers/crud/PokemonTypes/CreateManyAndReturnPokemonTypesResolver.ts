import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPokemonTypesArgs } from "./args/CreateManyAndReturnPokemonTypesArgs";
import { PokemonTypes } from "../../../models/PokemonTypes";
import { CreateManyAndReturnPokemonTypes } from "../../outputs/CreateManyAndReturnPokemonTypes";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonTypes)
export class CreateManyAndReturnPokemonTypesResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokemonTypes], {
    nullable: false
  })
  async createManyAndReturnPokemonTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonTypesArgs): Promise<CreateManyAndReturnPokemonTypes[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonTypes.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
