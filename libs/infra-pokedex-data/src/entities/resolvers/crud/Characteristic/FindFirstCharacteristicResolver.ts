import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstCharacteristicArgs } from "./args/FindFirstCharacteristicArgs";
import { Characteristic } from "../../../models/Characteristic";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Characteristic)
export class FindFirstCharacteristicResolver {
  @TypeGraphQL.Query(_returns => Characteristic, {
    nullable: true
  })
  async findFirstCharacteristic(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCharacteristicArgs): Promise<Characteristic | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).characteristics.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
