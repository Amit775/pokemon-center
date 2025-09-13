import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { MoveDamageClasses } from "../../../models/MoveDamageClasses";
import { Moves } from "../../../models/Moves";
import { Types } from "../../../models/Types";
import { MoveDamageClassesMovesArgs } from "./args/MoveDamageClassesMovesArgs";
import { MoveDamageClassesTypesArgs } from "./args/MoveDamageClassesTypesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveDamageClasses)
export class MoveDamageClassesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Moves], {
    nullable: false
  })
  async moves(@TypeGraphQL.Root() moveDamageClasses: MoveDamageClasses, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MoveDamageClassesMovesArgs): Promise<Moves[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveDamageClasses.findUniqueOrThrow({
      where: {
        id: moveDamageClasses.id,
      },
    }).moves({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Types], {
    nullable: false
  })
  async types(@TypeGraphQL.Root() moveDamageClasses: MoveDamageClasses, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MoveDamageClassesTypesArgs): Promise<Types[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveDamageClasses.findUniqueOrThrow({
      where: {
        id: moveDamageClasses.id,
      },
    }).types({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
