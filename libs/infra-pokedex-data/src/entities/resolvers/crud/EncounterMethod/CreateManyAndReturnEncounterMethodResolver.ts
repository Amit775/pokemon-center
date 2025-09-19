import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnEncounterMethodArgs } from "./args/CreateManyAndReturnEncounterMethodArgs";
import { EncounterMethod } from "../../../models/EncounterMethod";
import { CreateManyAndReturnEncounterMethod } from "../../outputs/CreateManyAndReturnEncounterMethod";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterMethod)
export class CreateManyAndReturnEncounterMethodResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnEncounterMethod], {
    nullable: false
  })
  async createManyAndReturnEncounterMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnEncounterMethodArgs): Promise<CreateManyAndReturnEncounterMethod[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterMethods.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
