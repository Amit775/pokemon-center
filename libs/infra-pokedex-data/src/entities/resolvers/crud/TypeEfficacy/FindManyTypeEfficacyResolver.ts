import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyTypeEfficacyArgs } from "./args/FindManyTypeEfficacyArgs";
import { TypeEfficacy } from "../../../models/TypeEfficacy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TypeEfficacy)
export class FindManyTypeEfficacyResolver {
  @TypeGraphQL.Query(_returns => [TypeEfficacy], {
    nullable: false
  })
  async typeEfficacies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyTypeEfficacyArgs): Promise<TypeEfficacy[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeEfficacy.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
