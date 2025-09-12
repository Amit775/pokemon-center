import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneEvolutionTriggersArgs } from "./args/UpsertOneEvolutionTriggersArgs";
import { EvolutionTriggers } from "../../../models/EvolutionTriggers";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EvolutionTriggers)
export class UpsertOneEvolutionTriggersResolver {
  @TypeGraphQL.Mutation(_returns => EvolutionTriggers, {
    nullable: false
  })
  async upsertOneEvolutionTriggers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneEvolutionTriggersArgs): Promise<EvolutionTriggers> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionTriggers.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
