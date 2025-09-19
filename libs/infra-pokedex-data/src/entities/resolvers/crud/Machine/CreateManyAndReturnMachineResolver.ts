import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnMachineArgs } from "./args/CreateManyAndReturnMachineArgs";
import { Machine } from "../../../models/Machine";
import { CreateManyAndReturnMachine } from "../../outputs/CreateManyAndReturnMachine";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Machine)
export class CreateManyAndReturnMachineResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnMachine], {
    nullable: false
  })
  async createManyAndReturnMachine(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnMachineArgs): Promise<CreateManyAndReturnMachine[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).machines.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
