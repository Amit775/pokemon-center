import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyEvolutionTriggerArgs } from "./args/FindManyEvolutionTriggerArgs";
import { EvolutionTrigger } from "../../../models/EvolutionTrigger";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EvolutionTrigger)
export class FindManyEvolutionTriggerResolver {
  @TypeGraphQL.Query(_returns => [EvolutionTrigger], {
    nullable: false
  })
  async evolutionTriggers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyEvolutionTriggerArgs): Promise<EvolutionTrigger[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionTriggers.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
