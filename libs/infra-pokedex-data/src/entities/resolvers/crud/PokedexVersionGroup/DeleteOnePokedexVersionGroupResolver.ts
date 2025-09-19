import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOnePokedexVersionGroupArgs } from "./args/DeleteOnePokedexVersionGroupArgs";
import { PokedexVersionGroup } from "../../../models/PokedexVersionGroup";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokedexVersionGroup)
export class DeleteOnePokedexVersionGroupResolver {
  @TypeGraphQL.Mutation(_returns => PokedexVersionGroup, {
    nullable: true
  })
  async deleteOnePokedexVersionGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOnePokedexVersionGroupArgs): Promise<PokedexVersionGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexVersionGroups.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
