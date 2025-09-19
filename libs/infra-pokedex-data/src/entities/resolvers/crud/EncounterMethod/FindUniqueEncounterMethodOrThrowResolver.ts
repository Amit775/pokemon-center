import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueEncounterMethodOrThrowArgs } from "./args/FindUniqueEncounterMethodOrThrowArgs";
import { EncounterMethod } from "../../../models/EncounterMethod";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterMethod)
export class FindUniqueEncounterMethodOrThrowResolver {
  @TypeGraphQL.Query(_returns => EncounterMethod, {
    nullable: true
  })
  async getEncounterMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEncounterMethodOrThrowArgs): Promise<EncounterMethod | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterMethods.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
