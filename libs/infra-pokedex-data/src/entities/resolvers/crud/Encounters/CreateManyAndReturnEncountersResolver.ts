import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnEncountersArgs } from "./args/CreateManyAndReturnEncountersArgs";
import { Encounters } from "../../../models/Encounters";
import { CreateManyAndReturnEncounters } from "../../outputs/CreateManyAndReturnEncounters";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Encounters)
export class CreateManyAndReturnEncountersResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnEncounters], {
    nullable: false
  })
  async createManyAndReturnEncounters(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnEncountersArgs): Promise<CreateManyAndReturnEncounters[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounters.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
