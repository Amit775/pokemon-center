import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionUpdateWithoutLocationsInput } from "../inputs/RegionUpdateWithoutLocationsInput";
import { RegionWhereInput } from "../inputs/RegionWhereInput";

@TypeGraphQL.InputType("RegionUpdateToOneWithWhereWithoutLocationsInput", {})
export class RegionUpdateToOneWithWhereWithoutLocationsInput {
  @TypeGraphQL.Field(_type => RegionWhereInput, {
    nullable: true
  })
  where?: RegionWhereInput | undefined;

  @TypeGraphQL.Field(_type => RegionUpdateWithoutLocationsInput, {
    nullable: false
  })
  data!: RegionUpdateWithoutLocationsInput;
}
