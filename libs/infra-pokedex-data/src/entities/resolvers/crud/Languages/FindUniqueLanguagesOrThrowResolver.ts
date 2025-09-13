import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueLanguagesOrThrowArgs } from "./args/FindUniqueLanguagesOrThrowArgs";
import { Languages } from "../../../models/Languages";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Languages)
export class FindUniqueLanguagesOrThrowResolver {
  @TypeGraphQL.Query(_returns => Languages, {
    nullable: true
  })
  async findUniqueLanguagesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLanguagesOrThrowArgs): Promise<Languages | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).languages.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
