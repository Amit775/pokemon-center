import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPokedexVersionGroupArgs } from "./args/CreateManyAndReturnPokedexVersionGroupArgs";
import { PokedexVersionGroup } from "../../../models/PokedexVersionGroup";
import { CreateManyAndReturnPokedexVersionGroup } from "../../outputs/CreateManyAndReturnPokedexVersionGroup";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokedexVersionGroup)
export class CreateManyAndReturnPokedexVersionGroupResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokedexVersionGroup], {
    nullable: false
  })
  async createManyAndReturnPokedexVersionGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokedexVersionGroupArgs): Promise<CreateManyAndReturnPokedexVersionGroup[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexVersionGroups.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
