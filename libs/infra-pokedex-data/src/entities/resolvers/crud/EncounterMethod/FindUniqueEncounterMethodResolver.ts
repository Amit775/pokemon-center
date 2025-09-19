import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueEncounterMethodArgs } from "./args/FindUniqueEncounterMethodArgs";
import { EncounterMethod } from "../../../models/EncounterMethod";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterMethod)
export class FindUniqueEncounterMethodResolver {
  @TypeGraphQL.Query(_returns => EncounterMethod, {
    nullable: true
  })
  async encounterMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEncounterMethodArgs): Promise<EncounterMethod | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterMethods.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
