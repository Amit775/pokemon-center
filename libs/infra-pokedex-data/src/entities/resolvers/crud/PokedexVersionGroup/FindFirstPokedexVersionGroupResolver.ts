import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokedexVersionGroupArgs } from "./args/FindFirstPokedexVersionGroupArgs";
import { PokedexVersionGroup } from "../../../models/PokedexVersionGroup";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokedexVersionGroup)
export class FindFirstPokedexVersionGroupResolver {
  @TypeGraphQL.Query(_returns => PokedexVersionGroup, {
    nullable: true
  })
  async findFirstPokedexVersionGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokedexVersionGroupArgs): Promise<PokedexVersionGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexVersionGroups.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
