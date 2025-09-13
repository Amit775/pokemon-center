import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Generations } from "../../../models/Generations";
import { TypeGameIndices } from "../../../models/TypeGameIndices";
import { Types } from "../../../models/Types";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TypeGameIndices)
export class TypeGameIndicesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Types, {
    nullable: false
  })
  async type(@TypeGraphQL.Root() typeGameIndices: TypeGameIndices, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Types> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeGameIndices.findUniqueOrThrow({
      where: {
        type_id_generation_id: {
          type_id: typeGameIndices.type_id,
          generation_id: typeGameIndices.generation_id,
        },
      },
    }).type({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Generations, {
    nullable: false
  })
  async generation(@TypeGraphQL.Root() typeGameIndices: TypeGameIndices, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Generations> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeGameIndices.findUniqueOrThrow({
      where: {
        type_id_generation_id: {
          type_id: typeGameIndices.type_id,
          generation_id: typeGameIndices.generation_id,
        },
      },
    }).generation({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
