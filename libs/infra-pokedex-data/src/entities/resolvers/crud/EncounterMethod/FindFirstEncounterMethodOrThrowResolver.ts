import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstEncounterMethodOrThrowArgs } from "./args/FindFirstEncounterMethodOrThrowArgs";
import { EncounterMethod } from "../../../models/EncounterMethod";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterMethod)
export class FindFirstEncounterMethodOrThrowResolver {
  @TypeGraphQL.Query(_returns => EncounterMethod, {
    nullable: true
  })
  async findFirstEncounterMethodOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEncounterMethodOrThrowArgs): Promise<EncounterMethod | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterMethods.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
