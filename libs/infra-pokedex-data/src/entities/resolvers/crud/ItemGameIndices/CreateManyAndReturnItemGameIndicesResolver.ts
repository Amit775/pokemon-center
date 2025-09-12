import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnItemGameIndicesArgs } from "./args/CreateManyAndReturnItemGameIndicesArgs";
import { ItemGameIndices } from "../../../models/ItemGameIndices";
import { CreateManyAndReturnItemGameIndices } from "../../outputs/CreateManyAndReturnItemGameIndices";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemGameIndices)
export class CreateManyAndReturnItemGameIndicesResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnItemGameIndices], {
    nullable: false
  })
  async createManyAndReturnItemGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnItemGameIndicesArgs): Promise<CreateManyAndReturnItemGameIndices[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemGameIndices.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
