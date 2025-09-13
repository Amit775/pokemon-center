import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstAbilitiesOrThrowArgs } from "./args/FindFirstAbilitiesOrThrowArgs";
import { Abilities } from "../../../models/Abilities";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Abilities)
export class FindFirstAbilitiesOrThrowResolver {
  @TypeGraphQL.Query(_returns => Abilities, {
    nullable: true
  })
  async findFirstAbilitiesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstAbilitiesOrThrowArgs): Promise<Abilities | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).abilities.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
