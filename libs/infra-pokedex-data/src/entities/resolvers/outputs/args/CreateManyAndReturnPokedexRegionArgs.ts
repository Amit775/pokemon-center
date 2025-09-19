import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RegionWhereInput } from "../../inputs/RegionWhereInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnPokedexRegionArgs {
  @TypeGraphQL.Field(_type => RegionWhereInput, {
    nullable: true
  })
  where?: RegionWhereInput | undefined;
}
