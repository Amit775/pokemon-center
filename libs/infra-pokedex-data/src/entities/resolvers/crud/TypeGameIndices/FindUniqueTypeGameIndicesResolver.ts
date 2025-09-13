import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTypeGameIndicesArgs } from "./args/FindUniqueTypeGameIndicesArgs";
import { TypeGameIndices } from "../../../models/TypeGameIndices";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TypeGameIndices)
export class FindUniqueTypeGameIndicesResolver {
  @TypeGraphQL.Query(_returns => TypeGameIndices, {
    nullable: true
  })
  async findUniqueTypeGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTypeGameIndicesArgs): Promise<TypeGameIndices | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeGameIndices.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
