import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTypeGameIndexArgs } from "./args/FindFirstTypeGameIndexArgs";
import { TypeGameIndex } from "../../../models/TypeGameIndex";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TypeGameIndex)
export class FindFirstTypeGameIndexResolver {
  @TypeGraphQL.Query(_returns => TypeGameIndex, {
    nullable: true
  })
  async findFirstTypeGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTypeGameIndexArgs): Promise<TypeGameIndex | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeGameIndices.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
