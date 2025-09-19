import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTypeEfficacyArgs } from "./args/FindFirstTypeEfficacyArgs";
import { TypeEfficacy } from "../../../models/TypeEfficacy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TypeEfficacy)
export class FindFirstTypeEfficacyResolver {
  @TypeGraphQL.Query(_returns => TypeEfficacy, {
    nullable: true
  })
  async findFirstTypeEfficacy(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTypeEfficacyArgs): Promise<TypeEfficacy | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeEfficacy.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
