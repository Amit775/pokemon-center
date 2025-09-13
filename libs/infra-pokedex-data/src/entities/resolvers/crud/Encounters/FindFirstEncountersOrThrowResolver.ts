import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstEncountersOrThrowArgs } from "./args/FindFirstEncountersOrThrowArgs";
import { Encounters } from "../../../models/Encounters";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Encounters)
export class FindFirstEncountersOrThrowResolver {
  @TypeGraphQL.Query(_returns => Encounters, {
    nullable: true
  })
  async findFirstEncountersOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEncountersOrThrowArgs): Promise<Encounters | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounters.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
