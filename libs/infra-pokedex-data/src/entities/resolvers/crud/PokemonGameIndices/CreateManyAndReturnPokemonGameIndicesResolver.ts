import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPokemonGameIndicesArgs } from "./args/CreateManyAndReturnPokemonGameIndicesArgs";
import { PokemonGameIndices } from "../../../models/PokemonGameIndices";
import { CreateManyAndReturnPokemonGameIndices } from "../../outputs/CreateManyAndReturnPokemonGameIndices";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonGameIndices)
export class CreateManyAndReturnPokemonGameIndicesResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokemonGameIndices], {
    nullable: false
  })
  async createManyAndReturnPokemonGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonGameIndicesArgs): Promise<CreateManyAndReturnPokemonGameIndices[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonGameIndices.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
