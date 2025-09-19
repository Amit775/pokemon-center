import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneCharacteristicArgs } from "./args/CreateOneCharacteristicArgs";
import { Characteristic } from "../../../models/Characteristic";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Characteristic)
export class CreateOneCharacteristicResolver {
  @TypeGraphQL.Mutation(_returns => Characteristic, {
    nullable: false
  })
  async createOneCharacteristic(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneCharacteristicArgs): Promise<Characteristic> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).characteristics.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
