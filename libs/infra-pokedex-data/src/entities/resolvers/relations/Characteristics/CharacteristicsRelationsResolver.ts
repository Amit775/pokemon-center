import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Characteristics } from "../../../models/Characteristics";
import { Stats } from "../../../models/Stats";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Characteristics)
export class CharacteristicsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Stats, {
    nullable: false
  })
  async stat(@TypeGraphQL.Root() characteristics: Characteristics, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Stats> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).characteristics.findUniqueOrThrow({
      where: {
        id: characteristics.id,
      },
    }).stat({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
