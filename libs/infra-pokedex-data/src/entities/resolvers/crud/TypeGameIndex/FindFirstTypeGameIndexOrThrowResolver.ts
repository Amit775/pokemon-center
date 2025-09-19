import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTypeGameIndexOrThrowArgs } from "./args/FindFirstTypeGameIndexOrThrowArgs";
import { TypeGameIndex } from "../../../models/TypeGameIndex";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TypeGameIndex)
export class FindFirstTypeGameIndexOrThrowResolver {
  @TypeGraphQL.Query(_returns => TypeGameIndex, {
    nullable: true
  })
  async findFirstTypeGameIndexOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTypeGameIndexOrThrowArgs): Promise<TypeGameIndex | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeGameIndices.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
