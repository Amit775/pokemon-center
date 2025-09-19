import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOnePokedexArgs } from "./args/UpdateOnePokedexArgs";
import { Pokedex } from "../../../models/Pokedex";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Pokedex)
export class UpdateOnePokedexResolver {
  @TypeGraphQL.Mutation(_returns => Pokedex, {
    nullable: true
  })
  async updateOnePokedex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOnePokedexArgs): Promise<Pokedex | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexes.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
