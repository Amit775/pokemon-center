import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationUpdateManyWithoutRegionNestedInput } from "../inputs/GenerationUpdateManyWithoutRegionNestedInput";
import { LocationUpdateManyWithoutRegionNestedInput } from "../inputs/LocationUpdateManyWithoutRegionNestedInput";
import { VersionGroupRegionUpdateManyWithoutRegionNestedInput } from "../inputs/VersionGroupRegionUpdateManyWithoutRegionNestedInput";

@TypeGraphQL.InputType("RegionUpdateWithoutPokedexesInput", {})
export class RegionUpdateWithoutPokedexesInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => GenerationUpdateManyWithoutRegionNestedInput, {
    nullable: true
  })
  generations?: GenerationUpdateManyWithoutRegionNestedInput | undefined;

  @TypeGraphQL.Field(_type => LocationUpdateManyWithoutRegionNestedInput, {
    nullable: true
  })
  locations?: LocationUpdateManyWithoutRegionNestedInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRegionUpdateManyWithoutRegionNestedInput, {
    nullable: true
  })
  versionGroups?: VersionGroupRegionUpdateManyWithoutRegionNestedInput | undefined;
}
