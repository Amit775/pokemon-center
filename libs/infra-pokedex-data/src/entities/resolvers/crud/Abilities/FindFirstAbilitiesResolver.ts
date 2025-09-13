import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstAbilitiesArgs } from "./args/FindFirstAbilitiesArgs";
import { Abilities } from "../../../models/Abilities";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Abilities)
export class FindFirstAbilitiesResolver {
  @TypeGraphQL.Query(_returns => Abilities, {
    nullable: true
  })
  async findFirstAbilities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstAbilitiesArgs): Promise<Abilities | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).abilities.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
