import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnMoveFlagMapArgs } from "./args/CreateManyAndReturnMoveFlagMapArgs";
import { MoveFlagMap } from "../../../models/MoveFlagMap";
import { CreateManyAndReturnMoveFlagMap } from "../../outputs/CreateManyAndReturnMoveFlagMap";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveFlagMap)
export class CreateManyAndReturnMoveFlagMapResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnMoveFlagMap], {
    nullable: false
  })
  async createManyAndReturnMoveFlagMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnMoveFlagMapArgs): Promise<CreateManyAndReturnMoveFlagMap[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlagMap.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
