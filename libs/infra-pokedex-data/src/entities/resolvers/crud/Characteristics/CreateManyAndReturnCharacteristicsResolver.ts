import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnCharacteristicsArgs } from "./args/CreateManyAndReturnCharacteristicsArgs";
import { Characteristics } from "../../../models/Characteristics";
import { CreateManyAndReturnCharacteristics } from "../../outputs/CreateManyAndReturnCharacteristics";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Characteristics)
export class CreateManyAndReturnCharacteristicsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnCharacteristics], {
    nullable: false
  })
  async createManyAndReturnCharacteristics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnCharacteristicsArgs): Promise<CreateManyAndReturnCharacteristics[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).characteristics.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
