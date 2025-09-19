import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueGenderOrThrowArgs } from "./args/FindUniqueGenderOrThrowArgs";
import { Gender } from "../../../models/Gender";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Gender)
export class FindUniqueGenderOrThrowResolver {
  @TypeGraphQL.Query(_returns => Gender, {
    nullable: true
  })
  async getGender(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueGenderOrThrowArgs): Promise<Gender | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).genders.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
