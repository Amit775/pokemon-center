import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneLocationGameIndicesArgs } from "./args/UpsertOneLocationGameIndicesArgs";
import { LocationGameIndices } from "../../../models/LocationGameIndices";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationGameIndices)
export class UpsertOneLocationGameIndicesResolver {
  @TypeGraphQL.Mutation(_returns => LocationGameIndices, {
    nullable: false
  })
  async upsertOneLocationGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneLocationGameIndicesArgs): Promise<LocationGameIndices> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationGameIndices.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
