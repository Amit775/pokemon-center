import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Generation } from "../../../models/Generation";
import { Type } from "../../../models/Type";
import { TypeGameIndex } from "../../../models/TypeGameIndex";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TypeGameIndex)
export class TypeGameIndexRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Type, {
    nullable: false
  })
  async type(@TypeGraphQL.Root() typeGameIndex: TypeGameIndex, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Type> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeGameIndices.findUniqueOrThrow({
      where: {
        type_id_generation_id: {
          type_id: typeGameIndex.type_id,
          generation_id: typeGameIndex.generation_id,
        },
      },
    }).type({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Generation, {
    nullable: false
  })
  async generation(@TypeGraphQL.Root() typeGameIndex: TypeGameIndex, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Generation> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeGameIndices.findUniqueOrThrow({
      where: {
        type_id_generation_id: {
          type_id: typeGameIndex.type_id,
          generation_id: typeGameIndex.generation_id,
        },
      },
    }).generation({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
