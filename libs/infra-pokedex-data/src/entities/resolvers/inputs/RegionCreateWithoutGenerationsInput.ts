import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateNestedManyWithoutRegionInput } from "../inputs/LocationCreateNestedManyWithoutRegionInput";
import { PokedexCreateNestedManyWithoutRegionInput } from "../inputs/PokedexCreateNestedManyWithoutRegionInput";
import { VersionGroupRegionCreateNestedManyWithoutRegionInput } from "../inputs/VersionGroupRegionCreateNestedManyWithoutRegionInput";

@TypeGraphQL.InputType("RegionCreateWithoutGenerationsInput", {})
export class RegionCreateWithoutGenerationsInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => LocationCreateNestedManyWithoutRegionInput, {
    nullable: true
  })
  locations?: LocationCreateNestedManyWithoutRegionInput | undefined;

  @TypeGraphQL.Field(_type => PokedexCreateNestedManyWithoutRegionInput, {
    nullable: true
  })
  pokedexes?: PokedexCreateNestedManyWithoutRegionInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRegionCreateNestedManyWithoutRegionInput, {
    nullable: true
  })
  versionGroups?: VersionGroupRegionCreateNestedManyWithoutRegionInput | undefined;
}
