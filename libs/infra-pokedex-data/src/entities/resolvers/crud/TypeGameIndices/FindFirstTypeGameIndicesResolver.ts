import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTypeGameIndicesArgs } from "./args/FindFirstTypeGameIndicesArgs";
import { TypeGameIndices } from "../../../models/TypeGameIndices";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TypeGameIndices)
export class FindFirstTypeGameIndicesResolver {
  @TypeGraphQL.Query(_returns => TypeGameIndices, {
    nullable: true
  })
  async findFirstTypeGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTypeGameIndicesArgs): Promise<TypeGameIndices | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeGameIndices.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
