import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnMoveMetaArgs } from "./args/CreateManyAndReturnMoveMetaArgs";
import { MoveMeta } from "../../../models/MoveMeta";
import { CreateManyAndReturnMoveMeta } from "../../outputs/CreateManyAndReturnMoveMeta";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMeta)
export class CreateManyAndReturnMoveMetaResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnMoveMeta], {
    nullable: false
  })
  async createManyAndReturnMoveMeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnMoveMetaArgs): Promise<CreateManyAndReturnMoveMeta[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMeta.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
