import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokemonTypesArgs } from "./args/FindUniquePokemonTypesArgs";
import { PokemonTypes } from "../../../models/PokemonTypes";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonTypes)
export class FindUniquePokemonTypesResolver {
  @TypeGraphQL.Query(_returns => PokemonTypes, {
    nullable: true
  })
  async findUniquePokemonTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonTypesArgs): Promise<PokemonTypes | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonTypes.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
