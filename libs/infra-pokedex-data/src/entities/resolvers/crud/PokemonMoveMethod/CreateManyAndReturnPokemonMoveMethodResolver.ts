import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPokemonMoveMethodArgs } from "./args/CreateManyAndReturnPokemonMoveMethodArgs";
import { PokemonMoveMethod } from "../../../models/PokemonMoveMethod";
import { CreateManyAndReturnPokemonMoveMethod } from "../../outputs/CreateManyAndReturnPokemonMoveMethod";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonMoveMethod)
export class CreateManyAndReturnPokemonMoveMethodResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokemonMoveMethod], {
    nullable: false
  })
  async createManyAndReturnPokemonMoveMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonMoveMethodArgs): Promise<CreateManyAndReturnPokemonMoveMethod[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoveMethods.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
