import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnEncounterMethodsArgs } from "./args/CreateManyAndReturnEncounterMethodsArgs";
import { EncounterMethods } from "../../../models/EncounterMethods";
import { CreateManyAndReturnEncounterMethods } from "../../outputs/CreateManyAndReturnEncounterMethods";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterMethods)
export class CreateManyAndReturnEncounterMethodsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnEncounterMethods], {
    nullable: false
  })
  async createManyAndReturnEncounterMethods(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnEncounterMethodsArgs): Promise<CreateManyAndReturnEncounterMethods[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterMethods.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
