import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnMoveDamageClassesArgs } from "./args/CreateManyAndReturnMoveDamageClassesArgs";
import { MoveDamageClasses } from "../../../models/MoveDamageClasses";
import { CreateManyAndReturnMoveDamageClasses } from "../../outputs/CreateManyAndReturnMoveDamageClasses";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveDamageClasses)
export class CreateManyAndReturnMoveDamageClassesResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnMoveDamageClasses], {
    nullable: false
  })
  async createManyAndReturnMoveDamageClasses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnMoveDamageClassesArgs): Promise<CreateManyAndReturnMoveDamageClasses[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveDamageClasses.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
