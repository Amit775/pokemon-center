import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionCreateWithoutLocationsInput } from "../inputs/RegionCreateWithoutLocationsInput";
import { RegionUpdateWithoutLocationsInput } from "../inputs/RegionUpdateWithoutLocationsInput";
import { RegionWhereInput } from "../inputs/RegionWhereInput";

@TypeGraphQL.InputType("RegionUpsertWithoutLocationsInput", {})
export class RegionUpsertWithoutLocationsInput {
  @TypeGraphQL.Field(_type => RegionUpdateWithoutLocationsInput, {
    nullable: false
  })
  update!: RegionUpdateWithoutLocationsInput;

  @TypeGraphQL.Field(_type => RegionCreateWithoutLocationsInput, {
    nullable: false
  })
  create!: RegionCreateWithoutLocationsInput;

  @TypeGraphQL.Field(_type => RegionWhereInput, {
    nullable: true
  })
  where?: RegionWhereInput | undefined;
}
