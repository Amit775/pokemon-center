import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCreateNestedManyWithoutRegionInput } from "../inputs/GenerationCreateNestedManyWithoutRegionInput";
import { LocationCreateNestedManyWithoutRegionInput } from "../inputs/LocationCreateNestedManyWithoutRegionInput";
import { VersionGroupRegionCreateNestedManyWithoutRegionInput } from "../inputs/VersionGroupRegionCreateNestedManyWithoutRegionInput";

@TypeGraphQL.InputType("RegionCreateWithoutPokedexesInput", {})
export class RegionCreateWithoutPokedexesInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => GenerationCreateNestedManyWithoutRegionInput, {
    nullable: true
  })
  generations?: GenerationCreateNestedManyWithoutRegionInput | undefined;

  @TypeGraphQL.Field(_type => LocationCreateNestedManyWithoutRegionInput, {
    nullable: true
  })
  locations?: LocationCreateNestedManyWithoutRegionInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRegionCreateNestedManyWithoutRegionInput, {
    nullable: true
  })
  versionGroups?: VersionGroupRegionCreateNestedManyWithoutRegionInput | undefined;
}
