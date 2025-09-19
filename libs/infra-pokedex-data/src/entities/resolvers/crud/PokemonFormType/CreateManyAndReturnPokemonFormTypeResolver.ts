import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPokemonFormTypeArgs } from "./args/CreateManyAndReturnPokemonFormTypeArgs";
import { PokemonFormType } from "../../../models/PokemonFormType";
import { CreateManyAndReturnPokemonFormType } from "../../outputs/CreateManyAndReturnPokemonFormType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonFormType)
export class CreateManyAndReturnPokemonFormTypeResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokemonFormType], {
    nullable: false
  })
  async createManyAndReturnPokemonFormType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonFormTypeArgs): Promise<CreateManyAndReturnPokemonFormType[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormTypes.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
