import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnMoveMetaAilmentArgs } from "./args/CreateManyAndReturnMoveMetaAilmentArgs";
import { MoveMetaAilment } from "../../../models/MoveMetaAilment";
import { CreateManyAndReturnMoveMetaAilment } from "../../outputs/CreateManyAndReturnMoveMetaAilment";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMetaAilment)
export class CreateManyAndReturnMoveMetaAilmentResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnMoveMetaAilment], {
    nullable: false
  })
  async createManyAndReturnMoveMetaAilment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnMoveMetaAilmentArgs): Promise<CreateManyAndReturnMoveMetaAilment[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaAilments.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
