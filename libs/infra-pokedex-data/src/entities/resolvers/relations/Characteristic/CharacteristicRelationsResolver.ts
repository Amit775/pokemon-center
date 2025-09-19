import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Characteristic } from "../../../models/Characteristic";
import { Stat } from "../../../models/Stat";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Characteristic)
export class CharacteristicRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Stat, {
    nullable: false
  })
  async stat(@TypeGraphQL.Root() characteristic: Characteristic, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Stat> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).characteristics.findUniqueOrThrow({
      where: {
        id: characteristic.id,
      },
    }).stat({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
