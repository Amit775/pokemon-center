import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RegionWhereUniqueInput } from "../../../inputs/RegionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueRegionOrThrowArgs {
  @TypeGraphQL.Field(_type => RegionWhereUniqueInput, {
    nullable: false
  })
  where!: RegionWhereUniqueInput;
}
