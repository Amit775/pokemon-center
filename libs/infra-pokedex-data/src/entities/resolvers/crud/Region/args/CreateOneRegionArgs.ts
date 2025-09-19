import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RegionCreateInput } from "../../../inputs/RegionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneRegionArgs {
  @TypeGraphQL.Field(_type => RegionCreateInput, {
    nullable: false
  })
  data!: RegionCreateInput;
}
