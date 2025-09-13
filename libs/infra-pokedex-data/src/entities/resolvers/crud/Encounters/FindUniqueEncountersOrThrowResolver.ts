import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueEncountersOrThrowArgs } from "./args/FindUniqueEncountersOrThrowArgs";
import { Encounters } from "../../../models/Encounters";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Encounters)
export class FindUniqueEncountersOrThrowResolver {
  @TypeGraphQL.Query(_returns => Encounters, {
    nullable: true
  })
  async findUniqueEncountersOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEncountersOrThrowArgs): Promise<Encounters | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounters.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
