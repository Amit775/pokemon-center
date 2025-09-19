import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnVersionGroupPokemonMoveMethodArgs } from "./args/CreateManyAndReturnVersionGroupPokemonMoveMethodArgs";
import { VersionGroupPokemonMoveMethod } from "../../../models/VersionGroupPokemonMoveMethod";
import { CreateManyAndReturnVersionGroupPokemonMoveMethod } from "../../outputs/CreateManyAndReturnVersionGroupPokemonMoveMethod";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VersionGroupPokemonMoveMethod)
export class CreateManyAndReturnVersionGroupPokemonMoveMethodResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnVersionGroupPokemonMoveMethod], {
    nullable: false
  })
  async createManyAndReturnVersionGroupPokemonMoveMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnVersionGroupPokemonMoveMethodArgs): Promise<CreateManyAndReturnVersionGroupPokemonMoveMethod[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupPokemonMoveMethods.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
