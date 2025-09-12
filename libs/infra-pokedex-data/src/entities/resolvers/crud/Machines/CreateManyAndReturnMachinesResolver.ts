import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnMachinesArgs } from "./args/CreateManyAndReturnMachinesArgs";
import { Machines } from "../../../models/Machines";
import { CreateManyAndReturnMachines } from "../../outputs/CreateManyAndReturnMachines";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Machines)
export class CreateManyAndReturnMachinesResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnMachines], {
    nullable: false
  })
  async createManyAndReturnMachines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnMachinesArgs): Promise<CreateManyAndReturnMachines[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).machines.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
