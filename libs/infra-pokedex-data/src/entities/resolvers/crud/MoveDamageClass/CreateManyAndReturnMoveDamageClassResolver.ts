import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnMoveDamageClassArgs } from "./args/CreateManyAndReturnMoveDamageClassArgs";
import { MoveDamageClass } from "../../../models/MoveDamageClass";
import { CreateManyAndReturnMoveDamageClass } from "../../outputs/CreateManyAndReturnMoveDamageClass";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveDamageClass)
export class CreateManyAndReturnMoveDamageClassResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnMoveDamageClass], {
    nullable: false
  })
  async createManyAndReturnMoveDamageClass(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnMoveDamageClassArgs): Promise<CreateManyAndReturnMoveDamageClass[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveDamageClasses.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
