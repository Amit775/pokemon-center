import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnVersionGroupPokemonMoveMethodsArgs } from "./args/CreateManyAndReturnVersionGroupPokemonMoveMethodsArgs";
import { VersionGroupPokemonMoveMethods } from "../../../models/VersionGroupPokemonMoveMethods";
import { CreateManyAndReturnVersionGroupPokemonMoveMethods } from "../../outputs/CreateManyAndReturnVersionGroupPokemonMoveMethods";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VersionGroupPokemonMoveMethods)
export class CreateManyAndReturnVersionGroupPokemonMoveMethodsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnVersionGroupPokemonMoveMethods], {
    nullable: false
  })
  async createManyAndReturnVersionGroupPokemonMoveMethods(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnVersionGroupPokemonMoveMethodsArgs): Promise<CreateManyAndReturnVersionGroupPokemonMoveMethods[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupPokemonMoveMethods.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
