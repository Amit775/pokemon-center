import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokemonFormTypesOrThrowArgs } from "./args/FindUniquePokemonFormTypesOrThrowArgs";
import { PokemonFormTypes } from "../../../models/PokemonFormTypes";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonFormTypes)
export class FindUniquePokemonFormTypesOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonFormTypes, {
    nullable: true
  })
  async findUniquePokemonFormTypesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonFormTypesOrThrowArgs): Promise<PokemonFormTypes | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormTypes.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
