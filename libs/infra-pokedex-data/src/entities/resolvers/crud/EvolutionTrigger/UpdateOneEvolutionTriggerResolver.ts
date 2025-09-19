import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneEvolutionTriggerArgs } from "./args/UpdateOneEvolutionTriggerArgs";
import { EvolutionTrigger } from "../../../models/EvolutionTrigger";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EvolutionTrigger)
export class UpdateOneEvolutionTriggerResolver {
  @TypeGraphQL.Mutation(_returns => EvolutionTrigger, {
    nullable: true
  })
  async updateOneEvolutionTrigger(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneEvolutionTriggerArgs): Promise<EvolutionTrigger | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionTriggers.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
