import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RegionWhereUniqueInput } from "../../../inputs/RegionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueRegionArgs {
  @TypeGraphQL.Field(_type => RegionWhereUniqueInput, {
    nullable: false
  })
  where!: RegionWhereUniqueInput;
}
