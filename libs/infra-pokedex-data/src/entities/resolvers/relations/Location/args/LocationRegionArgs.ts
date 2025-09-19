import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RegionWhereInput } from "../../../inputs/RegionWhereInput";

@TypeGraphQL.ArgsType()
export class LocationRegionArgs {
  @TypeGraphQL.Field(_type => RegionWhereInput, {
    nullable: true
  })
  where?: RegionWhereInput | undefined;
}
