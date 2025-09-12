import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnGendersArgs } from "./args/CreateManyAndReturnGendersArgs";
import { Genders } from "../../../models/Genders";
import { CreateManyAndReturnGenders } from "../../outputs/CreateManyAndReturnGenders";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Genders)
export class CreateManyAndReturnGendersResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnGenders], {
    nullable: false
  })
  async createManyAndReturnGenders(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnGendersArgs): Promise<CreateManyAndReturnGenders[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).genders.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
