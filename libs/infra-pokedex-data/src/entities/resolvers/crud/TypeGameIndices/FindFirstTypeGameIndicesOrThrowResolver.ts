import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTypeGameIndicesOrThrowArgs } from "./args/FindFirstTypeGameIndicesOrThrowArgs";
import { TypeGameIndices } from "../../../models/TypeGameIndices";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TypeGameIndices)
export class FindFirstTypeGameIndicesOrThrowResolver {
  @TypeGraphQL.Query(_returns => TypeGameIndices, {
    nullable: true
  })
  async findFirstTypeGameIndicesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTypeGameIndicesOrThrowArgs): Promise<TypeGameIndices | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeGameIndices.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
