import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstNaturesOrThrowArgs } from "./args/FindFirstNaturesOrThrowArgs";
import { Natures } from "../../../models/Natures";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Natures)
export class FindFirstNaturesOrThrowResolver {
  @TypeGraphQL.Query(_returns => Natures, {
    nullable: true
  })
  async findFirstNaturesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstNaturesOrThrowArgs): Promise<Natures | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natures.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
