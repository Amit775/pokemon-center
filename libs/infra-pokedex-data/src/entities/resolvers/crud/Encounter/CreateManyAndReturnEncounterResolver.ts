import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnEncounterArgs } from "./args/CreateManyAndReturnEncounterArgs";
import { Encounter } from "../../../models/Encounter";
import { CreateManyAndReturnEncounter } from "../../outputs/CreateManyAndReturnEncounter";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Encounter)
export class CreateManyAndReturnEncounterResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnEncounter], {
    nullable: false
  })
  async createManyAndReturnEncounter(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnEncounterArgs): Promise<CreateManyAndReturnEncounter[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounters.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
