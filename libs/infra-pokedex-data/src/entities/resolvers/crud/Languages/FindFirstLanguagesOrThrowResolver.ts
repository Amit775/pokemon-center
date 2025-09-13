import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstLanguagesOrThrowArgs } from "./args/FindFirstLanguagesOrThrowArgs";
import { Languages } from "../../../models/Languages";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Languages)
export class FindFirstLanguagesOrThrowResolver {
  @TypeGraphQL.Query(_returns => Languages, {
    nullable: true
  })
  async findFirstLanguagesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLanguagesOrThrowArgs): Promise<Languages | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).languages.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
