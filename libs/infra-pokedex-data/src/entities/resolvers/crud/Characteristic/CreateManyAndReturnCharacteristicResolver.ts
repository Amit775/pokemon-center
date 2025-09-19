import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnCharacteristicArgs } from "./args/CreateManyAndReturnCharacteristicArgs";
import { Characteristic } from "../../../models/Characteristic";
import { CreateManyAndReturnCharacteristic } from "../../outputs/CreateManyAndReturnCharacteristic";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Characteristic)
export class CreateManyAndReturnCharacteristicResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnCharacteristic], {
    nullable: false
  })
  async createManyAndReturnCharacteristic(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnCharacteristicArgs): Promise<CreateManyAndReturnCharacteristic[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).characteristics.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
