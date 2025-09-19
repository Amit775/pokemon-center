import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneEncounterMethodArgs } from "./args/UpsertOneEncounterMethodArgs";
import { EncounterMethod } from "../../../models/EncounterMethod";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterMethod)
export class UpsertOneEncounterMethodResolver {
  @TypeGraphQL.Mutation(_returns => EncounterMethod, {
    nullable: false
  })
  async upsertOneEncounterMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneEncounterMethodArgs): Promise<EncounterMethod> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterMethods.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
