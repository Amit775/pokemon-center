import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueAbilitiesOrThrowArgs } from "./args/FindUniqueAbilitiesOrThrowArgs";
import { Abilities } from "../../../models/Abilities";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Abilities)
export class FindUniqueAbilitiesOrThrowResolver {
  @TypeGraphQL.Query(_returns => Abilities, {
    nullable: true
  })
  async findUniqueAbilitiesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueAbilitiesOrThrowArgs): Promise<Abilities | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).abilities.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
