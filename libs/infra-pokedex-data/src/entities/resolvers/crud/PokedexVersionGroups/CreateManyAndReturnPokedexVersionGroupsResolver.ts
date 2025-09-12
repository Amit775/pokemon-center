import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPokedexVersionGroupsArgs } from "./args/CreateManyAndReturnPokedexVersionGroupsArgs";
import { PokedexVersionGroups } from "../../../models/PokedexVersionGroups";
import { CreateManyAndReturnPokedexVersionGroups } from "../../outputs/CreateManyAndReturnPokedexVersionGroups";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokedexVersionGroups)
export class CreateManyAndReturnPokedexVersionGroupsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokedexVersionGroups], {
    nullable: false
  })
  async createManyAndReturnPokedexVersionGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokedexVersionGroupsArgs): Promise<CreateManyAndReturnPokedexVersionGroups[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexVersionGroups.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
