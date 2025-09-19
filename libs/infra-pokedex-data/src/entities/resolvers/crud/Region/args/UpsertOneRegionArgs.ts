import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RegionCreateInput } from "../../../inputs/RegionCreateInput";
import { RegionUpdateInput } from "../../../inputs/RegionUpdateInput";
import { RegionWhereUniqueInput } from "../../../inputs/RegionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneRegionArgs {
  @TypeGraphQL.Field(_type => RegionWhereUniqueInput, {
    nullable: false
  })
  where!: RegionWhereUniqueInput;

  @TypeGraphQL.Field(_type => RegionCreateInput, {
    nullable: false
  })
  create!: RegionCreateInput;

  @TypeGraphQL.Field(_type => RegionUpdateInput, {
    nullable: false
  })
  update!: RegionUpdateInput;
}
