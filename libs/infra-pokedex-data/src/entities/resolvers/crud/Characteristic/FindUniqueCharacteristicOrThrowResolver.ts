import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueCharacteristicOrThrowArgs } from "./args/FindUniqueCharacteristicOrThrowArgs";
import { Characteristic } from "../../../models/Characteristic";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Characteristic)
export class FindUniqueCharacteristicOrThrowResolver {
  @TypeGraphQL.Query(_returns => Characteristic, {
    nullable: true
  })
  async getCharacteristic(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCharacteristicOrThrowArgs): Promise<Characteristic | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).characteristics.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
