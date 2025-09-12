import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneTypeGameIndicesArgs } from "./args/UpsertOneTypeGameIndicesArgs";
import { TypeGameIndices } from "../../../models/TypeGameIndices";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TypeGameIndices)
export class UpsertOneTypeGameIndicesResolver {
  @TypeGraphQL.Mutation(_returns => TypeGameIndices, {
    nullable: false
  })
  async upsertOneTypeGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneTypeGameIndicesArgs): Promise<TypeGameIndices> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeGameIndices.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
