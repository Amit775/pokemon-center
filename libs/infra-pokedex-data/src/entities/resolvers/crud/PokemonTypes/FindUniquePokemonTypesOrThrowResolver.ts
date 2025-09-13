import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokemonTypesOrThrowArgs } from "./args/FindUniquePokemonTypesOrThrowArgs";
import { PokemonTypes } from "../../../models/PokemonTypes";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonTypes)
export class FindUniquePokemonTypesOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonTypes, {
    nullable: true
  })
  async findUniquePokemonTypesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonTypesOrThrowArgs): Promise<PokemonTypes | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonTypes.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
