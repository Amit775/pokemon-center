import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnMoveMetaAilmentsArgs } from "./args/CreateManyAndReturnMoveMetaAilmentsArgs";
import { MoveMetaAilments } from "../../../models/MoveMetaAilments";
import { CreateManyAndReturnMoveMetaAilments } from "../../outputs/CreateManyAndReturnMoveMetaAilments";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMetaAilments)
export class CreateManyAndReturnMoveMetaAilmentsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnMoveMetaAilments], {
    nullable: false
  })
  async createManyAndReturnMoveMetaAilments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnMoveMetaAilmentsArgs): Promise<CreateManyAndReturnMoveMetaAilments[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaAilments.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
