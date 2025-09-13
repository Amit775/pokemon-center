import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsUpdateManyWithoutRegionNestedInput } from "../inputs/GenerationsUpdateManyWithoutRegionNestedInput";
import { LocationsUpdateManyWithoutRegionNestedInput } from "../inputs/LocationsUpdateManyWithoutRegionNestedInput";
import { VersionGroupRegionsUpdateManyWithoutRegionNestedInput } from "../inputs/VersionGroupRegionsUpdateManyWithoutRegionNestedInput";

@TypeGraphQL.InputType("RegionsUpdateWithoutPokedexesInput", {})
export class RegionsUpdateWithoutPokedexesInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => GenerationsUpdateManyWithoutRegionNestedInput, {
    nullable: true
  })
  generations?: GenerationsUpdateManyWithoutRegionNestedInput | undefined;

  @TypeGraphQL.Field(_type => LocationsUpdateManyWithoutRegionNestedInput, {
    nullable: true
  })
  locations?: LocationsUpdateManyWithoutRegionNestedInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRegionsUpdateManyWithoutRegionNestedInput, {
    nullable: true
  })
  versionGroups?: VersionGroupRegionsUpdateManyWithoutRegionNestedInput | undefined;
}
