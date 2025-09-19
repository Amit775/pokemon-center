import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnEncounterConditionValueArgs } from "./args/CreateManyAndReturnEncounterConditionValueArgs";
import { EncounterConditionValue } from "../../../models/EncounterConditionValue";
import { CreateManyAndReturnEncounterConditionValue } from "../../outputs/CreateManyAndReturnEncounterConditionValue";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterConditionValue)
export class CreateManyAndReturnEncounterConditionValueResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnEncounterConditionValue], {
    nullable: false
  })
  async createManyAndReturnEncounterConditionValue(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnEncounterConditionValueArgs): Promise<CreateManyAndReturnEncounterConditionValue[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValues.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
