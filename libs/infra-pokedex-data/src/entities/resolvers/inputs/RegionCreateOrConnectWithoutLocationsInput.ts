import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionCreateWithoutLocationsInput } from "../inputs/RegionCreateWithoutLocationsInput";
import { RegionWhereUniqueInput } from "../inputs/RegionWhereUniqueInput";

@TypeGraphQL.InputType("RegionCreateOrConnectWithoutLocationsInput", {})
export class RegionCreateOrConnectWithoutLocationsInput {
  @TypeGraphQL.Field(_type => RegionWhereUniqueInput, {
    nullable: false
  })
  where!: RegionWhereUniqueInput;

  @TypeGraphQL.Field(_type => RegionCreateWithoutLocationsInput, {
    nullable: false
  })
  create!: RegionCreateWithoutLocationsInput;
}
