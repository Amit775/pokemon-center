import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOnePokemonTypeArgs } from "./args/UpdateOnePokemonTypeArgs";
import { PokemonType } from "../../../models/PokemonType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonType)
export class UpdateOnePokemonTypeResolver {
  @TypeGraphQL.Mutation(_returns => PokemonType, {
    nullable: true
  })
  async updateOnePokemonType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOnePokemonTypeArgs): Promise<PokemonType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonTypes.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
