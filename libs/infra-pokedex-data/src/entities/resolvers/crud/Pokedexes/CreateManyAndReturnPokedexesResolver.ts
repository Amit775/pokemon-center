import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPokedexesArgs } from "./args/CreateManyAndReturnPokedexesArgs";
import { Pokedexes } from "../../../models/Pokedexes";
import { CreateManyAndReturnPokedexes } from "../../outputs/CreateManyAndReturnPokedexes";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Pokedexes)
export class CreateManyAndReturnPokedexesResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokedexes], {
    nullable: false
  })
  async createManyAndReturnPokedexes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokedexesArgs): Promise<CreateManyAndReturnPokedexes[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexes.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
