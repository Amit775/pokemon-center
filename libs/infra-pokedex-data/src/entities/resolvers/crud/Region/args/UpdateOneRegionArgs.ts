import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RegionUpdateInput } from "../../../inputs/RegionUpdateInput";
import { RegionWhereUniqueInput } from "../../../inputs/RegionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneRegionArgs {
  @TypeGraphQL.Field(_type => RegionUpdateInput, {
    nullable: false
  })
  data!: RegionUpdateInput;

  @TypeGraphQL.Field(_type => RegionWhereUniqueInput, {
    nullable: false
  })
  where!: RegionWhereUniqueInput;
}
