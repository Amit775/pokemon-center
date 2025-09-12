import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneTypeGameIndicesArgs } from "./args/CreateOneTypeGameIndicesArgs";
import { TypeGameIndices } from "../../../models/TypeGameIndices";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TypeGameIndices)
export class CreateOneTypeGameIndicesResolver {
  @TypeGraphQL.Mutation(_returns => TypeGameIndices, {
    nullable: false
  })
  async createOneTypeGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneTypeGameIndicesArgs): Promise<TypeGameIndices> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeGameIndices.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
