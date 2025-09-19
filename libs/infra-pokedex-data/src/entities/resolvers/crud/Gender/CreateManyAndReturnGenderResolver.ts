import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnGenderArgs } from "./args/CreateManyAndReturnGenderArgs";
import { Gender } from "../../../models/Gender";
import { CreateManyAndReturnGender } from "../../outputs/CreateManyAndReturnGender";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Gender)
export class CreateManyAndReturnGenderResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnGender], {
    nullable: false
  })
  async createManyAndReturnGender(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnGenderArgs): Promise<CreateManyAndReturnGender[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).genders.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
