import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateNestedManyWithoutRegionInput } from "../inputs/GenerationsCreateNestedManyWithoutRegionInput";
import { LocationsCreateNestedManyWithoutRegionInput } from "../inputs/LocationsCreateNestedManyWithoutRegionInput";
import { VersionGroupRegionsCreateNestedManyWithoutRegionInput } from "../inputs/VersionGroupRegionsCreateNestedManyWithoutRegionInput";

@TypeGraphQL.InputType("RegionsCreateWithoutPokedexesInput", {})
export class RegionsCreateWithoutPokedexesInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => GenerationsCreateNestedManyWithoutRegionInput, {
    nullable: true
  })
  generations?: GenerationsCreateNestedManyWithoutRegionInput | undefined;

  @TypeGraphQL.Field(_type => LocationsCreateNestedManyWithoutRegionInput, {
    nullable: true
  })
  locations?: LocationsCreateNestedManyWithoutRegionInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRegionsCreateNestedManyWithoutRegionInput, {
    nullable: true
  })
  versionGroups?: VersionGroupRegionsCreateNestedManyWithoutRegionInput | undefined;
}
