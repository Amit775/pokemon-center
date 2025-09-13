import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyEncounterMethodsArgs } from "./args/FindManyEncounterMethodsArgs";
import { EncounterMethods } from "../../../models/EncounterMethods";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterMethods)
export class FindManyEncounterMethodsResolver {
  @TypeGraphQL.Query(_returns => [EncounterMethods], {
    nullable: false
  })
  async findManyEncounterMethods(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyEncounterMethodsArgs): Promise<EncounterMethods[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterMethods.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
