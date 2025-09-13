import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueEncounterMethodsOrThrowArgs } from "./args/FindUniqueEncounterMethodsOrThrowArgs";
import { EncounterMethods } from "../../../models/EncounterMethods";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterMethods)
export class FindUniqueEncounterMethodsOrThrowResolver {
  @TypeGraphQL.Query(_returns => EncounterMethods, {
    nullable: true
  })
  async findUniqueEncounterMethodsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEncounterMethodsOrThrowArgs): Promise<EncounterMethods | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterMethods.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
