import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnEncounterConditionsArgs } from "./args/CreateManyAndReturnEncounterConditionsArgs";
import { EncounterConditions } from "../../../models/EncounterConditions";
import { CreateManyAndReturnEncounterConditions } from "../../outputs/CreateManyAndReturnEncounterConditions";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterConditions)
export class CreateManyAndReturnEncounterConditionsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnEncounterConditions], {
    nullable: false
  })
  async createManyAndReturnEncounterConditions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnEncounterConditionsArgs): Promise<CreateManyAndReturnEncounterConditions[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditions.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
