import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPokemonFormTypesArgs } from "./args/CreateManyAndReturnPokemonFormTypesArgs";
import { PokemonFormTypes } from "../../../models/PokemonFormTypes";
import { CreateManyAndReturnPokemonFormTypes } from "../../outputs/CreateManyAndReturnPokemonFormTypes";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonFormTypes)
export class CreateManyAndReturnPokemonFormTypesResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokemonFormTypes], {
    nullable: false
  })
  async createManyAndReturnPokemonFormTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonFormTypesArgs): Promise<CreateManyAndReturnPokemonFormTypes[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormTypes.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
