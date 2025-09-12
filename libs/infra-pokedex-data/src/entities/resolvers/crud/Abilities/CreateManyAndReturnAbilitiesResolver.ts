import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnAbilitiesArgs } from "./args/CreateManyAndReturnAbilitiesArgs";
import { Abilities } from "../../../models/Abilities";
import { CreateManyAndReturnAbilities } from "../../outputs/CreateManyAndReturnAbilities";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Abilities)
export class CreateManyAndReturnAbilitiesResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnAbilities], {
    nullable: false
  })
  async createManyAndReturnAbilities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnAbilitiesArgs): Promise<CreateManyAndReturnAbilities[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).abilities.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
